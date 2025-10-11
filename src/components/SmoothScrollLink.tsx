"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

interface SmoothScrollLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export default function SmoothScrollLink({ href, children, className, onClick }: SmoothScrollLinkProps) {
    const router = useRouter();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();

        // Call the onClick handler if provided
        if (onClick) {
            onClick();
        }

        // Check if it's an external link
        if (href.startsWith('http')) {
            window.open(href, '_blank');
            return;
        }

        // Check if it's an internal anchor link
        if (href.startsWith('#')) {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        } else {
            // For other internal links, use Next.js navigation
            router.push(href);
        }
    };

    return (
        <Link
            href={href}
            onClick={handleClick}
            className={className}
        >
            {children}
        </Link>
    );
}