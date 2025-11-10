// src/hooks/useProjects.ts
import { useMemo } from "react";
import repImage from "@/assets/rep-icon.png";
import dashImage from "@/assets/dash-icon.png";

interface Review {
  name: string;
  review: string;
  rating: number;
}

interface FAQ {
  question: string;
  answer: string;
}

export interface App {
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  image?: string;
  screenshots?: string[];
  features?: string[];
  link?: string;
  featured?: boolean;
  github?: string;
  reviews?: Review[];
  faq?: FAQ[];
}

export function useApps() {
  const apps: App[] = useMemo(
    () => [
      {
        title: "Rep",
        description:
          "Workout tracker built to work offline and sync with your friends.",
        longDescription:
          "Rep is a comprehensive workout tracking mobile application built with React Native and Expo. It enables users to log exercises, track progress over time, and share achievements with friends. The app features offline-first architecture, ensuring users can log workouts without internet connectivity, with automatic synchronization when connection is restored. Supabase provides real-time data sync, authentication, and cloud storage.",
        image: repImage,
        screenshots: [repImage, repImage, repImage],
        tags: ["React Native", "Expo", "TypeScript"],
        features: [
          "Offline-first architecture with automatic sync",
          "Exercise library with custom exercise creation",
          "Progress tracking with charts and statistics",
          "Workout history and personal records",
          "Social features for sharing progress with friends",
          "Real-time data synchronization via Supabase",
        ],
        reviews: [
          {
            name: "John Doe",
            review:
              "I love this app! It's so easy to use and has all the features I need.",
            rating: 5,
          },
          {
            name: "Jane Doe",
            review: "This app has changed my life! I'm so much stronger now.",
            rating: 5,
          },
        ],
        faq: [
          {
            question: "How do I add a new exercise?",
            answer:
              "You can add a new exercise by tapping the 'Add Exercise' button and entering the exercise details.",
          },

          {
            question: "How do I track my progress?",
            answer:
              "You can track your progress by tapping the 'Progress' button and entering the exercise details.",
          },

          {
            question: "How do I sync my data?",
            answer:
              "You can sync your data by tapping the 'Sync' button and entering the exercise details.",
          },
          {
            question: "How do I share my progress with my friends?",
            answer:
              "You can share your progress with your friends by tapping the 'Share' button and entering the exercise details.",
          },
        ],
      },
      {
        title: "Dash",
        description:
          "Running tracker built to work offline and sync with your friends.",
        longDescription:
          "Dash is a comprehensive running tracking mobile application built with React Native and Expo. It enables users to track their runs, track progress over time, and share achievements with friends. The app features offline-first architecture, ensuring users can track runs without internet connectivity, with automatic synchronization when connection is restored. Supabase provides real-time data sync, authentication, and cloud storage.",
        image: dashImage,
        screenshots: [dashImage, dashImage, dashImage],
        tags: ["React Native", "Expo", "TypeScript"],
        features: [
          "Offline-first architecture with automatic sync",
          "Running tracking with charts and statistics",
          "Running history and personal records",
          "Social features for sharing progress with friends",
          "Real-time data synchronization via Supabase",
        ],
        reviews: [
          {
            name: "John Doe",
            review:
              "I love this app! It's so easy to use and has all the features I need.",
            rating: 5,
          },
          {
            name: "Jane Doe",
            review: "This app has changed my life! I'm so much stronger now.",
            rating: 5,
          },
        ],
      },
    ],
    []
  );

  return { apps };
}
