import type { Metadata } from "next";
import { ArticleHero, Faq, RelatedLinks, Temoignage, Contact, Footer } from "../components";
import { data } from "../data";

const canonical = "/arbre-dangereux";
const titre = "Arbre dangereux : les signes et que faire";

const faqs = [
  {
    question: "Comment savoir si un arbre est dangereux ?",
    reponse: "Un arbre penché de façon récente, des branches mortes ou cassées en hauteur, un tronc fissuré ou creux, des champignons (polypores) à la base, ou des racines soulevées sont les principaux signes d'un arbre à risque.",
  },
  {
    question: "Qui est responsable si mon arbre tombe sur la propriété du voisin ?",
    reponse: "Selon l'article 1242 du Code civil, le propriétaire d'un arbre répond du dommage causé par sa chute, car il en a la garde. Si l'arbre était sain et que la chute résulte d'un vent exceptionnel (force majeure), la responsabilité peut être écartée. Si l'arbre était malade, mort ou mal entretenu, la responsabilité est engagée.",
  },
  {
    question: "Dois-je agir en urgence si mon arbre penche ?",
    reponse: "Oui. Un arbre qui penche brutalement, surtout après une tempête ou de fortes pluies, peut s'effondrer à tout moment. Il faut sécuriser la zone et faire intervenir un professionnel rapidement.",
  },
  {
    question: "Intervenez-vous en urgence pour un arbre dangereux ?",
    reponse: `Oui, ${data.entreprise} intervient rapidement dans l'Oise et le Val-d'Oise pour sécuriser ou abattre un arbre dangereux. Contactez-nous au ${data.numero}.`,
  },
];

