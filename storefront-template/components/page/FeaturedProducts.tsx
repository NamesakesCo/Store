import { getFeaturedProducts } from "@/lib/products";
import { ProductCard } from "../product/ProductCard";

export function FeaturedProducts() {
  const products = getFeaturedProducts();

  return (
    <section className="max-w-content mx-auto px-6 py-section">
      <h2 className="font-heading text-[clamp(1.75rem,3vw,2.5rem)] mb-8">Featured</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-card">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
