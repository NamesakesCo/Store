"use client";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { redirectToCheckout } from "@/lib/stripe-client";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCart();
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    setLoading(true);
    try {
      await redirectToCheckout(items);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="absolute inset-0 bg-black/40" onClick={closeCart} />
      <div
        className={`absolute top-0 right-0 h-full w-full max-w-md bg-surface flex flex-col transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <p className="font-heading text-lg">Cart ({items.length})</p>
          <button onClick={closeCart} aria-label="Close cart">&times;</button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 && (
            <p className="text-sm text-muted">Your cart is empty.</p>
          )}
          {items.map((item) => (
            <div key={`${item.id}-${item.variant}`} className="flex gap-4">
              <div className="w-20 aspect-[3/4] bg-background flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-muted">{item.variant}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button onClick={() => updateQuantity(item.id, item.variant, item.quantity - 1)}>-</button>
                  <span className="text-sm">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)}>+</button>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                <button
                  onClick={() => removeItem(item.id, item.variant)}
                  className="text-xs text-muted underline mt-2"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 border-t border-border">
          <div className="flex justify-between text-sm mb-4">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <button
            onClick={handleCheckout}
            className="w-full bg-primary text-white py-3 text-sm rounded disabled:bg-muted"
            disabled={items.length === 0 || loading}
          >
            {loading ? "Redirecting..." : "Checkout"}
          </button>
        </div>
      </div>
    </div>
  );
}
