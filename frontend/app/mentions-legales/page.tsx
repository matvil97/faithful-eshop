import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — Faithful",
};

export default function MentionsLegales() {
  return (
    <LegalPage title="Mentions légales">
      <Section title="Éditeur du site">
        <p>Le site <strong>faithful-shop.fr</strong> est édité par :</p>
        <ul>
          <li>Nom / Raison sociale : Faithful</li>
          <li>Responsable de publication : Matthieu Vilmen</li>
          <li>Adresse e-mail : <a href="mailto:vilmenmatthieu@gmail.com" className="underline hover:text-stone-900">vilmenmatthieu@gmail.com</a></li>
        </ul>
        <p className="mt-3 text-xs text-stone-400">
          En tant que micro-entrepreneur, Faithful n&apos;est pas assujettie à la TVA (article 293 B du CGI).
        </p>
      </Section>

      <Section title="Hébergement">
        <p>Ce site est hébergé par :</p>
        <ul>
          <li>Vercel Inc. — 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</li>
          <li>Site : <span className="text-stone-600">vercel.com</span></li>
        </ul>
      </Section>

      <Section title="Impression à la demande">
        <p>
          Les produits sont fabriqués et expédiés par <strong>Printful Inc.</strong>, prestataire tiers de
          print-on-demand. Printful agit en qualité de fabricant et d&apos;expéditeur indépendant.
        </p>
      </Section>

      <Section title="Propriété intellectuelle">
        <p>
          L&apos;ensemble des contenus présents sur ce site (textes, visuels, designs, logos) est la propriété exclusive
          de Faithful, sauf mention contraire. Toute reproduction, distribution ou utilisation sans autorisation
          écrite préalable est interdite.
        </p>
      </Section>

      <Section title="Responsabilité">
        <p>
          Faithful s&apos;efforce de maintenir les informations de ce site à jour et exactes. Toutefois, nous ne
          pouvons garantir l&apos;absence d&apos;erreurs. Faithful ne saurait être tenue responsable des dommages
          directs ou indirects résultant de l&apos;utilisation du site.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          Pour toute question : <a href="mailto:vilmenmatthieu@gmail.com" className="underline hover:text-stone-900">vilmenmatthieu@gmail.com</a>
        </p>
      </Section>
    </LegalPage>
  );
}

function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen" style={{ background: "#F7F5F0" }}>
      <div className="max-w-2xl mx-auto px-6 pt-36 pb-24">
        <h1
          className="text-4xl text-stone-900 mb-12"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {title}
        </h1>
        <div className="flex flex-col gap-10 text-sm text-stone-600 leading-7">
          {children}
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xs tracking-widest uppercase text-stone-900 font-semibold mb-3">{title}</h2>
      <div className="flex flex-col gap-2">{children}</div>
    </section>
  );
}
