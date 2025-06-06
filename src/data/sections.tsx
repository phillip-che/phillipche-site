import { motion } from 'framer-motion';
import { Project } from '../components/Project';

const projects = [
  {
    title: "Cypher Chat",
    description: "Secure client-server chat web app enabling real-time and private communication.",
    tech: [
      { name: "TypeScript", color: "blue" },
      { name: "React", color: "cyan" },
      { name: "Next.js", color: "neutral" },
      { name: "Node.js", color: "green" },
      { name: "Express.js", color: "amber" },
      { name: "AWS", color: "orange" }
    ],
    link: "https://github.com/phillip-che/ChatApplication",
    previewImage: "https://personal-site-phi-snowy.vercel.app/assets/cypherchat-7f589c33.png"
  },
  {
    title: "Sole Exchange",
    description: "Forum that allows users to post, interact, and search about anything sneaker related..",
    tech: [
      { name: "React", color: "cyan" },
      { name: "JavaScript", color: "yellow" },
      { name: "Node.js", color: "green" },
      { name: "Supabase", color: "emerald" }
    ],
    link: "https://github.com/phillip-che/Sneaker-Forum",
    previewImage: "https://personal-site-phi-snowy.vercel.app/assets/soleexchange1-40b3b5a8.png"
  },
  {
    title: "Spotify Data Dashboard",
    description: "Dashboard that fetches Spotify's Top 50 songs and visualizes data in text and chart form.",
    tech: [
      { name: "React", color: "cyan" },
      { name: "Spotify API", color: "emerald" },
      { name: "JavaScript", color: "yellow" },
      { name: "Node.js", color: "green" },
    ],
    link: "https://github.com/phillip-che/Data-Dashboard",
    previewImage: "https://personal-site-phi-snowy.vercel.app/assets/spotifydash-7d7e663f.png"
  }
];

export const sections = [
    {
      title: "Timeline",
      content: (
        <div className="space-y-4 mb-8">
          {[
            {
              company: "Amazon",
              date: "2024 - Now",
              title: "Software Development Engineer",
              description: ["working on large scale messaging systems"],
              dotColor: "bg-blue-500"
            },
            {
              company: "California State Polytechnic University, Pomona",
              date: "2020 - 2024",
              title: "B.S. Computer Science",
              description: ["got my degree to make my parents proud"],
              dotColor: "bg-amber-300"
            },
            {
              company: "Amazon",
              date: "2023 - 2023",
              title: "Software Development Engineer Intern",
              description: ["worked on amazon fresh grocery experience"],
              dotColor: "bg-green-500"
            },
            {
              company: "Solace Notify",
              date: "2019 - 2023",
              title: "Founder",
              description: ["built reselling community and developed tools"],
              dotColor: "bg-red-500"
            }
          ].map((item) => (
            <div key={item.company + item.date} className="relative">
              <div 
                className={`absolute -left-[17px] top-2 w-[9px] h-[9px] rounded-full ${item.dotColor} ring-4 ring-white dark:ring-gray-900`}
              />
              <motion.div
                className="group py-1 transition-colors"
                whileHover={{ scale: 1.05 }}
                style={{ transformOrigin: 'left' }}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <p className="font-medium">{item.company}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">{item.date}</p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">{item.title}</p>
                <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-1 space-y-1">
                  {item.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Projects",
      content: (
        <div className="space-y-4">
          {projects.map((project) => (
            <Project key={project.title} project={project} />
          ))}
        </div>
      )
    },
    {
      title: "Hobbies",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {[
            {
              title: "YouTube",
              description: "documenting my life as a software engineer",
              stats: "19 videos",
              color: "rose"
            },
            {
              title: "Real Estate Investing",
              description: "playing monopoly but with real money",
              stats: "0 properties",
              color: "blue"
            },
            {
              title: "Stocks and Crypto",
              description: "buying high and selling low is my philosophy",
              stats: "-$25,000 profit",
              color: "green"
            },
            {
              title: "Mechanical Keyboards",
              description: "fun but will be the reason why im homeless",
              stats: "3 custom keyboards",
              color: "purple"
            },
          ].map((hobby) => (
            <motion.div
              key={hobby.title}
              className="group py-1 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <div>
                <h3 className={`font-medium`}>
                  {hobby.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {hobby.description}
                </p>
                <p className={`text-xs text-${hobby.color}-500 dark:text-${hobby.color}-500 mt-2 font-medium`}>
                  {hobby.stats}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      )
    }
  ]