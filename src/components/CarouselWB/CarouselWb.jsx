import React, { useState, useRef, useEffect } from 'react';
import './CarouselWB.css'; // Import your CSS styles

const CarouselWB = () => {
    const [index, setIndex] = useState(0);
    const [allowShift, setAllowShift] = useState(true);
    const itemsRef = useRef(null);
    const threshold = 100; // Threshold for swipe
    const slides = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5', 'Slide 6']; // Example slide content
    const slidesLength = slides.length;

    useEffect(() => {
        if (itemsRef.current) {
            itemsRef.current.style.left = `${-index * 100}%`; // Adjust the position based on the index
        }
    }, [index]);

    const shiftSlide = (dir) => {
        if (allowShift) {
            setAllowShift(false);
            const newIndex = index + dir;

            if (newIndex < 0) {
                setIndex(slidesLength - 1); // Go to last slide
            } else if (newIndex >= slidesLength) {
                setIndex(0); // Go to first slide
            } else {
                setIndex(newIndex);
            }

            setTimeout(() => {
                setAllowShift(true); // Allow shifting again after a short delay
            }, 300); // Match this delay with your CSS transition duration
        }
    };

    const dragStart = (e) => {
        e.preventDefault();
        const startPosition = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;

        const dragAction = (e) => {
            const posX2 = startPosition - (e.type === 'touchmove' ? e.touches[0].clientX : e.clientX);
            itemsRef.current.style.left = `${parseInt(itemsRef.current.style.left) - posX2}px`;
        };

        const dragEnd = (e) => {
            const posFinal = parseInt(itemsRef.current.style.left);

            if (posFinal < -threshold) {
                shiftSlide(1); // Next slide
            } else if (posFinal > threshold) {
                shiftSlide(-1); // Previous slide
            } else {
                itemsRef.current.style.left = `${-index * 100}%`; // Reset position
            }

            document.removeEventListener('mousemove', dragAction);
            document.removeEventListener('mouseup', dragEnd);
        };

        document.addEventListener('mousemove', dragAction);
        document.addEventListener('mouseup', dragEnd);
    };

    return (
        <div className="slider" id="slider">
            <div className="items" id="items" ref={itemsRef} onMouseDown={dragStart} onTouchStart={dragStart}>
                {slides.map((slide, idx) => (
                    <div className="slide" key={idx}>
                        {slide}
                    </div>
                ))}
            </div>
            <button id="prev" onClick={() => shiftSlide(-1)}>Prev</button>
            <button id="next" onClick={() => shiftSlide(1)}>Next</button>
        </div>
    );
}

export default CarouselWB;
