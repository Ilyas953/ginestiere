import type { Metadata } from "next";
import { VilleHero, VilleContent, BreadcrumbBar, Faq, Temoignage, Contact, Footer } from "../components";
import { data } from "../data";

const ville = "Viarmes";
const codePostal = "95270";
const canonical = "/elagueur-viarmes";

const faqs = [
  {
    question: "Quel est le délai d'intervention à Viarmes ?",
    reponse: `Étant basés directement à Viarmes, nous sommes l'élagueur le plus proche pour la commune. Nous proposons un devis gratuit sous 48h, et pouvons intervenir plus rapidement encore en cas d'urgence sur un arbre dangereux.`,
  },
  {
    question: "Intervenez-vous aussi dans les communes voisines de Viarmes ?",
    reponse: `Oui. En plus de Viarmes, nous intervenons régulièrement à Seugy, Asnières-sur-Oise, Luzarches, Chaumontel et dans tout le secteur du Val-d'Oise et de l'Oise.`,
  },
  {
    question: "Le devis est-il vraiment gratuit et sans engagement ?",
    reponse: `Oui, nous nous déplaçons gratuitement à Viarmes pour évaluer votre projet et vous transmettre un chiffrage détaillé, sans aucun engagement ni frais caché.`,
  },
  {
    question: "Évacuez-vous les déchets verts après le chantier ?",
    reponse: `Oui, l'évacuation des déchets verts et du bois est systématiquement comprise dans nos interventions à Viarmes. Chaque chantier est laissé propre.`,
  },
  {
    question: "Êtes-vous assurés pour les travaux en hauteur ?",
    reponse: `Oui, ${data.entreprise} est couverte par une assurance responsabilité civile professionnelle et une garantie décennale, pour des interventions en toute sécurité, grimpe encordée ou en nacelle.`,
  },
];

export const metadata: Metadata = {
  title: `Élagueur à Viarmes (${codePostal}) | ${data.entreprise}`,
  description: `${data.entreprise}, basé à Viarmes dans le Val-d'Oise, intervient pour l'élagage, l'abattage sécurisé, la taille de haie et l'entretien de jardin. Devis gratuit sous 48h.`,
  alternates: {
    canonical,
  },
  openGraph: {
    title: `Élagueur à Viarmes (${codePostal}) | ${data.entreprise}`,
    description: `Élagage, abattage et taille de haie à Viarmes et dans le Val-d'Oise. Devis gratuit sous 48h.`,
    url: `${data.url}${canonical}`,
    siteName: data.entreprise,
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/service.jpg",
        width: 1200,
        height: 630,
        alt: `Élagueur ${data.entreprise} intervenant à Viarmes`,
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: data.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: `Élagueur à ${ville}`,
          item: `${data.url}${canonical}`,
        },
      ],
    },
    {
      "@type": "Service",
      name: `Élagage et abattage d'arbres à ${ville}`,
      provider: { "@id": `${data.url}/#business` },
      areaServed: {
        "@type": "City",
        name: ville,
        address: {
          "@type": "PostalAddress",
          postalCode: codePostal,
          addressRegion: "Val-d'Oise",
          addressCountry: "FR",
        },
      },
      url: `${data.url}${canonical}`,
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.reponse,
        },
      })),
    },
  ],
};

export default function ElagueurViarmes() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <VilleHero
        titre={`Élagueur à ${ville} — Élagage, abattage, taille de haie`}
        description={`${data.entreprise} est basé à Viarmes et intervient directement dans la commune ainsi que dans tout le Val-d'Oise pour l'élagage, l'abattage sécurisé et l'entretien de vos espaces verts. Devis gratuit sous 48h.`}
        image="/service.jpg"
        imageAlt="Élagueur en intervention à Viarmes dans le Val-d'Oise"
      />
      <main>
        <BreadcrumbBar items={[{ label: "Accueil", href: "/" }, { label: `Élagueur à ${ville}` }]} />
        <VilleContent
          ville={ville}
          intro={`${data.entreprise} est installée à Viarmes, au cœur du Val-d'Oise. Étant basés directement dans la commune, nous sommes l'élagueur de proximité pour les habitants de Viarmes et des villages environnants (Seugy, Asnières-sur-Oise, Luzarches, Chaumontel). Cette implantation locale nous permet de nous déplacer rapidement pour un devis ou une intervention en urgence sur un arbre dangereux.`}
          services={`À Viarmes comme dans tout le Val-d'Oise, nous intervenons sur tous types d'arbres, du jeune sujet au spécimen centenaire. Élagage et taille douce dans le respect de la physiologie de l'arbre, abattage et démontage sécurisé des sujets dangereux ou dépérissants, taille de haie de formation ou d'entretien, et entretien complet de jardin (tonte, débroussaillage, ramassage de feuilles). Chaque chantier est laissé propre, évacuation des déchets verts comprise.`}
          pourquoi={`Un travail sécurisé, encordé ou en nacelle, avec du matériel entretenu et contrôlé. Nous sommes couverts par une assurance responsabilité civile professionnelle et une garantie décennale. Un devis clair et gratuit, sans engagement ni frais cachés. Étant basés à Viarmes même, nous intervenons plus rapidement qu'ailleurs, y compris en urgence.`}
          image="/pknous.jpg"
          imageAlt="Fin de chantier d'élagage à Viarmes"
        />
        <Faq
          titre={`Questions fréquentes — Élagueur à ${ville}`}
          questions={faqs}
        />
        <Temoignage />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
