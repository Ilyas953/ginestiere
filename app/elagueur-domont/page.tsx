import type { Metadata } from "next";
import { VilleHero, VilleContent, Temoignage, Contact, Footer } from "../components";
import { data } from "../data";

const ville = "Domont";
const codePostal = "95330";
const canonical = "/elagueur-domont";

export const metadata: Metadata = {
  title: `Élagueur à Domont (${codePostal}) - Élagage, abattage, taille de haie | ${data.entreprise}`,
  description: `${data.entreprise} intervient à Domont dans le Val-d'Oise pour l'élagage, l'abattage sécurisé, la taille de haie et l'entretien de jardin. Devis gratuit sous 48h.`,
  alternates: {
    canonical,
  },
  openGraph: {
    title: `Élagueur à Domont (${codePostal}) | ${data.entreprise}`,
    description: `Élagage, abattage et taille de haie à Domont et dans le Val-d'Oise. Devis gratuit sous 48h.`,
    url: `${data.url}${canonical}`,
    siteName: data.entreprise,
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/service.jpg",
        width: 1200,
        height: 630,
        alt: `Élagueur ${data.entreprise} intervenant à Domont`,
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
  ],
};

export default function ElagueurDomont() {
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
        description={`${data.entreprise} intervient à Domont et dans tout le secteur du Val-d'Oise pour l'élagage, l'abattage sécurisé et l'entretien de vos espaces verts. Devis gratuit sous 48h.`}
        image="/service.jpg"
        imageAlt="Élagueur en intervention à Domont dans le Val-d'Oise"
      />
      <main>
        <VilleContent
          ville={ville}
          intro={`${data.entreprise} est basé à Jouy-le-Moutier, à proximité immédiate de Domont, et intervient régulièrement dans le Val-d'Oise. Notre proximité nous permet de nous déplacer rapidement pour établir un devis ou intervenir en urgence sur un arbre dangereux, avec le même niveau d'exigence que sur tous nos chantiers.`}
          services={`À Domont comme dans tout le Val-d'Oise, nous intervenons pour tous types d'arbres, du jeune sujet au spécimen centenaire. Élagage et taille douce dans le respect de la physiologie de l'arbre, abattage et démontage sécurisé des sujets dangereux ou dépérissants, taille de haie de formation ou d'entretien, et entretien complet de jardin (tonte, débroussaillage, ramassage de feuilles). Chaque chantier est laissé propre, évacuation des déchets verts comprise.`}
          pourquoi={`Un travail sécurisé, encordé ou en nacelle, avec du matériel entretenu et contrôlé. Nous sommes couverts par une assurance responsabilité civile professionnelle et une garantie décennale. Un devis clair et gratuit, sans engagement ni frais cachés. Étant basés à quelques minutes de Domont, nous pouvons intervenir rapidement, y compris en urgence.`}
          image="/pknous.jpg"
          imageAlt="Fin de chantier d'élagage près de Domont"
        />
        <Temoignage />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
