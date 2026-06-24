import FadeInSection from "@/components/FadeInSection";

const VERSES = [
  {
    ref: "Philippiens 4:13",
    text: "Je puis tout par celui qui me fortifie.",
    theme: "Force",
  },
  {
    ref: "Josué 1:9",
    text: "Sois fort et courageux ! Ne te trouble pas et ne t'épouvante pas, car l'Éternel ton Dieu est avec toi partout où tu iras.",
    theme: "Courage",
  },
  {
    ref: "2 Timothée 1:7",
    text: "Car Dieu ne nous a pas donné un esprit de timidité, mais un esprit de force, d'amour et de sagesse.",
    theme: "Identité",
  },
  {
    ref: "Proverbes 3:5–6",
    text: "Confie-toi en l'Éternel de tout ton cœur, et ne t'appuie pas sur ta sagesse. Reconnais-le dans toutes tes voies, et il aplanira tes sentiers.",
    theme: "Confiance",
  },
  {
    ref: "Ésaïe 40:31",
    text: "Ceux qui se confient en l'Éternel renouvellent leur force. Ils prennent le vol comme les aigles ; ils courent sans se lasser, ils marchent sans se fatiguer.",
    theme: "Renouveau",
  },
  {
    ref: "Romains 8:28",
    text: "Nous savons d'ailleurs que toutes choses concourent au bien de ceux qui aiment Dieu.",
    theme: "Providence",
  },
  {
    ref: "Galates 2:20",
    text: "Ce n'est plus moi qui vis, c'est Christ qui vit en moi ; et si je vis maintenant dans la chair, je vis dans la foi au Fils de Dieu, qui m'a aimé et qui s'est livré lui-même pour moi.",
    theme: "Foi vivante",
  },
  {
    ref: "Psaume 27:1",
    text: "L'Éternel est ma lumière et mon salut : de qui aurais-je crainte ? L'Éternel est le soutien de ma vie : de qui aurais-je peur ?",
    theme: "Paix",
  },
];

export default function InspirationPage() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10" style={{ background: "#F7F5F0" }} />

      {/* Header */}
      <div className="pt-36 pb-16 px-6 text-center">
        <FadeInSection>
          <p className="text-xs tracking-[0.4em] text-stone-400 uppercase mb-5">
            Parole de vie
          </p>
          <h1
            className="text-5xl md:text-6xl text-stone-900 mb-6"
            style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
          >
            Inspiration
          </h1>
          <div className="w-10 h-px bg-stone-300 mx-auto mb-6" />
          <p className="max-w-md mx-auto text-stone-500 text-sm leading-relaxed">
            Des versets pour te rappeler qui tu es et en qui tu crois — à porter chaque jour, comme nos vêtements.
          </p>
        </FadeInSection>
      </div>

      {/* Grille de versets */}
      <div className="max-w-5xl mx-auto px-6 pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {VERSES.map((v, i) => (
            <FadeInSection key={v.ref} delay={i * 0.05}>
              <div
                className="flex flex-col justify-between h-full p-8"
                style={{
                  background: "#ffffff",
                  border: "1px solid #e8e3da",
                  minHeight: 200,
                }}
              >
                <p className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-5">
                  {v.theme}
                </p>
                <p
                  className="text-stone-800 leading-relaxed text-lg mb-6 flex-1"
                  style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
                >
                  &ldquo;{v.text}&rdquo;
                </p>
                <p className="text-xs tracking-widest uppercase text-stone-400">
                  — {v.ref}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  );
}
