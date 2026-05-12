import Link from "next/link";
import Button from "@/components/Button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Info", href: "/info" },
];

export default function Navbar() {
  return (
    <header className="w-full px-6 py-4 lg:px-12">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight text-gray-900">
          YOUR WEBSITE
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Button href="/get-started">Get Started</Button>
      </nav>
    </header>
  );
}
