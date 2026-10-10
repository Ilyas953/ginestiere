import type { Metadata } from "next";
import { ArticleHero, PricingTable, Faq, RelatedLinks, Temoignage, Contact, Footer } from "../components";
import { data } from "../data";

const canonical = "/prix-elagage-arbre";
const titre = "Prix d'un élagage d'arbre";

const faqs = [
  {
    question: "Quel est le prix moyen d'un élagage d'arbre ?",
    reponse: "Comptez 50 à 200 € pour un petit arbre de moins de 5 m, 200 à 600 € pour un arbre moyen (5 à 12 m), et 600 à 1 500 € pour un grand arbre de plus de 12 m, évacuation des branches comprise.",
  },
  {
    question: "L'élagage se facture-t-il à l'heure ou par arbre ?",
    reponse: "Les deux pratiques existent. Le tarif horaire d'un élagueur se situe entre 25 € et 65 € de l'heure selon la hauteur et la technicité, mais la plupart des entreprises préfèrent facturer un forfait par arbre après avoir vu le chantier.",
  },
  {
    question: "Le prix est-il le même pour tous les arbres ?",
    reponse: "Non. Le type d'arbre (feuillu, conifère), sa hauteur, son état de santé et son accessibilité influencent fortement le tarif final.",
  },
  {
    question: "Comment obtenir un tarif exact pour mon arbre ?",
    reponse: `${data.entreprise} propose un devis gratuit et sans engagement sous 48h, après avoir évalué votre arbre dans l'Oise ou le Val-d'Oise.`,
  },
];

export const metadata: Metadata = {
  title: `Prix élagage d'arbre - Oise & Val-d'Oise | ${data.entreprise}`,
  description: `Quel est le prix d'un élagage d'arbre ? Tarifs par taille d'arbre, taux horaire d'un élagueur, et devis gratuit dans l'Oise et le Val-d'Oise.`,
  alternates: { canonical },
  openGraph: {
    title: `Prix élagage d'arbre | ${data.entreprise}`,
    description: "Nos fourchettes de prix pour l'élagage d'arbre selon la taille et la technicité.",
    url: `${data.url}${canonical}`,
    siteName: data.entreprise,
    locale: "fr_FR",
    type: "article",
    images: [{ url: "/service.jpg", width: 1200, height: 630, alt: "Prix élagage d'arbre" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: data.url },
        { "@type": "ListItem", position: 2, name: "Prix élagage d'arbre", item: `${data.url}${canonical}` },
      ],
    },
    {
      "@type": "Article",
      headline: titre,
      about: "Prix élagage d'arbre",
      author: { "@type": "Organization", name: data.entreprise },
      publisher: { "@id": `${data.url}/#business` },
      url: `${data.url}${canonical}`,
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.reponse },
      })),
    },
  ],
};

export default function PrixElagageArbre() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <ArticleHero
        titre={titre}
        description="Combien coûte l'élagage d'un arbre ? Prix par taille d'arbre, tarif horaire d'un élagueur professionnel, et ce qui fait varier le devis."
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Prix élagage d'arbre" },
        ]}
      />
      <main>
        <div className="flex flex-col gap-16 py-16 px-6 lg:px-24 bg-white">

          <div className="flex flex-col gap-6 max-w-3xl mx-auto w-full">
            <h2 className="text-accent font-bold text-[28px] lg:text-[36px]">Prix par taille d&apos;arbre</h2>
            <p className="text-[16px] text-text">
              L&apos;élagage consiste à couper certaines branches pour entretenir la forme, la santé ou la sécurité de l&apos;arbre, sans l&apos;abattre. Le tarif dépend principalement de sa hauteur.
            </p>
          </div>

          <PricingTable
            titre="Élagage, enlèvement des branches compris"
            rows={[
              { label: "Petit arbre (moins de 5 m)", prix: "50 € – 200 €" },
              { label: "Arbre moyen (5 à 12 m)", prix: "200 € – 600 €" },
              { label: "Grand arbre (plus de 12 m)", prix: "600 € – 1 500 €" },
            ]}
            note="Fourchettes indicatives nationales, enlèvement des branches compris. L'état de santé de l'arbre et son accessibilité peuvent faire varier le tarif."
          />

          <PricingTable
            titre="Tarif horaire ou forfait journée"
            rows={[
              { label: "Taux horaire élagueur", prix: "25 € – 65 € / h" },
              { label: "Forfait journée (TTC)", prix: "350 € – 650 €" },
            ]}
          />

          <div className="flex flex-col gap-6 max-w-3xl mx-auto w-full">
            <h2 className="text-accent font-bold text-[28px] lg:text-[36px]">Ce qui fait varier le tarif</h2>
            <ul className="flex flex-col gap-3 text-[16px] text-text list-disc pl-5">
              <li><strong>La hauteur et l&apos;envergure</strong> de l&apos;arbre.</li>
              <li><strong>L&apos;accessibilité</strong> : grimpe encordée, nacelle ou accès restreint au jardin.</li>
              <li><strong>L&apos;état de santé</strong> de l&apos;arbre : bois mort, maladie, risque de chute de branches.</li>
              <li><strong>L&apos;évacuation des déchets verts</strong>, souvent comprise mais à vérifier sur le devis.</li>
              <li><strong>La fréquence d&apos;entretien</strong> : un arbre taillé régulièrement demande moins de travail qu&apos;un arbre laissé plusieurs années sans intervention.</li>
            </ul>
          </div>

          <div className="flex flex-col gap-6 max-w-3xl mx-auto w-full bg-fond2 rounded-2xl p-8">
            <h2 className="text-accent font-bold text-[24px]">Demandez votre devis d&apos;élagage gratuit</h2>
            <p className="text-[16px] text-text">
              {data.entreprise} se déplace gratuitement dans l&apos;Oise et le Val-d&apos;Oise pour évaluer votre arbre et vous transmettre un tarif précis et sans engagement sous 48h.
            </p>
          </div>

        </div>

        <Faq titre="Questions fréquentes sur le prix d'un élagage" questions={faqs} />

        <RelatedLinks
          titre="Pour aller plus loin"
          liens={[
            { href: "/abattage-arbre", label: "Abattage d'arbre", description: "Quand l'élagage ne suffit plus, l'abattage complet." },
            { href: "/tarif-taille-de-haie", label: "Tarif taille de haie", description: "Nos fourchettes de prix pour la taille de haie." },
            { href: "/arbre-dangereux", label: "Arbre dangereux : les signes", description: "Comment savoir si votre arbre représente un danger." },
          ]}
        />

        <Temoignage />
        <Contact titre="Demandez votre devis gratuit pour l'élagage" />
      </main>
      <Footer />
    </>
  );
}
