"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Close, Menu } from "@mui/icons-material";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const closeMenu = () => setIsOpen(false);
  const isActive = (path) =>
    pathname === path || pathname.startsWith(`${path}/`);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/auth/services" },
    { label: "About", href: "/auth/about" },
    { label: "Contact", href: "/auth/contact" },
  ];

  return (
    <header className="site-nav shell">
      <main className="flex flex-row justify-center items-center gap-10">
        <Link
          className="brand"
          href="/"
          onClick={closeMenu}
          aria-label="Spark's Redline Performance home"
        >
          <Image src="/rdlogo.jpeg" alt="" width={70} height={70} priority />
          <span>
            SPARK&apos;S
            <br />
            <b>REDLINE</b>
            <br />
            <i className="text-xm">performance</i>
          </span>
        </Link>

        <nav
          id="main-navigation"
          className={`nav-links${isOpen ? " is-open" : ""}`}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={isActive(link.href) ? "active" : ""}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </main>
      <button
        className="nav-toggle"
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-controls="main-navigation"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      >
        {isOpen ? <Close /> : <Menu />}
      </button>
    </header>
  );
}
