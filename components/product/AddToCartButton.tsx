"use client";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/data/product-schema";

export function AddToCartButton({
  product,
  variant,
  quantity
}: {
  product: Product;
  variant: string;
  quantity: number;
}) {
  const { addItem } = useCart();
  const disabled = product.status !== "available";

  function handleClick() {
    addItem(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        variant,
        image: product.images[0]
      },
      quantity
    );
  }

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className="w-full bg-primary text-white py-4 text-sm disabled:bg-muted disabled:cursor-not-allowed"
    >
      {product.status === "sold-out"
        ? "Sold Out"
        : product.status === "coming-soon"
        ? "Notify Me"
        : "Add to Cart"}
    </button>
  );
}
