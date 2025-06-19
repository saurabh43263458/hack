import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.5) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Optional: Unobserve once visible if you only want it to animate once
                    // observer.unobserve(entry.target);
                } else {
                    // Optional: Set to false if you want it to re-animate on scroll back
                    // setIsVisible(false);
                }
            },
            { threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold]);

    return [ref, isVisible];
};