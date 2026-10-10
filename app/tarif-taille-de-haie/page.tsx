import type { Metadata } from "next";
import { ArticleHero, PricingTable, Faq, RelatedLinks, Temoignage, Contact, Footer } from "../components";
import { data } from "../data";

const canonical = "/tarif-taille-de-haie";
const titre = "Tarif taille de haie : prix au mètre linéaire";

const faqs = [
  {
    question: "Quel est le tarif moyen pour tailler une haie ?",
    reponse: "En France, le tarif d'une taille de haie varie entre 2 € et 15 € par mètre linéaire, avec une moyenne autour de 5 €/m. Le prix dépend surtout de la hauteur de la haie et de l'évacuation ou non des déchets verts.",
  },
  {
    question: "Le prix est-il le même avec ou sans évacuation des déchets ?",
    reponse: "Non. Pour une haie de moins de 1,50 m, comptez environ 3 à 4 €/mètre linéaire sans évacuation, contre 5 à 6 €/mètre linéaire avec évacuation des déchets verts comprise.",
  },
  {
    question: "Proposez-vous un devis gratuit pour la taille de haie ?",
    reponse: `Oui, ${data.entreprise} se déplace gratuitement pour mesurer votre haie et vous proposer un tarif précis sous 48h, sans engagement.`,
  },
  {
    question: "Taillez-vous les haies très hautes ou difficiles d'accès ?",
    reponse: "Oui, nous disposons du matériel adapté pour intervenir sur des haies de plus de 3 mètres de hauteur, avec évacuation des déchets comprise dans le tarif.",
  },
];

export const metadata: Metadata = {
  title: `Tarif taille de haie au m² | ${data.entreprise}`,
  description: `Quel est le tarif d'une taille de haie au mètre linéaire ? Fourchettes de prix, facteurs de variation et devis gratuit dans l'Oise et le Val-d'Oise.`,
  alternates: { canonical },
  openGraph: {
    title: `Tarif taille de haie | ${data.entreprise}`,
    description: "Prix au mètre linéaire d'une taille de haie : nos fourchettes et les facteurs qui font varier le coût.",
    url: `${data.url}${canonical}`,
    siteName: data.entreprise,
    locale: "fr_FR",
    type: "article",
    images: [{ url: "/service.jpg", width: 1200, height: 630, alt: "Tarif taille de haie" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: data.url },
        { "@type": "ListItem", position: 2, name: "Taille de haie", item: `${data.url}/taille-de-haie` },
        { "@type": "ListItem", position: 3, name: "Tarif taille de haie", item: `${data.url}${canonical}` },
      ],
    },
    {
      "@type": "Article",
      headline: titre,
      about: "Tarif taille de haie",
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

export default function TarifTailleDeHaie() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <ArticleHero
        titre={titre}
        description="Combien coûte la taille d'une haie ? Voici les fourchettes de prix observées en France, les facteurs qui font varier le tarif, et comment obtenir un chiffrage exact pour votre jardin."
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Taille de haie", href: "/taille-de-haie" },
          { label: "Tarif" },
        ]}
      />
      <main>
        <div className="flex flex-col gap-16 py-16 px-6 lg:px-24 bg-white">

          <div className="flex flex-col gap-6 max-w-3xl mx-auto w-full">
            <h2 className="text-accent font-bold text-[28px] lg:text-[36px]">Prix au mètre linéaire</h2>
            <p className="text-[16px] text-text">
              Le tarif d&apos;une taille de haie se calcule le plus souvent au mètre linéaire, et varie principalement selon la hauteur de la haie et selon que l&apos;évacuation des déchets verts est comprise ou non.
            </p>
          </div>

          <PricingTable
            titre="Fourchettes de prix par mètre linéaire"
            rows={[
              { label: "Haie basse (moins de 1,50 m), sans évacuation", prix: "3 € – 4 € / m" },
              { label: "Haie basse (moins de 1,50 m), avec évacuation", prix: "5 € – 6 € / m" },
              { label: "Haie moyenne (1,50 m à 3 m)", prix: "6 € – 10 € / m" },
              { label: "Haie haute (plus de 3 m), évacuation comprise", prix: "10 € – 15 € / m" },
            ]}
            note="Fourchettes indicatives observées en France. Le prix exact dépend de la longueur totale, de l'épaisseur de la haie, de son accessibilité et du type de déchets à évacuer."
          />

          <div className="flex flex-col gap-6 max-w-3xl mx-auto w-full">
            <h2 className="text-accent font-bold text-[28px] lg:text-[36px]">Les facteurs qui font varier le prix</h2>
            <ul className="flex flex-col gap-3 text-[16px] text-text list-disc pl-5">
              <li><strong>La hauteur et l&apos;épaisseur</strong> de la haie : plus elle est haute et dense, plus le temps d&apos;intervention augmente.</li>
              <li><strong>L&apos;accessibilité</strong> : une haie accessible depuis la rue coûte moins cher qu&apos;une haie au fond d&apos;un jardin difficile d&apos;accès.</li>
              <li><strong>L&apos;évacuation des déchets verts</strong> : la compter dans le devis augmente le tarif au mètre linéaire mais vous évite d&apos;avoir à gérer les déchets vous-même.</li>
              <li><strong>Le type de haie</strong> : une haie architecturée (topiaire, formes carrées) demande plus de précision qu&apos;une haie libre.</li>
              <li><strong>La fréquence d&apos;entretien</strong> : une haie taillée régulièrement est plus rapide à retailler qu&apos;une haie laissée plusieurs années sans entretien.</li>
            </ul>
          </div>

          <div className="flex flex-col gap-6 max-w-3xl mx-auto w-full bg-fond2 rounded-2xl p-8">
            <h2 className="text-accent font-bold text-[24px]">Pourquoi demander un devis plutôt que de se fier à une moyenne ?</h2>
            <p className="text-[16px] text-text">
              Ces fourchettes sont indicatives : elles ne remplacent pas un devis réel. {data.entreprise} se déplace gratuitement à votre domicile dans l&apos;Oise et le Val-d&apos;Oise pour mesurer votre haie et vous proposer un tarif précis et sans engagement sous 48h.
            </p>
          </div>

        </div>

        <Faq titre="Questions fréquentes sur le tarif de taille de haie" questions={faqs} />

        <RelatedLinks
          titre="Pour aller plus loin"
          liens={[
            { href: "/taille-de-haie", label: "Notre service de taille de haie", description: "Découvrez comment nous intervenons sur votre haie." },
            { href: "/debroussaillage", label: "Débroussaillage", description: "Un terrain envahi à nettoyer en plus de votre haie ?" },
            { href: "/prix-elagage-arbre", label: "Prix élagage d'arbre", description: "Nos tarifs pour la taille et l'élagage d'arbres." },
          ]}
        />

        <Temoignage />
        <Contact titre="Demandez votre devis gratuit pour votre haie" />
      </main>
      <Footer />
    </>
  );
}
