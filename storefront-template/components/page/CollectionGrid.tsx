import type { Product } from "@/data/product-schema";
import { ProductCard } from "../product/ProductCard";

export function CollectionGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <div className="py-24 text-center text-muted text-sm">
        No products found in this collection.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-card">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
