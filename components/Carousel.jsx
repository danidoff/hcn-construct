'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/Carousel.module.css'

/**
 * Renders a horizontal carousel for an array of images.
 *
 * @param {Array} images - An array of objects: [{ src: string, alt: string }, ...]
 */
export default function Carousel({ images = [] }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    if (!images.length) return null

    function nextSlide() {
        // Move to the next slide (wrap around at the end)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    function prevSlide() {
        // Move to the previous slide (wrap around at the beginning)
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + images.length) % images.length
        )
    }

    return (
        <div className={styles.carousel}>
            {/* Inner container that shifts left/right based on currentIndex */}
            <div
                className={styles.carouselInner}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((img, index) => (
                    <div className={styles.carouselItem} key={index}>
                        {/* Fill the entire slide with the image */}
                        <Image
                            src={img.src}
                            alt={img.alt || `Slide ${index}`}
                            width={600}
                            height={400}
                            style={{ objectFit: 'cover' }}
                            priority={index === 0} // Optionally prioritize the first image
                        />
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button className={styles.navButton} onClick={prevSlide}>
                ‹
            </button>
            <button className={styles.navButton} onClick={nextSlide}>
                ›
            </button>
        </div>
    )
}
