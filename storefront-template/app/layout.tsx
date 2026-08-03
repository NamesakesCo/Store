import type { ReactNode } from "react";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { CartProvider } from "@/lib/cart-context";
import { AnnouncementBar } from "@/components/global/AnnouncementBar";
import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";
import { CartDrawer } from "@/components/global/CartDrawer";

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-body bg-background text-text">
        <CartProvider>
          <AnnouncementBar />
          <Header />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
