"use client";
import Link from "next/link";
import navigation from "@/data/navigation.json";

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div
        className={`absolute top-0 left-0 h-full w-4/5 max-w-xs bg-surface p-6 transition-transform ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button onClick={onClose} className="mb-8 text-sm" aria-label="Close menu">
          Close
        </button>
        <nav className="flex flex-col gap-6 text-base">
          {navigation.main.map((item) => (
            <Link key={item.href} href={item.href} onClick={onClose}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
