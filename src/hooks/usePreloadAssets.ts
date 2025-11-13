import { useState, useEffect } from "react";

// Import all assets that need to be preloaded
import invtImage from "@/assets/invt.png";
import repImage from "@/assets/rep.png";
import portfolioImage from "@/assets/portfolio.png";
import simonImage from "@/assets/simon.jpeg";
import simonRamenImage from "@/assets/simon-ramen.png";
import simonIconImage from "@/assets/simon-icon.png";

const ASSETS_TO_PRELOAD = [
  invtImage,
  repImage,
  portfolioImage,
  simonImage,
  simonRamenImage,
  simonIconImage,
];

export function usePreloadAssets() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const preloadImage = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => reject();
        img.src = src;
      });
    };

    const preloadAssets = async () => {
      const promises = ASSETS_TO_PRELOAD.map((asset, index) =>
        preloadImage(asset).then(() => {
          setProgress(((index + 1) / ASSETS_TO_PRELOAD.length) * 100);
        })
      );

      try {
        await Promise.all(promises);
      } catch (error) {
        console.error("Error preloading assets:", error);
      } finally {
        setIsLoading(false);
      }
    };

    preloadAssets();
  }, []);

  return { isLoading, progress };
}
