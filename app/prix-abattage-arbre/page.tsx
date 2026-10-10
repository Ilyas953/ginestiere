import type { Metadata } from "next";
import Link from "next/link";
import { ArticleHero, PricingTable, Faq, RelatedLinks, Temoignage, Contact, Footer } from "../components";
import { data } from "../data";

const canonical = "/prix-abattage-arbre";
const titre = "Prix d'un abattage d'arbre";

const faqs = [
  {
    question: "Quel est le prix moyen pour abattre un arbre ?",
    reponse: "En France, l'abattage d'un arbre coûte en moyenne entre 100 € et 1 500 €, hors dessouchage. Le tarif dépend essentiellement de la hauteur de l'arbre, au-delà de 20 m le prix peut tripler.",
  },
  {
    question: "Le prix d'un abattage d'arbre dangereux est-il plus élevé ?",
    reponse: "Oui, un arbre dangereux (penché, instable, proche d'une habitation ou de lignes électriques) demande un démontage par rétention pièce par pièce plutôt qu'un abattage direct, ce qui augmente le temps d'intervention et donc le tarif.",
  },
  {
    question: "Le dessouchage est-il compris dans le prix de l'abattage ?",
    reponse: "Non, le dessouchage est presque toujours facturé en complément. Comptez entre 75 € et 400 € selon le diamètre de la souche.",
  },
  {
    question: "Comment obtenir un devis gratuit pour l'abattage de mon arbre ?",
    reponse: `${data.entreprise} se déplace gratuitement dans l'Oise et le Val-d'Oise pour évaluer votre arbre et vous transmettre un tarif précis sous 48h, ou en urgence si l'arbre est dangereux.`,
  },
];

export const metadata: Metadata = {
  title: `Prix abattage d'arbre - Oise & Val-d'Oise | ${data.entreprise}`,
  description: `Quel est le prix d'un abattage d'arbre ? Tarifs par hauteur, abattage d'arbre dangereux, dessouchage en option. Devis gratuit avec ${data.entreprise}.`,
  alternates: { canonical },
  openGraph: {
    title: `Prix abattage d'arbre | ${data.entreprise}`,
    description: "Nos fourchettes de prix pour l'abattage d'arbre par hauteur, avec ou sans dessouchage.",
    url: `${data.url}${canonical}`,
    siteName: data.entreprise,
    locale: "fr_FR",
    type: "article",
    images: [{ url: "/service.jpg", width: 1200, height: 630, alt: "Prix abattage d'arbre" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: data.url },
        { "@type": "ListItem", position: 2, name: "Abattage d'arbre", item: `${data.url}/abattage-arbre` },
        { "@type": "ListItem", position: 3, name: "Prix abattage d'arbre", item: `${data.url}${canonical}` },
      ],
    },
    {
      "@type": "Article",
      headline: titre,
      about: "Prix abattage d'arbre",
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

export default function PrixAbattageArbre() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <ArticleHero
        titre={titre}
        description="Combien coûte l'abattage d'un arbre ? Fourchettes de prix par hauteur, cas particulier de l'arbre dangereux, et facteurs qui influencent le devis final."
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Abattage d'arbre", href: "/abattage-arbre" },
          { label: "Prix" },
        ]}
      />
      <main>
        <div className="flex flex-col gap-16 py-16 px-6 lg:px-24 bg-white">

          <div className="flex flex-col gap-6 max-w-3xl mx-auto w-full">
            <h2 className="text-accent font-bold text-[28px] lg:text-[36px]">Prix par hauteur d&apos;arbre</h2>
            <p className="text-[16px] text-text">
              Le tarif d&apos;un abattage dépend avant tout de la hauteur de l&apos;arbre : plus il est grand, plus le temps de travail, le matériel et les précautions de sécurité augmentent.
            </p>
          </div>

          <PricingTable
            titre="Abattage, hors dessouchage"
            rows={[
              { label: "Arbre de 2 à 5 m", prix: "130 € – 230 €" },
              { label: "Arbre de 5 à 10 m", prix: "230 € – 370 €" },
              { label: "Arbre de 10 à 15 m", prix: "370 € – 550 €" },
              { label: "Arbre de 15 à 20 m", prix: "550 € – 650 €" },
              { label: "Arbre de 20 à 25 m", prix: "650 € – 750 €" },
            ]}
            note="Fourchettes indicatives nationales. L'accès au terrain, la densité du feuillage et l'évacuation des déchets verts font varier le tarif final."
          />

          <div className="flex flex-col gap-6 max-w-3xl mx-auto w-full bg-fond2 rounded-2xl p-8">
            <h2 className="text-accent font-bold text-[24px]">Arbre dangereux : un tarif à part</h2>
            <p className="text-[16px] text-text">
              Un arbre penché, fissuré, dépérissant ou situé à proximité immédiate d&apos;une habitation, d&apos;une ligne électrique ou d&apos;une toiture ne peut généralement pas être abattu d&apos;un bloc. Il doit être démonté par rétention, branche par branche, depuis la cime — une technique plus longue et plus technique qui augmente le prix par rapport à un abattage direct en terrain dégagé. Une intervention en urgence sur un arbre dangereux peut également majorer le délai d&apos;intervention mais pas nécessairement le tarif si l&apos;accès reste simple.
            </p>
            <p className="text-[16px] text-text">
              Vous avez un doute sur la dangerosité d&apos;un arbre ?
              {" "}
              <Link href="/arbre-dangereux" className="text-accent font-bold underline">Consultez notre guide pour reconnaître les signes d&apos;un arbre à risque</Link>.
            </p>
          </div>

          <div className="flex flex-col gap-6 max-w-3xl mx-auto w-full">
            <h2 className="text-accent font-bold text-[28px] lg:text-[36px]">Et le dessouchage ?</h2>
            <p className="text-[16px] text-text">
              Le dessouchage n&apos;est pas inclus dans le prix de l&apos;abattage : il est facturé séparément, entre 75 € et 400 € selon le diamètre de la souche.
              {" "}
              <Link href="/dessouchage" className="text-accent font-bold underline">Voir le détail des tarifs de dessouchage</Link>.
            </p>
          </div>

        </div>

        <Faq titre="Questions fréquentes sur le prix d'un abattage" questions={faqs} />

        <RelatedLinks
          titre="Pour aller plus loin"
          liens={[
            { href: "/abattage-arbre", label: "Notre service d'abattage d'arbre", description: "Comment nous intervenons pour couper votre arbre en sécurité." },
            { href: "/arbre-dangereux", label: "Arbre dangereux : les signes", description: "Comment reconnaître un arbre à risque avant qu'il ne tombe." },
            { href: "/dessouchage", label: "Dessouchage", description: "Enlever la souche après l'abattage." },
          ]}
        />

        <Temoignage />
        <Contact titre="Demandez votre devis gratuit pour l'abattage" />
      </main>
      <Footer />
    </>
  );
}
