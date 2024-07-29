/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';
import './Card.css'; // Ensure this is your updated CSS file

const Card = ({ children }) => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (cardRef.current) {
            const { left, top } = cardRef.current.getBoundingClientRect();
            const { clientX: mouseX, clientY: mouseY } = e;

            const adjustedX = mouseX - left;
            const adjustedY = mouseY - top;

            setCursorPosition({ x: adjustedX, y: adjustedY });
        }
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const style = {
        '--mouse-x': `${cursorPosition.x}px`,
        '--mouse-y': `${cursorPosition.y}px`,
    };

    return (
        <div ref={cardRef} className="card" style={style}>
            {children}
        </div>
    );
};

export default Card;
