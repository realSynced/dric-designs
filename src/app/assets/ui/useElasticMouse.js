'use client'
import React from 'react'
import { gsap } from 'gsap'

/**
* Makes a custom cursor scale based on the mouse velocity.
* Create an element for your cursor and pass the onMouseMove to the cointainer you want to capture events from. 
* React implementation of https://codepen.io/gusevdigital/pen/MWxyXRa
**/

export const useElasticMouse = (cursorId) => {
  const animationRef = React.useRef()
  const previousMouse = React.useRef({ x: 0, y: 0 }).current
  const mouse = React.useRef({ x: 0, y: 0 })
  const circle = React.useRef({ x: 0, y: 0 }).current
  const currentScale = React.useRef({ scale: 0 }).current
  const currentAngle = React.useRef({ angle: 0 }).current
  const speed = 0.17
  
  const tick = () => {
    const cursor = document && document.getElementById(cursorId || 'cursor')

    // Calculate circle movement based on mouse position and smoothing
    circle.x += (mouse.current.x - circle.x) * speed
    circle.y += (mouse.current.y - circle.y) * speed

    // Use GSAP to animate the cursor's position
    gsap.to(cursor, {
      x: circle.x,
      y: circle.y,
      scale: 1 + currentScale.scale,
      rotation: currentAngle.angle,
      duration: 0.1, // Adjust duration for smoothness
      ease: "power2.out" // Easing function for smooth trailing
    })

    animationRef.current = requestAnimationFrame(tick)
  }

  React.useEffect(() => {
    animationRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(animationRef.current)
  }, [])

  const onMouseMove = (e) => {
    mouse.current.x = e.pageX
    mouse.current.y = e.pageY
  }

  return { onMouseMove }
}