"use client";
import { useState } from "react";
import { siteConfig } from "@/config/site";

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);
  if (!siteConfig.announcementBar.enabled || dismissed) return null;
  const message = siteConfig.announcementBar.messages[0];

  return (
    <div className="w-full bg-primary text-white text-sm py-2 px-4 flex items-center justify-center relative">
      <span>{message}</span>
      <button
        aria-label="Dismiss announcement"
        onClick={() => setDismissed(true)}
        className="absolute right-4 text-white/70 hover:text-white"
      >
        &times;
      </button>
    </div>
  );
}
