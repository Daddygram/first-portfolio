import React, { useEffect, useRef } from 'react';

const Cursor = () => {
  const coords = useRef({ x: 0, y: 0 });
  const circlesRefs = useRef([]);
  const cursorRef = useRef(null);

  useEffect(() => {
    const animateCircles = () => {
        let x = coords.current.x;
        let y = coords.current.y;
    
        if (cursorRef.current) {
          cursorRef.current.style.top = x + 'px';
          cursorRef.current.style.left = y + 'px';
        }
    
        circlesRefs.current.forEach((circle, index) => {
          circle.style.left = x - 12 + "px";
          circle.style.top = y - 12 + "px";
    
          circle.style.transform = `scale(${(circlesRefs.current.length - index) / circlesRefs.current.length})`;
    
          circle.x = x;
          circle.y = y;
    
          const nextCircle = circlesRefs.current[index + 1] || circlesRefs.current[0];
          x += (nextCircle.x - x) * 0.3;
          y += (nextCircle.y - y) * 0.3;
        });
    
        requestAnimationFrame(animateCircles);
      };
    const circles = document.querySelectorAll(".circle");
    circlesRefs.current = Array.from(circles);

    circlesRefs.current.forEach((circle, index) => {
      circle.x = 0;
      circle.y = 0;
    });

    window.addEventListener("mousemove", (e) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
    });

    animateCircles();
  }, []);

  

  return (
      <div className="cursor" ref={cursorRef}>
      {Array.from({ length: 20 }).map((_, index) => (
        <div key={index} className="circle"></div>
      ))}
      </div>
  );
};

export default Cursor;
