import Link from 'next/link'

export const HollowButton = ({ 
    children, 
    href, 
    colour, 
    onClick,
    className
}: { 
    children: any, 
    href?: string, 
    colour: string,
    onClick?: any,
    className?: string
}) => {
    const onLinkClick = (e: any) => {
        if(onClick) {
            e.preventDefault();
            e.stopPropagation();
            if(typeof(window) !== "undefined") window.stop();

            onClick();
        }
    }
    
    return (
        <Link href={typeof(href) == "undefined" ? "#" : href}>
            <a onClick={onLinkClick} className={[
                "flex",
                "justify-center",
                "items-center",
                "rounded-full",
                "w-max",
                "h-12",
                `bg-${colour}`,
                "px-7",
                "select-none",
                "text-white",
                "font-medium",
                "border-2",
                "border-transparent",
                `hover:border-${colour}`,
                "hover:bg-transparent",
                `hover:text-${colour}`,
                "cursor-pointer",
                ...(className || "").split(" ")
            ].join(" ")}>
                {children}
            </a>
        </Link>
    )
}