export const metadata: Metadata = {
  title: `Arbre dangereux : signes et solutions | ${data.entreprise}`,
  description: `Arbre penché, fissuré ou malade ? Découvrez les signes d'un arbre dangereux, qui est responsable en cas de chute, et comment intervenir vite.`,
  alternates: { canonical },
  openGraph: {
    title: `Arbre dangereux : que faire ? | ${data.entreprise}`,
    description: "Signes d'un arbre à risque, responsabilité du propriétaire, et comment intervenir rapidement.",
    url: `${data.url}${canonical}`,
    siteName: data.entreprise,
    locale: "fr_FR",
    type: "article",
    images: [{ url: "/service.jpg", width: 1200, height: 630, alt: "Arbre dangereux" }],
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
        { "@type": "ListItem", position: 3, name: "Arbre dangereux", item: `${data.url}${canonical}` },
      ],
    },
    {
      "@type": "Article",
      headline: titre,
      about: "Arbre dangereux",
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

export default function ArbreDangereux() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <ArticleHero
        titre={titre}
        description="Un arbre penché, des branches mortes, un tronc fissuré ? Voici comment reconnaître un arbre dangereux, qui est responsable en cas de chute, et comment intervenir vite."
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Abattage d'arbre", href: "/abattage-arbre" },
          { label: "Arbre dangereux" },
        ]}
      />
      <main>
        <div className="flex flex-col gap-16 py-16 px-6 lg:px-24 bg-white">

          <div className="flex flex-col gap-6 max-w-3xl mx-auto w-full">
            <h2 className="text-accent font-bold text-[28px] lg:text-[36px]">Les signes d&apos;un arbre dangereux</h2>
            <p className="text-[16px] text-text">
              Un arbre ne tombe pas sans raison. La plupart du temps, des signes sont visibles avant qu&apos;un accident ne survienne. Voici ceux qui doivent vous alerter :
            </p>
            <ul className="flex flex-col gap-3 text-[16px] text-text list-disc pl-5">
              <li><strong>Un tronc penché</strong> de façon visible, surtout si l&apos;inclinaison est récente ou s&apos;est accentuée après une tempête.</li>
              <li><strong>Des branches mortes ou cassées</strong> en hauteur, qui peuvent se détacher sans prévenir.</li>
              <li><strong>Un tronc fissuré, creux ou qui sonne creux</strong> quand on le frappe.</li>
              <li><strong>Des champignons</strong> (polypores, armillaires) à la base ou sur l&apos;écorce, signe de pourrissement interne.</li>
              <li><strong>Des racines soulevées</strong> ou un sol fissuré autour du pied de l&apos;arbre.</li>
              <li><strong>Un feuillage clairsemé ou absent</strong> sur une partie de l&apos;arbre en pleine saison de végétation.</li>
            </ul>
            <p className="text-[16px] text-text">
              Un seul de ces signes ne signifie pas forcément un danger immédiat, mais leur cumul, ou leur proximité avec une habitation, une route ou une ligne électrique, justifie un diagnostic par un professionnel.
            </p>
          </div>

          <div className="flex flex-col gap-6 max-w-3xl mx-auto w-full bg-fond2 rounded-2xl p-8">
            <h2 className="text-accent font-bold text-[24px]">Qui est responsable si l&apos;arbre tombe ?</h2>
            <p className="text-[16px] text-text">
              En droit français, l&apos;article 1242 du Code civil prévoit que le propriétaire d&apos;un arbre répond des dommages causés par sa chute, en tant que gardien de la chose. Si l&apos;arbre était sain et que la chute résulte d&apos;un événement exceptionnel (tempête classée, par exemple), la force majeure peut écarter la responsabilité. Mais si l&apos;arbre était manifestement malade, mort ou mal entretenu, la responsabilité du propriétaire est engagée — y compris envers un voisin ou sur la voie publique.
            </p>
            <p className="text-[14px] text-text/70 italic">
              Ce contenu est fourni à titre informatif et ne remplace pas une consultation juridique. En cas de litige, rapprochez-vous d&apos;un professionnel du droit.
            </p>
          </div>

          <div className="flex flex-col gap-6 max-w-3xl mx-auto w-full">
            <h2 className="text-accent font-bold text-[28px] lg:text-[36px]">Que faire si vous repérez un arbre à risque ?</h2>
            <ol className="flex flex-col gap-3 text-[16px] text-text list-decimal pl-5">
              <li><strong>Sécurisez la zone</strong> : éloignez les personnes et les véhicules de la trajectoire de chute possible.</li>
              <li><strong>Ne tentez pas d&apos;intervenir vous-même</strong> sur un arbre instable, même avec une tronçonneuse : le risque d&apos;accident est réel.</li>
              <li><strong>Faites appel à un professionnel</strong> pour un diagnostic et, si nécessaire, un abattage ou un démontage sécurisé.</li>
              <li><strong>En cas d&apos;urgence</strong> (arbre qui menace de tomber sur une habitation ou une voie de circulation), contactez une entreprise pouvant intervenir rapidement.</li>
            </ol>
          </div>

          <div className="flex flex-col gap-6 max-w-3xl mx-auto w-full bg-accent/5 border border-accent/15 rounded-2xl p-8">
            <h2 className="text-accent font-bold text-[24px]">Besoin d&apos;une intervention rapide ?</h2>
            <p className="text-[16px] text-text">
              {data.entreprise} intervient dans l&apos;Oise et le Val-d&apos;Oise pour sécuriser ou abattre un arbre dangereux, avec le matériel et l&apos;assurance adaptés à ce type de chantier. Appelez-nous directement pour une évaluation rapide.
            </p>
          </div>

        </div>

        <Faq titre="Questions fréquentes sur les arbres dangereux" questions={faqs} />

        <RelatedLinks
          titre="Pour aller plus loin"
          liens={[
            { href: "/abattage-arbre", label: "Abattage d'arbre", description: "Notre service d'abattage sécurisé, y compris en urgence." },
            { href: "/prix-abattage-arbre", label: "Prix abattage d'arbre", description: "Nos fourchettes de prix, y compris pour un arbre dangereux." },
            { href: "/dessouchage", label: "Dessouchage", description: "Enlever la souche après l'abattage d'un arbre dangereux." },
          ]}
        />

        <Temoignage />
        <Contact titre="Besoin d'une intervention rapide ? Demandez votre devis" />
      </main>
      <Footer />
    </>
  );
}
