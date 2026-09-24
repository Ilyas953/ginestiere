import type { Metadata } from "next";
import { VilleHero, ServiceContent, Temoignage, Contact, Footer } from "../components";
import { data } from "../data";

const service = "Débroussaillage";
const canonical = "/debroussaillage";

export const metadata: Metadata = {
  title: `Débroussaillage dans l'Oise et le Val-d'Oise | ${data.entreprise}`,
  description: `${data.entreprise} réalise le débroussaillage de terrains envahis, friches et jardins dans l'Oise et le Val-d'Oise. Remise en état complète, devis gratuit sous 48h.`,
  alternates: {
    canonical,
  },
  openGraph: {
    title: `Débroussaillage | ${data.entreprise}`,
    description: `Débroussaillage et remise en état de terrains envahis ou de friches dans l'Oise et le Val-d'Oise. Devis gratuit sous 48h.`,
    url: `${data.url}${canonical}`,
    siteName: data.entreprise,
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/service.jpg",
        width: 1200,
        height: 630,
        alt: `Débroussaillage par ${data.entreprise}`,
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

export default function Debroussaillage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <VilleHero
        titre="Débroussaillage dans l'Oise et le Val-d'Oise"
        description={`${data.entreprise} intervient pour le débroussaillage de terrains envahis, friches et jardins laissés à l'abandon. Remise en état complète, devis gratuit sous 48h.`}
        image="/service.jpg"
        imageAlt="Débroussaillage d'un terrain envahi par la végétation"
      />
      <main>
        <ServiceContent
          titre="Débroussaillage : remettre votre terrain en état"
          intro={`${data.entreprise} est installée à Chambly, dans l'Oise, et intervient dans tout le secteur pour le débroussaillage de terrains envahis par les ronces, broussailles et hautes herbes. Que ce soit pour un terrain à entretenir régulièrement ou une friche à remettre en état avant projet, nous adaptons notre matériel à la difficulté du terrain.`}
          servicesTitre="Nos prestations de débroussaillage"
          services={`Débroussaillage de terrains envahis, friches, talus et abords de propriété, désherbage et fauchage de hautes herbes, dégagement d'accès et de clôtures masqués par la végétation. Nous intervenons aussi bien pour un entretien ponctuel que pour une remise en état complète avant construction, vente ou reprise de terrain. Évacuation des déchets verts comprise à chaque chantier.`}
          pourquoi={`Du matériel professionnel adapté aux terrains difficiles, broussailles denses ou fortes pentes, entretenu et contrôlé. Un devis clair et gratuit établi après visite du terrain, sans engagement ni frais cachés. Entreprise assurée en responsabilité civile professionnelle, intervention rapide dans tout le secteur de l'Oise et du Val-d'Oise.`}
          image="/pknous.jpg"
          imageAlt="Terrain débroussaillé et remis en état"
        />
        <Temoignage />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
