"use client";

import { ReactNode } from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

interface AnimatedSectionProps {
    children: ReactNode;
    animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'rotate';
    delay?: number;
    duration?: number;
    className?: string;
}

export default function AnimatedSection({
    children,
    animation = 'fade-up',
    delay = 0,
    duration = 600,
    className = ''
}: AnimatedSectionProps) {
    const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

    const getAnimationClass = () => {
        const baseClasses = 'transition-all duration-' + duration;

        switch (animation) {
            case 'fade-up':
                return `${baseClasses} transform ${isIntersecting ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`;
            case 'fade-down':
                return `${baseClasses} transform ${isIntersecting ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`;
            case 'fade-left':
                return `${baseClasses} transform ${isIntersecting ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`;
            case 'fade-right':
                return `${baseClasses} transform ${isIntersecting ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`;
            case 'scale':
                return `${baseClasses} transform ${isIntersecting ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`;
            case 'rotate':
                return `${baseClasses} transform ${isIntersecting ? 'rotate-0 opacity-100' : 'rotate-12 opacity-0'}`;
            default:
                return `${baseClasses} opacity-${isIntersecting ? '100' : '0'}`;
        }
    };

    return (
        <div
            ref={ref as React.RefObject<HTMLDivElement>}
            className={`${getAnimationClass()} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}