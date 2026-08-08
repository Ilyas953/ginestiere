import type { Metadata } from "next";
import { VilleHero, VilleContent, Temoignage, Contact, Footer } from "../components";
import { data } from "../data";

const ville = "Gouvieux";
const codePostal = "60270";
const canonical = "/elagueur-gouvieux";

export const metadata: Metadata = {
  title: `Élagueur à Gouvieux (${codePostal}) - Élagage, abattage, taille de haie | ${data.entreprise}`,
  description: `${data.entreprise} intervient à Gouvieux dans l'Oise pour l'élagage, l'abattage sécurisé, la taille de haie et l'entretien de jardin. Devis gratuit sous 48h.`,
  alternates: {
    canonical,
  },
  openGraph: {
    title: `Élagueur à Gouvieux (${codePostal}) | ${data.entreprise}`,
    description: `Élagage, abattage et taille de haie à Gouvieux et dans l'Oise. Devis gratuit sous 48h.`,
    url: `${data.url}${canonical}`,
    siteName: data.entreprise,
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/pknous.jpg",
        width: 1200,
        height: 630,
        alt: `Élagueur ${data.entreprise} intervenant à Gouvieux`,
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
          addressRegion: "Oise",
          addressCountry: "FR",
        },
      },
      url: `${data.url}${canonical}`,
    },
  ],
};

export default function ElagueurGouvieux() {
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
        description={`${data.entreprise} intervient à Gouvieux et dans tout le secteur de Chantilly pour l'élagage, l'abattage sécurisé et l'entretien de vos espaces verts. Devis gratuit sous 48h.`}
        image="/pknous.jpg"
        imageAlt="Chantier d'élagage terminé à Gouvieux dans l'Oise"
      />
      <main>
        <VilleContent
          ville={ville}
          intro={`${data.entreprise} est votre élagueur de proximité pour la commune de Gouvieux, dans l'Oise. Que vous résidiez dans le centre du village, près de l'hippodrome ou dans les hameaux environnants, notre équipe intervient rapidement pour l'entretien de vos arbres et de votre jardin, avec le même soin apporté à chaque chantier.`}
          services={`À Gouvieux comme dans le reste de l'Oise, nous intervenons pour tous types d'arbres, du jeune sujet au spécimen centenaire. Élagage et taille douce dans le respect de la physiologie de l'arbre, abattage et démontage sécurisé des sujets dangereux ou dépérissants, taille de haie de formation ou d'entretien, et entretien complet de jardin (tonte, débroussaillage, ramassage de feuilles). Chaque chantier est laissé propre, évacuation des déchets verts comprise.`}
          pourquoi={`Un travail sécurisé, encordé ou en nacelle, avec du matériel entretenu et contrôlé. Nous sommes couverts par une assurance responsabilité civile professionnelle et une garantie décennale. Un devis clair et gratuit, sans engagement ni frais cachés. Basés à proximité, nous connaissons le secteur de Gouvieux et intervenons rapidement, y compris en urgence pour un arbre dangereux.`}
          image="/service.jpg"
          imageAlt="Élagueur en action lors d'un chantier près de Gouvieux"
        />
        <Temoignage />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
