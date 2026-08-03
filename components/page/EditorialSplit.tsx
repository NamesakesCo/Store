export function EditorialSplit() {
  return (
    <section className="max-w-content mx-auto px-6 py-section grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div className="aspect-[4/5] bg-background">
        <img src="/placeholders/editorial.jpg" alt="" className="w-full h-full object-cover" />
      </div>
      <div>
        <h2 className="font-heading text-[clamp(1.75rem,3vw,2.5rem)] mb-4">Editorial Headline</h2>
        <p className="text-sm text-muted leading-relaxed">
          Placeholder editorial copy for brand storytelling, campaign context, or lookbook content.
        </p>
      </div>
    </section>
  );
}
