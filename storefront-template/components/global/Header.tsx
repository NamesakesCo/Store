"use client";
import Link from "next/link";
import { useState } from "react";
import navigation from "@/data/navigation.json";
import { siteConfig } from "@/config/site";
import { MobileNav } from "./MobileNav";
import { CartIcon } from "../product/CartIcon";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-surface border-b border-border h-[72px] flex items-center">
      <div className="max-w-content mx-auto w-full flex items-center justify-between px-6">
        <button
          className="lg:hidden text-sm"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          Menu
        </button>

        <Link href="/" className="font-heading text-lg tracking-tight">
          {siteConfig.name}
        </Link>

        <nav className="hidden lg:flex gap-8 text-sm">
          {navigation.main.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-secondary transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        <CartIcon />
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
