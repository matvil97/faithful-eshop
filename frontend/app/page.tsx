import Link from "next/link";
import AnimatedHero from "@/components/AnimatedHero";
import FadeInSection from "@/components/FadeInSection";

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* ── HERO ── */}
      <AnimatedHero />

      {/* ── BRAND STORY ── */}
      <section style={{ background: "#1a1a1a" }}>
        <FadeInSection className="py-32 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs tracking-[0.4em] text-stone-500 uppercase mb-8">
              Notre histoire
            </p>
            <h2
              className="text-4xl md:text-5xl text-stone-100 leading-tight mb-10"
              style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
            >
              "Dieu a mis ce rêve dans mon cœur bien avant que je comprenne pourquoi."
            </h2>
            <div className="w-12 h-px bg-stone-600 mx-auto mb-10" />
            <p className="text-stone-400 leading-8 text-sm mb-6">
              Depuis l'enfance, j'ai senti que la foi devait se vivre au grand jour — non pas enfermée dans un bâtiment le dimanche, mais portée, affichée, incarnée dans le quotidien. L'idée de Faithful est née de cette conviction profonde, semée par Dieu bien des années avant que j'aie les mots pour la décrire.
            </p>
            <p className="text-stone-400 leading-8 text-sm mb-6">
              Chaque design est une prière, chaque vêtement est un témoignage. Que tu traverses une saison de grâce ou de combat, Faithful est là pour te rappeler l'essentiel : tu es porté·e par quelque chose — et Quelqu'un — de plus grand.
            </p>
            <p className="text-stone-300 leading-8 text-sm font-medium">
              Cette marque n'est pas un projet de mode. C'est une mission.
            </p>
          </div>
        </FadeInSection>
      </section>

      {/* ── VALEURS ── */}
      <section className="py-24 px-6" style={{ background: "#F7F5F0" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { icon: "✦", title: "Foi portée", desc: "Chaque pièce est conçue pour que ta foi soit visible, sans avoir à l'expliquer.", delay: 0 },
              { icon: "✦", title: "Qualité premium", desc: "Des matières pensées pour durer, comme les vérités qui t'ont construit·e.", delay: 0.15 },
              { icon: "✦", title: "Produit à la commande", desc: "Rien n'est gaspillé. Chaque pièce est fabriquée à la demande, pour toi.", delay: 0.3 },
            ].map((v) => (
              <FadeInSection key={v.title} delay={v.delay} className="flex flex-col items-center gap-4">
                <span className="text-stone-300 text-lg">{v.icon}</span>
                <h3 className="text-sm tracking-widest uppercase text-stone-900 font-semibold">{v.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{v.desc}</p>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-28 px-6 text-center" style={{ background: "#EDE8DF" }}>
        <FadeInSection>
          <p className="text-xs tracking-[0.4em] text-stone-400 uppercase mb-6">La collection</p>
          <h2
            className="text-4xl md:text-6xl text-stone-900 mb-10"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Porter sa foi, <br />
            <span style={{ fontStyle: "italic" }}>chaque jour.</span>
          </h2>
          <Link
            href="/products"
            className="inline-flex items-center gap-3 border border-stone-900 text-stone-900 px-10 py-4 text-xs tracking-widest uppercase hover:bg-stone-900 hover:text-stone-100 transition-all duration-300"
          >
            Voir la boutique →
          </Link>
        </FadeInSection>
      </section>

    </div>
  );
}
