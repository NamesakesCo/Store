import Link from "next/link";

export default function CheckoutCancelPage() {
  return (
    <div className="max-w-content mx-auto px-6 py-section text-center">
      <h1 className="font-heading text-2xl mb-4">Checkout canceled</h1>
      <p className="text-sm text-muted mb-8">
        Your cart is still saved. You can complete checkout anytime.
      </p>
      <Link href="/" className="inline-block bg-primary text-white px-6 py-3 text-sm">
        Return to Shop
      </Link>
    </div>
  );
}
