'use client'
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
    const circleRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const previousMouseRef = useRef({ x: 0, y: 0 });
    const circlePositionRef = useRef({ x: 0, y: 0 });
    
    const [scaleValue, setScaleValue] = useState(1);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseRef.current.x = e.clientX;
            mouseRef.current.y = e.clientY;
        };

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

        const tick = () => {
            const { x: mouseX, y: mouseY } = mouseRef.current;
            const { x: prevX, y: prevY } = previousMouseRef.current;
            const { x: circleX, y: circleY } = circlePositionRef.current;

            // More advanced smooth interpolation with lerp (linear interpolation)
            const lerpAmount = 0.09; // Adjust this for more or less smoothness
            circlePositionRef.current.x += (mouseX - circleX) * lerpAmount;
            circlePositionRef.current.y += (mouseY - circleY) * lerpAmount;

            // Calculate mouse velocity and rotation with more nuanced approach
            const deltaX = mouseX - prevX;
            const deltaY = mouseY - prevY;
            const mouseVelocity = Math.min(
                Math.sqrt(deltaX ** 2 + deltaY ** 2) * 3, 
                120
            );
            const angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;

            previousMouseRef.current.x = mouseX;
            previousMouseRef.current.y = mouseY;

            if (circleRef.current) {
                gsap.to(circleRef.current, {
                    x: circlePositionRef.current.x,
                    y: circlePositionRef.current.y,
                    rotation: mouseVelocity > 15 ? angle : 0,
                    scale: scaleValue,
                    duration: 0.3, // Slightly longer duration for smoother movement
                    ease: "power1.inOut", // Softer easing for more natural motion
                    transformOrigin: "center center" // Ensure rotation happens at center
                });
            }

            // Reduce frequency of hover checks
            if (!isHovering) {
                checkHoveredElement();
            }

            window.requestAnimationFrame(tick);
        };

        window.addEventListener('mousemove', handleMouseMove);
        tick();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [scaleValue, isHovering]);

    return (
        <div 
            className="circle fixed pointer-events-none z-[9999] w-5 h-5 bg-red-500/50 rounded-full" 
            ref={circleRef}
            style={{
                transform: 'translate(-50%, -50%)'
            }}
        />
    );
};

export default CustomCursor;