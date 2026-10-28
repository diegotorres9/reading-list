import Link from "next/link";
import { usePathname } from "next/navigation";

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
        <div>
            <nav className="flex flex-col bg-secondary">
                {navLinks.map((link) => (
                    <Link className="text-2xl font-sans" key={link.href} href={link.href}>
                        {link.name}
                    </Link>
                ))}
            </nav>
        </div>
    )
}