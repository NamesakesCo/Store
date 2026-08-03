"use client";
import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      <p className="text-sm font-medium mb-3">Newsletter</p>
      {submitted ? (
        <p className="text-sm text-white/70">Thanks for subscribing.</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="bg-transparent border-b border-white/40 py-2 text-sm outline-none placeholder:text-white/50"
          />
          <button type="submit" className="text-sm text-left underline underline-offset-4">
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}
