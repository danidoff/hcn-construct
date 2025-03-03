'use client'

import React from 'react'
import { ReactLenis } from 'lenis/react'

export default function LenisProvider({ children }) {
    return (
        <ReactLenis
            root // Tells Lenis to control <html> scrolling instead of a wrapper div
            options={{
                // Below are example settings you can tweak to your liking

                // The duration of the scroll animation, in seconds:
                duration: 1.2,

                // Easing function for the scroll animation:
                // You can swap this out for a custom easing if you like
                easing: (t) => 1 - Math.pow(1 - t, 3),

                // Whether to use smooth scrolling for wheel/touch events:
                smoothWheel: true, // enable smooth scrolling on wheel
                smoothTouch: false, // disable smooth scrolling on touch (enable if you want that too)

                // Lerp (0 to 1) is the easing factor for momentum; lower for more “drag,” higher for snappier
                lerp: 0.1,
            }}
        >
            {children}
        </ReactLenis>
    )
}
