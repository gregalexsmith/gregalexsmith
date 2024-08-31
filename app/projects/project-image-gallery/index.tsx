'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Lightbox } from './lightbox';

interface ProjectImages {
  images?: string[];
  title: string;
}

export default function ImageGallery({ project }: { project: ProjectImages }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  if (!project.images || project.images.length === 0) {
    return null;
  }

  return (
    <>
      <div className="flex justify-items-start gap-3 py-4">
        {project.images.map((img, index) => (
          <div
            key={img}
            className="relative h-[140px] flex-[100px] cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={img}
              className="object-cover object-top rounded-lg"
              fill
              alt={`${project.title} image ${index + 1}`}
              sizes="(max-width: 1200px) 100vw, 76vw"
            />
          </div>
        ))}
      </div>

      {selectedImageIndex !== null && project.images && (
        <Lightbox
          images={project.images}
          initialIndex={selectedImageIndex}
          onClose={closeLightbox}
          title={project.title}
        />
      )}
    </>
  );
}
