import type { Metadata } from "next";
import { VilleHero, ServiceContent, BreadcrumbBar, PricingTable, RelatedLinks, Temoignage, Contact, Footer } from "../components";
import { data } from "../data";

const service = "Dessouchage";
const canonical = "/dessouchage";

export const metadata: Metadata = {
  title: `Dessouchage - Enlever une souche | ${data.entreprise}`,
  description: `${data.entreprise} enlève vos souches d'arbre par rognage mécanique dans l'Oise et le Val-d'Oise. Terrain remis en état, devis gratuit sous 48h.`,
  alternates: {
    canonical,
  },
  openGraph: {
    title: `Dessouchage | ${data.entreprise}`,
    description: `Enlèvement et rognage de souche d'arbre dans l'Oise et le Val-d'Oise. Devis gratuit sous 48h.`,
    url: `${data.url}${canonical}`,
    siteName: data.entreprise,
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/pknous.jpg",
        width: 1200,
        height: 630,
        alt: `Dessouchage par ${data.entreprise}`,
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
        { "@type": "ListItem", position: 1, name: "Accueil", item: data.url },
        { "@type": "ListItem", position: 2, name: service, item: `${data.url}${canonical}` },
      ],
    },
    {
      "@type": "Service",
      name: "Dessouchage et rognage de souche",
      provider: { "@id": `${data.url}/#business` },
      areaServed: { "@type": "Place", name: "Oise et Val-d'Oise" },
      url: `${data.url}${canonical}`,
    },
  ],
};

export default function Dessouchage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <VilleHero
        titre="Dessouchage dans l'Oise et le Val-d'Oise"
        description={`${data.entreprise} enlève vos souches d'arbre par rognage mécanique pour une remise en état complète de votre terrain. Devis gratuit sous 48h.`}
        image="/pknous.jpg"
        imageAlt="Rognage de souche d'arbre par un professionnel"
      />
      <main>
        <BreadcrumbBar items={[{ label: "Accueil", href: "/" }, { label: service }]} />
        <ServiceContent
          titre="Enlever une souche d'arbre"
          intro={`Après un abattage, la souche reste souvent en terre et peut gêner une tonte, une plantation ou un aménagement de terrain. ${data.entreprise} intervient dans l'Oise et le Val-d'Oise pour dessoucher proprement, que la souche soit récente ou déjà ancienne.`}
          servicesTitre="Notre méthode de dessouchage"
          services={`Nous utilisons une rogneuse de souche mécanique qui broie la souche et ses racines superficielles jusqu'à quelques centimètres sous le niveau du sol, sans avoir besoin de dessoucher à la pelle mécanique ni d'abîmer le terrain environnant. Les copeaux de bois produits peuvent être évacués ou laissés sur place pour combler le trou, selon votre préférence. Cette méthode convient aussi bien à une souche isolée qu'à plusieurs souches sur un même terrain.`}
          pourquoi={`Un terrain propre et replantable ou tondable juste après l'intervention. Un devis gratuit établi après avoir vu la souche (diamètre et accessibilité influencent le tarif). Entreprise assurée en responsabilité civile professionnelle. Nous proposons systématiquement le dessouchage en complément d'un abattage, ou seul si la souche a été laissée par un précédent chantier.`}
          image="/service.jpg"
          imageAlt="Terrain remis en état après dessouchage"
        />
        <AnimatedPricing />
        <RelatedLinks
          titre="Vous avez un arbre à faire couper avant de dessoucher ?"
          liens={[
            { href: "/abattage-arbre", label: "Abattage d'arbre", description: "Faire couper l'arbre avant de retirer la souche." },
            { href: "/prix-abattage-arbre", label: "Prix abattage d'arbre", description: "Nos fourchettes de prix selon la hauteur de l'arbre." },
            { href: "/arbre-dangereux", label: "Arbre dangereux : les signes", description: "Un arbre penché ou instable près de chez vous ?" },
          ]}
        />
        <Temoignage />
        <Contact titre={`Demandez votre devis gratuit — ${service}`} />
      </main>
      <Footer />
    </>
  );
}

function AnimatedPricing() {
  return (
    <div className="flex flex-col gap-10 py-16 px-6 lg:px-24 bg-white">
      <h2 className="text-accent font-bold text-[32px] lg:text-[48px] text-center max-w-4xl mx-auto">
        Prix indicatif d&apos;un dessouchage
      </h2>
      <PricingTable
        titre="Rognage de souche par diamètre"
        rows={[
          { label: "Souche de moins de 30 cm de diamètre", prix: "75 € – 150 €" },
          { label: "Souche de 30 à 50 cm de diamètre", prix: "150 € – 250 €" },
          { label: "Souche de plus de 50 cm de diamètre", prix: "250 € – 400 €" },
        ]}
        note="Fourchettes indicatives nationales. Le tarif exact dépend du diamètre réel, de l'accessibilité du terrain et du nombre de souches. Seul un devis gratuit sur place permet de connaître le prix précis."
      />
    </div>
  );
}
