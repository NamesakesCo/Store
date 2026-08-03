
export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  compareAtPrice?: number | null;
  images: string[];
  category: string;
  tags: string[];
  variants: { name: string; options: string[] }[];
  colors: string[];
  featured: boolean;
  stock: number;
  status: "available" | "sold-out" | "coming-soon";
  releaseDate?: string;
}
