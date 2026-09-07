import { useEffect, useRef, useState } from "react";

function Reveal({ children, className = "" }) {
  const [isVisible, setIsVisible] = useState(false);
  const revealRef = useRef(null);

  useEffect(() => {
    const element = revealRef.current;

    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={revealRef}
      className={`reveal${isVisible ? " reveal--visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export default Reveal;
