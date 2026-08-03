import { Hero } from "@/components/page/Hero";
import { FeaturedProducts } from "@/components/page/FeaturedProducts";
import { EditorialSplit } from "@/components/page/EditorialSplit";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <EditorialSplit />
    </>
  );
}
