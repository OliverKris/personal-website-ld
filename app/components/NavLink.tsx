"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProp = {
    href: string
    children: React.ReactNode
    exact?: boolean
    className?: string
    activeClassName?: string
}

export function NavLink({
    href,
    children,
    exact = true,
    className = "",
    activeClassName = "font-semibold text-foreground",
}: NavLinkProp) {
    const pathname = usePathname()

    const isActive = exact ? pathname == href : pathname.startsWith(href)

    return (
        <Link
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={[
                "inline-flex items-center rounded-md px-3 py-2 text-sm transition-colors",
                "text-muted-foreground hover:text-foreground hover:bg-muted",
                className,
                isActive ? activeClassName : "",
            ].join(" ")}
        >
            {children}
        </Link>
    )
}