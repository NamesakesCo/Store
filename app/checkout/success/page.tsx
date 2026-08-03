"use client";
import { useEffect } from "react";
import { useCart } from "@/lib/cart-context";
import Link from "next/link";

export default function CheckoutSuccessPage() {
  return (
    <div className="max-w-content mx-auto px-6 py-section text-center">
      <h1 className="font-heading text-2xl mb-4">Order confirmed</h1>
      <p className="text-sm text-muted mb-8">
        Thank you for your purchase. A confirmation email is on its way.
      </p>
      <Link href="/" className="inline-block bg-primary text-white px-6 py-3 text-sm">
        Continue Shopping
      </Link>
    </div>
  );
}
