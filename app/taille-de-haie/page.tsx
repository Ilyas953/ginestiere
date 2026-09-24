import type { Metadata } from "next";
import { VilleHero, ServiceContent, Temoignage, Contact, Footer } from "../components";
import { data } from "../data";

const service = "Taille de haie";
const canonical = "/taille-de-haie";

export const metadata: Metadata = {
  title: `Taille de haie dans l'Oise et le Val-d'Oise | ${data.entreprise}`,
  description: `${data.entreprise} réalise la taille de haie de formation et d'entretien dans l'Oise et le Val-d'Oise, quelle que soit la hauteur. Travail soigné, devis gratuit sous 48h.`,
  alternates: {
    canonical,
  },
  openGraph: {
    title: `Taille de haie | ${data.entreprise}`,
    description: `Taille de haie de formation ou d'entretien, haies libres ou architecturées, dans l'Oise et le Val-d'Oise. Devis gratuit sous 48h.`,
    url: `${data.url}${canonical}`,
    siteName: data.entreprise,
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/service.jpg",
        width: 1200,
        height: 630,
        alt: `Taille de haie par ${data.entreprise}`,
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

export default function TailleDeHaie() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <VilleHero
        titre="Taille de haie dans l'Oise et le Val-d'Oise"
        description={`${data.entreprise} intervient pour la taille de vos haies, libres ou architecturées, quelle que soit la hauteur. Travail soigné, devis gratuit sous 48h.`}
        image="/service.jpg"
        imageAlt="Taille de haie réalisée par un professionnel"
      />
      <main>
        <ServiceContent
          titre="Taille de haie : notre savoir-faire"
          intro={`${data.entreprise} est installée à Chambly, dans l'Oise, et intervient dans tout le secteur pour l'entretien et la taille de vos haies. Que votre haie serve de clôture, de brise-vue ou d'élément décoratif, nous adaptons la coupe à sa nature et à l'usage que vous en faites.`}
          servicesTitre="Nos prestations de taille de haie"
          services={`Taille de formation pour donner sa structure à une jeune haie, ou taille d'entretien pour conserver une forme nette année après année. Nous intervenons sur les haies libres comme sur les haies architecturées (carrées, arrondies, topiaires), quelle que soit la hauteur, y compris en hauteur avec du matériel adapté. Ramassage et évacuation des déchets de taille compris à chaque chantier.`}
          pourquoi={`Une coupe nette et régulière, respectueuse des périodes de nidification et de la physiologie de vos arbustes. Matériel professionnel entretenu, taille précise sur toute la longueur de la haie. Entreprise assurée en responsabilité civile professionnelle, devis clair et gratuit, sans engagement. Contrats d'entretien annuels disponibles pour une haie impeccable toute l'année.`}
          image="/pknous.jpg"
          imageAlt="Haie taillée avec précision après intervention"
        />
        <Temoignage />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
