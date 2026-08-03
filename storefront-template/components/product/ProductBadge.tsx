import type { Product } from "@/data/product-schema";

export function ProductBadge({ product }: { product: Product }) {
  if (product.status === "sold-out") {
    return <span className="absolute top-3 left-3 bg-primary text-white text-xs px-2 py-1">Sold Out</span>;
  }
  if (product.status === "coming-soon") {
    return <span className="absolute top-3 left-3 bg-muted text-white text-xs px-2 py-1">Coming Soon</span>;
  }
  if (product.compareAtPrice) {
    return <span className="absolute top-3 left-3 bg-secondary text-white text-xs px-2 py-1">Sale</span>;
  }
  if (product.tags.includes("new")) {
    return <span className="absolute top-3 left-3 bg-primary text-white text-xs px-2 py-1">New</span>;
  }
  return null;
}
