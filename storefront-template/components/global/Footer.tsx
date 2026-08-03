import { siteConfig } from "@/config/site";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  return (
    <footer className="bg-primary text-white mt-section">
      <div className="max-w-content mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <p className="font-heading text-lg mb-4">{siteConfig.name}</p>
          <p className="text-sm text-white/70">{siteConfig.description}</p>
        </div>
        {siteConfig.footer.columns.map((col) => (
          <div key={col.title}>
            <p className="text-sm font-medium mb-3">{col.title}</p>
            <ul className="space-y-2 text-sm text-white/70">
              {col.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <NewsletterForm />
      </div>
    </footer>
  );
}
