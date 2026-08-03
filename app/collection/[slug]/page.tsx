import { getProductsByCategorySlug } from "@/lib/products";
import { CollectionGrid } from "@/components/page/CollectionGrid";
import collections from "@/data/collections.json";

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export default function CollectionPage({ params }: { params: { slug: string } }) {
  const products = getProductsByCategorySlug(params.slug);
  const collection = collections.find((c) => c.slug === params.slug);

  return (
    <div className="max-w-content mx-auto px-6 py-section">
      <h1 className="font-heading text-[clamp(1.75rem,3vw,2.5rem)] mb-2">
        {collection?.name ?? "Collection"}
      </h1>
      <p className="text-sm text-muted mb-8">{collection?.description}</p>
      <CollectionGrid products={products} />
    </div>
  );
}
