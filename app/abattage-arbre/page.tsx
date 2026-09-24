import type { Metadata } from "next";
import { VilleHero, ServiceContent, Temoignage, Contact, Footer } from "../components";
import { data } from "../data";

const service = "Abattage d'arbre";
const canonical = "/abattage-arbre";

export const metadata: Metadata = {
  title: `Abattage d'arbre dans l'Oise et le Val-d'Oise | ${data.entreprise}`,
  description: `${data.entreprise} réalise l'abattage sécurisé de tous types d'arbres dans l'Oise et le Val-d'Oise : abattage direct, démontage en espace contraint, rognage de souche. Devis gratuit sous 48h.`,
  alternates: {
    canonical,
  },
  openGraph: {
    title: `Abattage d'arbre | ${data.entreprise}`,
    description: `Abattage et démontage sécurisé d'arbres dangereux ou dépérissants dans l'Oise et le Val-d'Oise. Devis gratuit sous 48h.`,
    url: `${data.url}${canonical}`,
    siteName: data.entreprise,
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/service.jpg",
        width: 1200,
        height: 630,
        alt: `Abattage d'arbre par ${data.entreprise}`,
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
          name: service,
          item: `${data.url}${canonical}`,
        },
      ],
    },
    {
      "@type": "Service",
      name: service,
      provider: { "@id": `${data.url}/#business` },
      areaServed: {
        "@type": "Place",
        name: "Oise et Val-d'Oise",
      },
      url: `${data.url}${canonical}`,
    },
  ],
};

export default function AbattageArbre() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <VilleHero
        titre="Abattage d'arbre dans l'Oise et le Val-d'Oise"
        description={`${data.entreprise} intervient pour l'abattage sécurisé de tous types d'arbres, dangereux, dépérissants ou trop proches d'une habitation. Devis gratuit sous 48h.`}
        image="/service.jpg"
        imageAlt="Abattage d'arbre sécurisé par un élagueur professionnel"
      />
      <main>
        <ServiceContent
          titre="Abattage d'arbre : notre expertise"
          intro={`${data.entreprise} est installée à Chambly, dans l'Oise, et intervient dans tout le secteur pour l'abattage d'arbres dangereux, dépérissants ou gênants. Chaque intervention est évaluée au préalable pour choisir la technique la plus sûre selon l'environnement du chantier.`}
          servicesTitre="Notre méthode d'abattage"
          services={`Lorsqu'un arbre est dépérissant, dangereux ou trop proche d'une habitation, nous procédons à l'abattage direct lorsque l'espace le permet, ou au démontage par rétention pièce par pièce en espace contraint (jardin clos, proximité d'un bâtiment, ligne électrique, toiture). Rognage de souche possible en complément pour une remise en état complète du terrain. Chaque chantier est laissé propre, évacuation des déchets verts et du bois comprise.`}
          pourquoi={`Un travail sécurisé, réalisé par un grimpeur-élagueur formé, avec du matériel entretenu et contrôlé. Nous sommes couverts par une assurance responsabilité civile professionnelle et une garantie décennale. Un devis clair et gratuit, sans engagement ni frais cachés, et une intervention rapide en cas d'urgence sur un arbre dangereux.`}
          image="/pknous.jpg"
          imageAlt="Fin de chantier d'abattage d'arbre"
        />
        <Temoignage />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
