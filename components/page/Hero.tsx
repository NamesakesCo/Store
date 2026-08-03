export function Hero() {
  return (
    <section className="relative w-full aspect-[16/9] bg-background flex items-end">
      <img
        src="/placeholders/hero.jpg"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 p-8 md:p-16 text-white">
        <h1 className="font-heading text-[clamp(2.5rem,6vw,4.5rem)] leading-none mb-4">
          Your Collection Name
        </h1>
        <p className="text-sm md:text-base max-w-md mb-6">
          Placeholder hero copy describing the collection or brand story.
        </p>
        <a href="/collection/all" className="inline-block bg-white text-primary px-6 py-3 text-sm">
          Shop Now
        </a>
      </div>
    </section>
  );
}
