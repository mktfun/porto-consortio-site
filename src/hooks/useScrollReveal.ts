import { useEffect, useRef, useState } from "react";

interface ScrollRevealOptions {
    threshold?: number;
    rootMargin?: string;
    once?: boolean;
}

export function useScrollReveal<T extends HTMLElement>(
    options: ScrollRevealOptions = {}
) {
    const { threshold = 0.15, rootMargin = "0px", once = true } = options;
    const ref = useRef<T>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (once) observer.unobserve(el);
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold, rootMargin, once]);

    return { ref, isVisible };
}

/** Utility class string for the reveal animation */
export const revealClasses = (isVisible: boolean, delay = 0) =>
    `transition-all duration-700 ease-out ${isVisible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-8"
    }` + (delay ? ` delay-[${delay}ms]` : "");

/**
 * Simple hook that returns a ref and a CSS class string for scroll reveal.
 * Usage:
 *   const { ref, className } = useReveal();
 *   <div ref={ref} className={className}>...</div>
 */
export function useReveal(delay = 0) {
    const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
    const className = `transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`;
    const style = delay ? { transitionDelay: `${delay}ms` } : {};
    return { ref, className, style, isVisible };
}
