"use client";

export default function ProductsError({
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center px-6" style={{ background: "#F7F5F0" }}>
      <p className="text-stone-700 text-sm">
        La boutique est momentanément indisponible. Réessaie dans quelques instants.
      </p>
      <button
        onClick={() => unstable_retry()}
        className="text-xs tracking-widest uppercase bg-stone-900 text-white px-6 py-3 hover:bg-stone-800 transition-colors"
      >
        Réessayer
      </button>
    </div>
  );
}
