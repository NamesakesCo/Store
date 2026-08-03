"use client";
import { useCart } from "@/lib/cart-context";

export function CartIcon() {
  const { items, openCart } = useCart();
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <button onClick={openCart} className="relative text-sm" aria-label="Open cart">
      Cart
      {count > 0 && (
        <span className="absolute -top-2 -right-3 bg-secondary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
          {count}
        </span>
      )}
    </button>
  );
}
