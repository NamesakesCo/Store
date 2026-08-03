export function Price({ price, compareAtPrice }: { price: number; compareAtPrice?: number | null }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm">${price.toFixed(2)}</span>
      {compareAtPrice && (
        <span className="text-sm text-muted line-through">${compareAtPrice.toFixed(2)}</span>
      )}
    </div>
  );
}
