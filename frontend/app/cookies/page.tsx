import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique cookies — Faithful",
};

export default function Cookies() {
  return (
    <div className="min-h-screen" style={{ background: "#F7F5F0" }}>
      <div className="max-w-2xl mx-auto px-6 pt-36 pb-24">
        <h1
          className="text-4xl text-stone-900 mb-2"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Politique de cookies
        </h1>
        <p className="text-xs text-stone-400 tracking-widest uppercase mb-12">
          En vigueur au 1er janvier 2026
        </p>

        <div className="flex flex-col gap-10 text-sm text-stone-600 leading-7">

          <Section title="Qu'est-ce qu'un cookie ?">
            <p>
              Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, téléphone, tablette)
              lorsque vous visitez un site web. Il permet au site de mémoriser des informations sur votre
              visite afin d&apos;améliorer votre expérience.
            </p>
          </Section>

          <Section title="Cookies utilisés sur ce site">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b border-stone-300">
                  <th className="text-left py-2 pr-4 text-stone-900 font-semibold tracking-wider uppercase">Cookie</th>
                  <th className="text-left py-2 pr-4 text-stone-900 font-semibold tracking-wider uppercase">Finalité</th>
                  <th className="text-left py-2 text-stone-900 font-semibold tracking-wider uppercase">Durée</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                <tr>
                  <td className="py-3 pr-4 font-medium text-stone-700">Panier (localStorage)</td>
                  <td className="py-3 pr-4">Mémorisation du contenu de votre panier entre les sessions</td>
                  <td className="py-3">Session / 7 jours</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-stone-700">Stripe</td>
                  <td className="py-3 pr-4">Sécurisation et traitement du paiement</td>
                  <td className="py-3">Session</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-stone-700">Vercel Analytics</td>
                  <td className="py-3 pr-4">Mesure d&apos;audience anonymisée (si activé)</td>
                  <td className="py-3">90 jours</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs text-stone-400 mt-2">
              Ce site n&apos;utilise pas de cookies publicitaires ou de pistage tiers.
            </p>
          </Section>

          <Section title="Cookies strictement nécessaires">
            <p>
              Certains cookies sont indispensables au fonctionnement du site (maintien du panier,
              sécurisation du paiement). Ils ne peuvent pas être désactivés sans altérer le service.
              Aucun consentement n&apos;est requis pour ces cookies, conformément à la réglementation CNIL.
            </p>
          </Section>

          <Section title="Vos droits">
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique
              et Libertés, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression
              de vos données.
            </p>
            <p>
              Pour exercer ces droits ou pour toute question relative aux cookies :
              <br />
              <a href="mailto:vilmenmatthieu@gmail.com" className="underline hover:text-stone-900">
                vilmenmatthieu@gmail.com
              </a>
            </p>
            <p>
              Vous pouvez également configurer votre navigateur pour refuser les cookies.
              Consultez l&apos;aide de votre navigateur pour plus d&apos;informations.
            </p>
          </Section>

          <Section title="Modifications">
            <p>
              Faithful se réserve le droit de modifier cette politique à tout moment.
              La date de mise à jour est indiquée en haut de cette page.
            </p>
          </Section>

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
