"use client"

import { useEffect, useRef } from "react"
import createGlobe, { COBEOptions } from "cobe"
import { useMotionValue, useSpring } from "motion/react"

import { cn } from "@/lib/utils"

const MOVEMENT_DAMPING = 1400

// JAYAA IT Brand Colors
// Primary: #9A1B21 (Red)
// Secondary: #7A5C00 (Gold)

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.5,
  mapSamples: 20000,
  mapBrightness: 1.0,
  mapBaseBrightness: 0.1,
  // Base color - soft cream/tint matching the hero background
  baseColor: [0.98, 0.96, 0.94],
  // Marker color - brand primary red #9A1B21
  markerColor: [0.604, 0.106, 0.129],
  // Glow color - brand red with transparency
  glowColor: [0.604, 0.106, 0.129],
  scale: 1.1,
  opacity: 0.9,
  markers: [
    // India - Major cities (JAYAA IT's home market)
    { location: [19.076, 72.8777], size: 0.12 }, // Mumbai
    { location: [28.6139, 77.209], size: 0.1 }, // Delhi
    { location: [12.9716, 77.5946], size: 0.09 }, // Bangalore
    { location: [13.0827, 80.2707], size: 0.08 }, // Chennai
    { location: [17.4065, 78.4772], size: 0.07 }, // Hyderabad
    { location: [22.5726, 88.3639], size: 0.07 }, // Kolkata
    { location: [18.5204, 73.8567], size: 0.08 }, // Pune
    // Global tech hubs
    { location: [40.7128, -74.006], size: 0.1 }, // New York
    { location: [37.7749, -122.4194], size: 0.09 }, // San Francisco
    { location: [51.5074, -0.1278], size: 0.09 }, // London
    { location: [52.52, 13.405], size: 0.08 }, // Berlin
    { location: [48.8566, 2.3522], size: 0.08 }, // Paris
    { location: [35.6762, 139.6503], size: 0.08 }, // Tokyo
    { location: [34.6937, 135.5022], size: 0.07 }, // Osaka
    { location: [31.2304, 121.4737], size: 0.08 }, // Shanghai
    { location: [39.9042, 116.4074], size: 0.08 }, // Beijing
    { location: [1.3521, 103.8198], size: 0.07 }, // Singapore
    { location: [25.2048, 55.2708], size: 0.07 }, // Dubai
    { location: [-33.8688, 151.2093], size: 0.07 }, // Sydney
    { location: [41.9028, 12.4964], size: 0.07 }, // Rome
    { location: [52.2297, 21.0122], size: 0.06 }, // Warsaw
    { location: [59.9139, 10.7522], size: 0.06 }, // Oslo
    { location: [55.7558, 37.6173], size: 0.08 }, // Moscow
    { location: [-23.5505, -46.6333], size: 0.07 }, // Sao Paulo
    { location: [19.4326, -99.1332], size: 0.07 }, // Mexico City
    { location: [43.6532, -79.3832], size: 0.07 }, // Toronto
  ],
}

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string
  config?: COBEOptions
}) {
  let phi = 0
  let width = 0
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef(0)

  const r = useMotionValue(0)
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  })

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab"
    }
  }

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
      r.set(r.get() + delta / MOVEMENT_DAMPING)
    }
  }

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth
      }
    }

    window.addEventListener("resize", onResize)
    onResize()

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender: (state) => {
        if (!pointerInteracting.current) phi += 0.005
        state.phi = phi + rs.get()
        state.width = width * 2
        state.height = width * 2
      },
    })

    setTimeout(() => (canvasRef.current!.style.opacity = "1"), 0)
    return () => {
      globe.destroy()
      window.removeEventListener("resize", onResize)
    }
  }, [rs, config])

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX
          updatePointerInteraction(e.clientX)
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  )
}
