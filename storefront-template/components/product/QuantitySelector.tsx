"use client";

export function QuantitySelector({
  quantity,
  onChange
}: {
  quantity: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="flex items-center gap-4 border border-border w-fit px-4 py-2">
      <button onClick={() => onChange(Math.max(1, quantity - 1))} aria-label="Decrease quantity">-</button>
      <span className="text-sm w-4 text-center">{quantity}</span>
      <button onClick={() => onChange(quantity + 1)} aria-label="Increase quantity">+</button>
    </div>
  );
}
