"use client"

import { motion, useMotionValue, useSpring } from "motion/react"
import Image from "next/image"
import { useRef, useState } from "react"

const MotionImage = motion(Image)

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
}

export default function TiltedCard({
  imageSrc,
  altText = "Tilted card image",
  captionText = "",
  containerHeight = "300px",
  containerWidth = "100%",
  imageHeight = "300",
  imageWidth = "300",
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showMobileWarning = true,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false,
}) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useMotionValue(0), springValues)
  const rotateY = useSpring(useMotionValue(0), springValues)
  const scale = useSpring(1, springValues)
  const opacity = useSpring(0)
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  })

  const [lastY, setLastY] = useState(0)

  function handleMouse(e) {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const offsetX = e.clientX - rect.left - rect.width / 2
    const offsetY = e.clientY - rect.top - rect.height / 2

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude

    rotateX.set(rotationX)
    rotateY.set(rotationY)

    x.set(e.clientX - rect.left)
    y.set(e.clientY - rect.top)

    const velocityY = offsetY - lastY
    rotateFigcaption.set(-velocityY * 0.6)
    setLastY(offsetY)
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover)
    opacity.set(1)
  }

  function handleMouseLeave() {
    opacity.set(0)
    scale.set(1)
    rotateX.set(0)
    rotateY.set(0)
    rotateFigcaption.set(0)
  }

  return (
    // <figure className="h-52 aspect-[9/16] relative rounded-lg overflow-hidden">
    // 			<Image
    // 				alt="immagine di esempio"
    // 				className="object-cover"
    // 				fill
    // 				src="https://images.unsplash.com/photo-1753262081045-ff9b365ef62a?q=80&w=2469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    // 			/>
    // 		</figure>
    <figure
      className='relative w-full h-full [perspective:800px] flex-col perfect-center'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouse}
      ref={ref}
      style={{
        height: containerHeight,
        width: containerWidth,
      }}>
      {showMobileWarning && (
        <div className='absolute top-4 text-center text-sm block sm:hidden'>
          This effect is not optimized for mobile. Check on desktop.
        </div>
      )}
      <motion.div
        className='relative [transform-style:preserve-3d]'
        style={{
          width: `${imageWidth}px`,
          height: `${imageHeight}px`,
          rotateX,
          rotateY,
          scale,
        }}>
        {/* <motion.img
          alt={altText}
          className='absolute top-0 left-0 object-cover rounded-[15px] will-change-transform [transform:translateZ(0)]'
          src={imageSrc}
          style={{
            width: imageWidth,
            height: imageHeight,
          }}
        /> */}
        <MotionImage
          alt={altText}
          className='absolute top-0 left-0 object-cover rounded-xl will-change-transform [transform:translateZ(0)]'
          height={imageHeight}
          src={imageSrc}
          // style={{
          //   width: `${imageWidth}px`,
          //   height: `${imageHeight}px`,
          // }}
          width={imageWidth}
        />

        {displayOverlayContent && overlayContent && (
          <motion.div className='absolute top-4 left-0 z-[2] will-change-transform [transform:translateZ(30px)]'>
            {overlayContent}
          </motion.div>
        )}
      </motion.div>
      {showTooltip && (
        <motion.figcaption
          className='pointer-events-none absolute left-0 top-0 rounded-[4px] bg-white px-[10px] py-[4px] text-[10px] text-[#2d2d2d] opacity-0 z-[3] hidden sm:block'
          style={{
            x,
            y,
            opacity,
            rotate: rotateFigcaption,
          }}>
          {captionText}
        </motion.figcaption>
      )}
    </figure>
  )
}
