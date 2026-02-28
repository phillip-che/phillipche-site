import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Fetches the current video count from your YouTube channel for display (e.g. in About hobbies).
 */
export function useYouTubeVideoCount(): { videoCountText: string | null; loading: boolean } {
  const [videoCountText, setVideoCountText] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
  const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;

  useEffect(() => {
    if (!YOUTUBE_API_KEY || !CHANNEL_ID) {
      setLoading(false);
      return;
    }

    const fetchVideoCount = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${YOUTUBE_API_KEY}`
        );

        if (response.data.items?.length) {
          const videoCount = response.data.items[0].statistics?.videoCount;
          if (videoCount != null) {
            const n = Number(videoCount);
            setVideoCountText(n === 1 ? '1 video' : `${n.toLocaleString()} videos`);
          }
        }
      } catch (error) {
        console.error('Error fetching YouTube video count:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideoCount();
  }, [YOUTUBE_API_KEY, CHANNEL_ID]);

  return { videoCountText, loading };
}
