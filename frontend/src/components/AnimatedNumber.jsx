import { useEffect, useRef, useState } from "react";

const AnimatedNumber = ({ targetNumber = 1100, duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const frameRef = useRef();

  const animate = () => {
    let start = 0;
    const end = targetNumber;
    const increment = Math.ceil(end / (duration / 16));

    const update = () => {
      start += increment;
      if (start >= end) {
        setCount(end);
        cancelAnimationFrame(frameRef.current);
      } else {
        setCount(start);
        frameRef.current = requestAnimationFrame(update);
      }
    };

    frameRef.current = requestAnimationFrame(update);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCount(0); // reset
          cancelAnimationFrame(frameRef.current);
          animate();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameRef.current);
    };
  }, [targetNumber]);

  return (
    <p ref={ref} className="text-3xl font-bold text-gray-900 leading-none">
      {count}+ {/* Keep + static */}
    </p>
  );
};

export default AnimatedNumber;
