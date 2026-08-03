"use client";
import { useState } from "react";
import { getProductBySlug, getAllProducts } from "@/lib/products";
import { ProductGallery } from "@/components/product/ProductGallery";
import { Price } from "@/components/product/Price";
import { VariantSelector } from "@/components/product/VariantSelector";
import { QuantitySelector } from "@/components/product/QuantitySelector";
import { AddToCartButton } from "@/components/product/AddToCartButton";
import { Accordion } from "@/components/page/Accordion";
import { notFound } from "next/navigation";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) return notFound();

  const [selectedVariant, setSelectedVariant] = useState(
    product.variants[0]?.options[0] ?? ""
  );
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="max-w-content mx-auto px-6 py-section grid grid-cols-1 lg:grid-cols-2 gap-10">
      <ProductGallery images={product.images} alt={product.name} />

      <div className="space-y-6 lg:sticky lg:top-24 self-start">
        <div>
          <h1 className="font-heading text-2xl mb-2">{product.name}</h1>
          <Price price={product.price} compareAtPrice={product.compareAtPrice} />
        </div>

        <p className="text-sm text-muted leading-relaxed">{product.description}</p>

        {product.variants.map((variant) => (
          <VariantSelector
            key={variant.name}
            variant={variant}
            selected={selectedVariant}
            onSelect={setSelectedVariant}
          />
        ))}

        <QuantitySelector quantity={quantity} onChange={setQuantity} />

        <AddToCartButton product={product} variant={selectedVariant} quantity={quantity} />

        <Accordion
          items={[
            { title: "Details", content: product.description },
            { title: "Size Guide", content: "Placeholder size guide content." },
            { title: "Shipping & Returns", content: "Placeholder shipping and returns policy." }
          ]}
        />
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}
