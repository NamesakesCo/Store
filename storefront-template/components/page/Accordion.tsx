"use client";
import { useState, ReactNode } from "react";

export function Accordion({ items }: { items: { title: string; content: ReactNode }[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-border border-t border-b border-border">
      {items.map((item, i) => (
        <div key={item.title}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex justify-between items-center py-4 text-sm text-left"
          >
            {item.title}
            <span>{open === i ? "-" : "+"}</span>
          </button>
          {open === i && (
            <div className="pb-4 text-sm text-muted">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}
