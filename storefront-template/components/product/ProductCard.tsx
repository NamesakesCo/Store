import Link from "next/link";
import type { Product } from "@/data/product-schema";
import { Price } from "./Price";
import { ProductBadge } from "./ProductBadge";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <div className="relative aspect-[3/4] bg-background overflow-hidden">
        <ProductBadge product={product} />
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-300"
        />
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        )}
      </div>
      <div className="mt-3 space-y-1">
        <p className="text-sm">{product.name}</p>
        <Price price={product.price} compareAtPrice={product.compareAtPrice} />
      </div>
    </Link>
  );
}
