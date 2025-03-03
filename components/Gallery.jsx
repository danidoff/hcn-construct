'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/Gallery.module.css'
    
/**
 * Gallery component that displays a grid of images and a modal viewer.
 *
 * @param {Array} images - An array of image objects [{ src: string, alt: string }, ...]
 */
export default function Gallery({ images = [] }) {
    const [currentIndex, setCurrentIndex] = useState(null)

    // Handle thumbnail click -> open modal
    function openModal(index) {
        setCurrentIndex(index)
    }

    // Handle close -> hide modal
    function closeModal() {
        setCurrentIndex(null)
    }

    // Go to prev image
    function prevImage(e) {
        e.stopPropagation()
        setCurrentIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        )
    }

    // Go to next image
    function nextImage(e) {
        e.stopPropagation()
        setCurrentIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        )
    }

    // If an image is selected, retrieve it
    const hasModalOpen = currentIndex !== null
    const currentImage = hasModalOpen ? images[currentIndex] : null

    //    "content": "Vezi magia transformărilor noastre! În portofoliul nostru vei găsi imagini înainte și după ale clienților care au avut încredere în serviciile noastre. Fiecare detaliu este realizat cu profesionalism, respectând unicitatea fiecărei persoane.",
    
    return (
        <div>
            {/* Thumbnail grid */}
            <div className={styles.galleryGrid}>
                {images.map((img, index) => (
                    <div
                        className={styles.thumbnailWrapper}
                        key={index}
                        onClick={() => openModal(index)}
                    >
                        <Image
                            src={img.src}
                            alt={img.alt || `Image ${index}`}
                            width={300}
                            height={200}
                            className={styles.thumbnail}
                        />
                    </div>
                ))}
            </div>

            {/* Modal */}
            {hasModalOpen && (
                <div className={styles.modal} onClick={closeModal}>
                    <div className={styles.modalContent}>
                        <button className={styles.navButton} onClick={prevImage}>
                            ‹
                        </button>
                        <div className={styles.imageContainer}>
                            <Image
                                src={currentImage.src}
                                alt={currentImage.alt || 'Image in modal'}
                                fill
                                style={{ objectFit: 'contain' }}
                                sizes="(max-width: 768px) 90vw,
                       (max-width: 1200px) 70vw,
                       60vw" // example responsive sizing
                            />
                        </div>
                        <button className={styles.navButton} onClick={nextImage}>
                            ›
                        </button>
                    </div>
                    <button className={styles.closeButton} onClick={closeModal}>
                        ✕
                    </button>
                </div>
            )}
        </div>
    )
}
