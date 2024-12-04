'use client'
import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
    const circleRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    
    const [scaleValue, setScaleValue] = useState(1);
    const [isHovering, setIsHovering] = useState(false);

    // Create objects to track mouse position and custom cursor position
    const mouse = { x: 0, y: 0 }; // Track current mouse position
    const previousMouse = { x: 0, y: 0 }; // Store the previous mouse position
    const circle = { x: 0, y: 0 }; // Track the circle position

    // Initialize variables to track scaling and rotation
    let currentScale = 0; // Track current scale value
    let currentAngle = 0; // Track current angle value

    // Update mouse position on the 'mousemove' event
    const handleMouseMove = (e) => {
        mouse.x = e.clientX; // Use clientX for correct mouse position
        mouse.y = e.clientY; // Use clientY for correct mouse position
    };

    // Smoothing factor for cursor movement speed (0 = smoother, 1 = instant)
    const speed = 0.17;

    // Start animation
    const tick = () => {
        // MOVE
        // Calculate circle movement based on mouse position and smoothing
        circle.x += (mouse.x - circle.x) * speed;
        circle.y += (mouse.y - circle.y) * speed;
        // Create a transformation string for cursor translation
        const translateTransform = `translate(${circle.x}px, ${circle.y}px)`;

        // SQUEEZE
        // 1. Calculate the change in mouse position (deltaMouse)
        const deltaMouseX = mouse.x - previousMouse.x;
        const deltaMouseY = mouse.y - previousMouse.y;
        // Update previous mouse position for the next frame
        previousMouse.x = mouse.x;
        previousMouse.y = mouse.y;
        // 2. Calculate mouse velocity using Pythagorean theorem and adjust speed
        const mouseVelocity = Math.min(Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 4, 150);
        // 3. Convert mouse velocity to a value in the range [0, 0.5]
        const scaleValue = (mouseVelocity / 150) * 0.5;
        // 4. Smoothly update the current scale
        currentScale += (scaleValue - currentScale) * speed;
        // 5. Create a transformation string for scaling
        const scaleTransform = `scale(${1 + currentScale}, ${1 - currentScale})`;

        // ROTATE
        // 1. Calculate the angle using the atan2 function
        const angle = Math.atan2(deltaMouseY, deltaMouseX) * 180 / Math.PI;
        // 2. Check for a threshold to reduce shakiness at low mouse velocity
        if (mouseVelocity > 20) {
            currentAngle = angle;
        }
        // 3. Create a transformation string for rotation
        const rotateTransform = `rotate(${currentAngle}deg)`;

        // Apply all transformations to the circle element in a specific order: translate -> rotate -> scale
        if (circleRef.current) {
            circleRef.current.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;
        }

        // Request the next frame to continue the animation
        window.requestAnimationFrame(tick);
    };

    useEffect(() => {
        const checkHoveredElement = () => {
            const element = document.elementFromPoint(
                mouseRef.current.x, 
                mouseRef.current.y
            );

            if (element) {
                const hoverableElements = ['A', 'BUTTON', 'IMG', 'SPAN', 'P'];
                
                if (hoverableElements.includes(element.tagName)) {
                    setScaleValue(3);
                    setIsHovering(true);
                } else {
                    setScaleValue(1);
                    setIsHovering(false);
                }
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        tick();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [scaleValue, isHovering]);

    return (
        <div 
            className="circle fixed pointer-events-none z-[9999] w-5 h-5 rounded-full" 
            ref={circleRef}
            style={{
                transform: 'translate(-50%, -50%)'
            }}
        />
    );
};

export default CustomCursor;