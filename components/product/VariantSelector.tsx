"use client";
import type { ProductVariant } from "@/data/product-schema";

export function VariantSelector({
  variant,
  selected,
  onSelect
}: {
  variant: ProductVariant;
  selected: string;
  onSelect: (value: string) => void;
}) {
  return (
    <div>
      <p className="text-sm mb-2">{variant.name}</p>
      <div className="flex flex-wrap gap-2">
        {variant.options.map((option) => (
          <button
            key={option}
            onClick={() => onSelect(option)}
            className={`px-4 py-2 text-sm border rounded ${
              selected === option ? "border-primary bg-primary text-white" : "border-border"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
