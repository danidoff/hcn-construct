"use client"

import { useLenis } from 'lenis/react'
import { useEffect } from 'react'

export default function DemoSection() {
    const lenis = useLenis(({ scroll, limit, velocity, progress }) => {
        // This callback runs on every scroll tick
        // e.g., console.log("scroll:", scroll, "velocity:", velocity)
    })

    useEffect(() => {
        // If you ever want to call Lenis directly:
        // lenis.scrollTo('#some-element')
    }, [lenis])

    return (
        <div style={{ height: '200vh', padding: '1rem' }}>
            <h1>Demo Section with smooth scrolling</h1>
        </div>
    )
}
