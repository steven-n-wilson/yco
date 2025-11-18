'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface ImageCarouselProps {
  images: string[];
  scrollSpeed?: number;
}

export default function ImageCarousel({ images, scrollSpeed = 30 }: ImageCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (images.length === 0 || !containerRef.current) return;

    const container = containerRef.current;
    let animationFrameId: number;
    let position = 0;

    const animate = () => {
      position -= 0.5; // Slow, smooth scroll speed
      
      // Reset position when we've scrolled through all images
      const totalWidth = container.scrollWidth / 2; // Divide by 2 because we duplicate images
      if (Math.abs(position) >= totalWidth) {
        position = 0;
      }

      container.style.transform = `translateX(${position}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [images.length]);

  if (images.length === 0) {
    return null;
  }

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <div className="relative w-full mt-12 h-48 md:h-60 overflow-hidden">
      <div
        ref={containerRef}
        className="flex gap-4 h-full"
        style={{ width: 'max-content' }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={`${index}-${image}`}
            className="relative flex-shrink-0 w-[240px] md:w-[340px] h-full rounded-2xl overflow-hidden"
          >
            <Image
              src={image}
              alt={`Carousel image ${(index % images.length) + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 280px, 400px"
              priority={index < 2}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

