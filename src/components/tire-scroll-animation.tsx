"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface TireScrollAnimationProps {
  /** Total number of frames in the sequence (e.g., 60) */
  frameCount: number;
  /** Path pattern with {index} placeholder, e.g. "/frames/tire-{index}.webp" */
  framePath: string;
  /** Height of the scroll-driven section in viewport units (default: 300vh = 3 screens of scroll) */
  scrollHeight?: string;
  /** Whether to pad frame index with zeros, e.g. "001" vs "1" (default: true, 3 digits) */
  zeroPad?: number;
}

export default function TireScrollAnimation({
  frameCount,
  framePath,
  scrollHeight = "300vh",
  zeroPad = 3,
}: TireScrollAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number>(0);
  const [loaded, setLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  const getFramePath = useCallback(
    (index: number) => {
      const padded = zeroPad > 0 ? String(index).padStart(zeroPad, "0") : String(index);
      return framePath.replace("{index}", padded);
    },
    [framePath, zeroPad]
  );

  // Preload all frames
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = getFramePath(i + 1); // 1-indexed frame files
      img.onload = () => {
        loadedCount++;
        setLoadProgress(Math.round((loadedCount / frameCount) * 100));
        if (loadedCount === frameCount) {
          setLoaded(true);
          // Draw first frame
          drawFrame(0);
        }
      };
      img.onerror = () => {
        loadedCount++;
        setLoadProgress(Math.round((loadedCount / frameCount) * 100));
      };
      images[i] = img;
    }

    imagesRef.current = images;

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [frameCount, getFramePath]);

  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = imagesRef.current[frameIndex];
    if (!canvas || !ctx || !img || !img.complete) return;

    // Match canvas to display size
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    ctx.clearRect(0, 0, rect.width, rect.height);

    // Draw image centered and covering the canvas (contain mode)
    const imgAspect = img.naturalWidth / img.naturalHeight;
    const canvasAspect = rect.width / rect.height;

    let drawW: number, drawH: number, drawX: number, drawY: number;

    if (imgAspect > canvasAspect) {
      // Image wider than canvas — fit to height
      drawH = rect.height;
      drawW = drawH * imgAspect;
      drawX = (rect.width - drawW) / 2;
      drawY = 0;
    } else {
      // Image taller than canvas — fit to width
      drawW = rect.width;
      drawH = drawW / imgAspect;
      drawX = 0;
      drawY = (rect.height - drawH) / 2;
    }

    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  }, []);

  // Scroll handler — maps scroll position to frame index
  useEffect(() => {
    if (!loaded) return;

    const handleScroll = () => {
      rafRef.current = requestAnimationFrame(() => {
        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const scrollableHeight = rect.height - window.innerHeight;

        // How far through the container are we? 0 = top, 1 = bottom
        const progress = Math.min(
          Math.max(-rect.top / scrollableHeight, 0),
          1
        );

        const frameIndex = Math.min(
          Math.floor(progress * frameCount),
          frameCount - 1
        );

        if (frameIndex !== currentFrameRef.current) {
          currentFrameRef.current = frameIndex;
          drawFrame(frameIndex);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial frame

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [loaded, frameCount, drawFrame]);

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: scrollHeight }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-slate-950 z-10">
            <div className="text-center">
              <div className="w-48 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-300"
                  style={{ width: `${loadProgress}%` }}
                />
              </div>
              <p className="text-sm text-slate-500 mt-2">
                Loading animation... {loadProgress}%
              </p>
            </div>
          </div>
        )}
        <canvas
          ref={canvasRef}
          className="w-full h-full max-w-4xl max-h-[80vh]"
        />
      </div>
    </div>
  );
}
