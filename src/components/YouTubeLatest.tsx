import { useState, useEffect } from 'react';
import axios from 'axios';
import VideoCarousel from './VideoCarousel';
import FadeIn from '../utils/FadeIn';

interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
}

interface YouTubeStats {
  subscriberCount: string;
  viewCount: string;
}

const YouTubeLatest = () => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [channelStats, setChannelStats] = useState<YouTubeStats | null>(null);
  const [loading, setLoading] = useState(true);

  const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
  const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;

  useEffect(() => {
    const fetchChannelStats = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${YOUTUBE_API_KEY}`
        );

        if (response.data.items?.length) {
          const stats = response.data.items[0].statistics;
          setChannelStats({
            subscriberCount: Number(stats.subscriberCount).toLocaleString(),
            viewCount: Number(stats.viewCount).toLocaleString()
          });
        }
      } catch (error) {
        console.error('Error fetching channel stats:', error);
      }
    };

    fetchChannelStats();
  }, [YOUTUBE_API_KEY, CHANNEL_ID]);

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      try {
        const channelResponse = await axios.get(
          `https://www.googleapis.com/youtube/v3/channels?key=${YOUTUBE_API_KEY}&id=${CHANNEL_ID}&part=contentDetails`
        );
        
        if (!channelResponse.data.items?.length) {
          throw new Error('No channel found with this ID');
        }

        const uploadsPlaylistId = channelResponse.data.items[0].contentDetails.relatedPlaylists.uploads;

        const videoResponse = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlistItems?key=${YOUTUBE_API_KEY}&playlistId=${uploadsPlaylistId}&part=snippet&maxResults=50`
        );

        if (!videoResponse.data.items?.length) {
          throw new Error('No videos found in uploads playlist');
        }

        const longFormVideos = [];
        for (const item of videoResponse.data.items) {
          const videoId = item.snippet.resourceId.videoId;
          const videoDetailsResponse = await axios.get(
            `https://www.googleapis.com/youtube/v3/videos?key=${YOUTUBE_API_KEY}&id=${videoId}&part=contentDetails`
          );

          if (!videoDetailsResponse.data.items?.length) continue;

          const duration = videoDetailsResponse.data.items[0].contentDetails.duration;
          const durationInSeconds = parseDuration(duration);
          if (durationInSeconds > 120) {
            longFormVideos.push({
              id: videoId,
              title: item.snippet.title,
              thumbnail: item.snippet.thumbnails.high.url,
              publishedAt: item.snippet.publishedAt,
            });
          }
        }

        setVideos(longFormVideos);
      } catch (error) {
        console.error('Error fetching YouTube data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [YOUTUBE_API_KEY, CHANNEL_ID]);

  // Show loading skeleton until we have videos
  if (loading || !videos.length) {
    return (
      <div className="space-y-6">
        <div>
          <div className="aspect-video rounded-xl overflow-hidden">
            <div className="w-full h-full bg-gray-200 dark:bg-gray-800 animate-pulse" />
          </div>
        </div>
        
        {/* Previous Videos Loading State */}
        <div className="grid grid-cols-4 gap-3">
          {Array.from({ length: 4 }).map((_, index) => (
            <div 
              key={index}
              className="aspect-video rounded-lg bg-gray-200 dark:bg-gray-800 animate-pulse"
            />
          ))}
        </div>
      </div>
    );
  }

  const [latestVideo, ...previousVideos] = videos;

  return (
      <div className="space-y-6">
        {/* Latest Video Header with Stats for Desktop */}
        <div>
          <div className="hidden sm:flex sm:flex-row sm:justify-between sm:items-center">
            <h2 className="text-lg font-semibold">Latest Video</h2>
            {channelStats && !loading && (
              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H6v-.99c.2-.72 3.3-2.01 6-2.01s5.8 1.29 6 2v1z"/>
                  </svg>
                  <span>{channelStats.subscriberCount} subscribers</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                  </svg>
                  <span>{channelStats.viewCount} views</span>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Header */}
          <div className="sm:hidden">
            <h2 className="text-lg font-semibold">Latest Video</h2>
          </div>

          {/* Video */}
          <div className="aspect-video rounded-xl overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${latestVideo.id}?autoplay=1&mute=1`}
              title={latestVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Mobile Stats */}
          {channelStats && !loading && (
            <div className="sm:hidden flex justify-center gap-4 text-sm text-gray-600 dark:text-gray-400 pt-2">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H6v-.99c.2-.72 3.3-2.01 6-2.01s5.8 1.29 6 2v1z"/>
                </svg>
                <span>{channelStats.subscriberCount} subscribers</span>
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                </svg>
                <span>{channelStats.viewCount} views</span>
              </div>
            </div>
          )}
        </div>
        <FadeIn>
        {/* Previous Videos Carousel */}
        <VideoCarousel videos={previousVideos} visibleCount={4} />
        </FadeIn>
      </div>
    
  );
};

const parseDuration = (duration: string): number => {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  if (!match) return 0;
  
  const hours = (match[1] ? parseInt(match[1].slice(0, -1)) : 0);
  const minutes = (match[2] ? parseInt(match[2].slice(0, -1)) : 0);
  const seconds = (match[3] ? parseInt(match[3].slice(0, -1)) : 0);
  
  return hours * 3600 + minutes * 60 + seconds;
};

export default YouTubeLatest; 