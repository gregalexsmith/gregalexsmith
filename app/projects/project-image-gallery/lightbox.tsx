'use client';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

type LightboxProps = {
  images: string[];
  initialIndex: number;
  onClose: () => void;
  title: string;
};

export function Lightbox({
  images,
  initialIndex,
  onClose,
  title,
}: LightboxProps) {
  const totalImages = images.length;
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  }, [totalImages]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  }, [totalImages]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        goToNext();
        nextRef.current?.focus();
      } else if (event.key === 'ArrowLeft') {
        goToPrev();
        prevRef.current?.focus();
      } else if (event.key === 'Escape') {
        onClose();
      }
    },
    [goToNext, goToPrev, onClose],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    dialogRef.current?.showModal();
    closeRef.current?.focus();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const showNavigation = images.length > 1;

  return (
    <dialog
      ref={dialogRef}
      className="p-0 bg-transparent max-w-full max-h-full"
    >
      <div className="flex flex-col card-surface">
        <div className="flex justify-between items-center p-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <div className="flex items-center gap-1">
            {showNavigation && (
              <button
                onClick={goToPrev}
                ref={prevRef}
                aria-label="Previous image"
                className="btn btn-icon btn-ghost"
              >
                <ChevronLeft size={24} />
              </button>
            )}
            {showNavigation && (
              <button
                onClick={goToNext}
                ref={nextRef}
                aria-label="Next image"
                className="btn btn-icon btn-ghost"
              >
                <ChevronRight size={24} />
              </button>
            )}
            <button
              onClick={onClose}
              ref={closeRef}
              aria-label="Close"
              className="btn btn-icon btn-ghost"
            >
              <X size={24} />
            </button>
          </div>
        </div>
        <div className="relative">
          <Image
            src={images[currentIndex]}
            alt={`${title} image ${currentIndex + 1}`}
            className="max-w-[90vw] max-h-[calc(90vh-64px)] object-contain mx-auto"
            width={1200}
            height={800}
          />
        </div>
      </div>
    </dialog>
  );
}
