import Link from "next/link";
import { usePathname } from "next/navigation";
import NavSearch from "./NavSearch";
import ReadingGoal from "./ReadingGoal";

export default function Navbar() {
    const pathname = usePathname();
    const navLinks = [
        { name: 'All Books', href: '/dashboard/all-books' },
        { name: 'Currently Reading', href: '/dashboard/currently-reading' },
        { name: 'Favorites', href: '/dashboard/favorites' },
        { name: 'Want to Read', href: '/dashboard/want-to-read' },
        { name: 'Read', href: '/dashboard/read' },
    ];

    return (
        <div className="h-full bg-bg-secondary w-sidebar row-span-6">
            <NavSearch />
            <nav className="flex flex-col">
                {navLinks.map((link) => (
                    <Link className="text-base font-sans text-text-primary" key={link.href} href={link.href}>
                        {link.name}
                    </Link>
                ))}
            </nav>
            <ReadingGoal />
        </div>
    )
}