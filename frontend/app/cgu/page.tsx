import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CGU — Faithful",
};

export default function CGU() {
  return (
    <div className="min-h-screen" style={{ background: "#F7F5F0" }}>
      <div className="max-w-2xl mx-auto px-6 pt-36 pb-24">
        <h1
          className="text-4xl text-stone-900 mb-2"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Conditions Générales d&apos;Utilisation
        </h1>
        <p className="text-xs text-stone-400 tracking-widest uppercase mb-12">
          En vigueur au 1er janvier 2026
        </p>

        <div className="flex flex-col gap-10 text-sm text-stone-600 leading-7">

          <Section title="1. Objet">
            <p>
              Les présentes Conditions Générales d&apos;Utilisation (ci-après « CGU ») régissent l&apos;accès et
              l&apos;utilisation du site e-commerce <strong>Faithful</strong> (ci-après « le Site »).
              En accédant au Site, l&apos;utilisateur accepte sans réserve les présentes CGU.
            </p>
          </Section>

          <Section title="2. Accès au site">
            <p>
              Le Site est accessible gratuitement à tout utilisateur disposant d&apos;un accès à Internet.
              Tous les frais nécessaires à la connexion restent à la charge de l&apos;utilisateur.
              Faithful se réserve le droit de modifier, suspendre ou interrompre l&apos;accès au Site à tout moment.
            </p>
          </Section>

          <Section title="3. Commandes et paiement">
            <ul>
              <li>Les prix affichés sont en euros (€), toutes taxes comprises (TTC).</li>
              <li>Faithful ne collecte pas les données de paiement directement. Le règlement est sécurisé via notre prestataire de paiement (Stripe).</li>
              <li>Toute commande passée constitue un contrat de vente ferme entre l&apos;acheteur et Faithful.</li>
              <li>Faithful se réserve le droit d&apos;annuler toute commande en cas d&apos;indisponibilité du produit.</li>
            </ul>
          </Section>

          <Section title="4. Fabrication et délais de livraison">
            <p>
              Les produits Faithful sont fabriqués à la demande par notre partenaire <strong>Printful</strong>.
              Le délai de production est généralement de <strong>2 à 7 jours ouvrés</strong>, auquel s&apos;ajoute
              le délai d&apos;expédition (3 à 10 jours ouvrés selon la destination).
            </p>
            <p>
              Ces délais sont indicatifs et peuvent varier selon la période et la destination.
              Faithful ne saurait être tenue responsable des retards imputables au transporteur.
            </p>
          </Section>

          <Section title="5. Droit de rétractation">
            <p>
              Conformément à l&apos;article L221-18 du Code de la consommation, vous disposez d&apos;un délai
              de <strong>14 jours</strong> à compter de la réception de votre commande pour exercer votre droit
              de rétractation, sans avoir à justifier de motifs.
            </p>
            <p>
              <strong>Exception :</strong> les produits personnalisés ou fabriqués selon les spécifications
              du consommateur sont exclus du droit de rétractation (article L221-28 du Code de la consommation).
              Les produits Faithful étant fabriqués à la demande, ce droit s&apos;applique uniquement en cas de
              défaut avéré ou d&apos;erreur de notre part.
            </p>
            <p>
              Pour exercer votre droit de rétractation (si applicable) : <a href="mailto:vilmenmatthieu@gmail.com" className="underline hover:text-stone-900">vilmenmatthieu@gmail.com</a>
            </p>
          </Section>

          <Section title="6. Propriété intellectuelle">
            <p>
              Tous les designs, visuels, logos et contenus présents sur le Site sont la propriété exclusive
              de Faithful. Toute reproduction ou utilisation sans autorisation est strictement interdite.
            </p>
          </Section>

          <Section title="7. Données personnelles">
            <p>
              Les données collectées lors d&apos;une commande (nom, adresse, e-mail) sont utilisées
              exclusivement pour le traitement de la commande et la relation client.
              Elles ne sont pas revendues à des tiers. Pour plus d&apos;informations, consultez notre
              Politique de cookies.
            </p>
          </Section>

          <Section title="8. Droit applicable">
            <p>
              Les présentes CGU sont soumises au droit français. En cas de litige, une solution amiable
              sera recherchée en priorité. À défaut, les tribunaux compétents seront ceux du ressort
              du siège social de Faithful.
            </p>
          </Section>

          <Section title="9. Contact">
            <p>
              Pour toute question : <a href="mailto:vilmenmatthieu@gmail.com" className="underline hover:text-stone-900">vilmenmatthieu@gmail.com</a>
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
