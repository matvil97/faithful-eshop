import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6" style={{ background: "#F7F5F0" }}>
      <p className="text-xs tracking-[0.4em] uppercase text-stone-400 mb-6">Commande confirmée</p>
      <h1 className="text-4xl md:text-5xl text-stone-900 mb-6" style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}>
        Merci pour ta confiance.
      </h1>
      <div className="w-12 h-px bg-stone-300 mx-auto mb-8" />
      <p className="text-stone-500 text-sm max-w-sm leading-relaxed mb-10">
        Ta commande est en cours de traitement. Tu recevras un email de confirmation avec le suivi de ton colis.
      </p>
      <Link
        href="/products"
        className="text-xs tracking-widest uppercase border border-stone-900 text-stone-900 px-8 py-3 hover:bg-stone-900 hover:text-white transition-all"
      >
        Retour à la boutique
      </Link>
    </div>
  );
}
