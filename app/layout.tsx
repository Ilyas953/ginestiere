import type { Metadata } from "next";
import { Geist, Geist_Mono, Inknut_Antiqua } from "next/font/google";
import "./globals.css";
import { data } from "./data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inknutAntiqua = Inknut_Antiqua({
  style: "normal",
  weight: "400",
  subsets: ["latin"],
  variable: "--font-inknut-antiqua",
});

export const metadata: Metadata = {
  metadataBase: new URL(data.url),
  title: `Élagueur Chantilly - Élagage, abattage, taille de haie | ${data.entreprise}`,
  description:
    `${data.name}, élagueur à Chantilly dans l'Oise. Spécialiste en élagage, abattage d'arbres et taille de haie. Devis gratuit sous 48h. Intervention rapide dans l'Oise et le Val-d'Oise.`,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `Élagueur Chantilly - Élagage, abattage, taille de haie | ${data.entreprise}`,
    description:
      "Élagage, abattage, taille de haie et entretien de jardin dans l'Oise. Devis gratuit sous 48h.",
    url: data.url,
    siteName: data.entreprise,
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/fongui.jpg",
        width: 1200,
        height: 630,
        alt: `Élagueur ${data.entreprise} en action à Chantilly dans l'Oise`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Élagueur à Chantilly — ${data.entreprise}`,
    description:
      "Élagage, abattage, taille de haie et entretien de jardin à Chantilly et dans l'Oise. Devis gratuit.",
    images: ["/fongui.jpg"],
  },
  other: {
    "theme-color": "#2CC817",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${data.url}/#business`,
      name: data.entreprise,
      description:
        "Élagage, abattage d'arbres et taille de haie à Chantilly et dans l'Oise.",
      url: data.url,
      telephone: data.numero,
      email: data.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "17 allée des Eguerets",
        addressLocality: "Jouy-le-Moutier",
        postalCode: "95280",
        addressRegion: "Val-d'Oise",
        addressCountry: "FR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 49.016,
        longitude: 2.046,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "07:00",
          closes: "19:00",
        },
      ],
      priceRange: "€€",
      image: `${data.url}/fongui.jpg`,
        areaServed: [
        { "@type": "City", name: "Chantilly" },
        { "@type": "AdministrativeArea", name: "Oise" },
        { "@type": "AdministrativeArea", name: "Île-de-France" },
        { "@type": "AdministrativeArea", name: "Val-d'Oise" }
        
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "3",
        bestRating: "5",
        worstRating: "1",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services d'élagage et d'arboriculture",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Élagage d'arbres",
              description:
                "Élagage professionnel de tous types d'arbres à Chantilly et dans l'Oise.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Abattage d'arbres",
              description:
                "Abattage sécurisé d'arbres, y compris abattages extrêmes en milieu difficile.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Taille de haie",
                description:
                "Taille et entretien de haies pour particuliers et professionnels dans l'Oise.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Pose de clôture",
                description:
                "Pose et installation de clôtures à Chantilly et dans l'Oise.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Remise en état de jardin",
              description:
                "Remise en état complète de jardins, entretien d'espaces verts.",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Quel est le tarif d'un élagueur à Chantilly ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: `${data.entreprise} propose des devis gratuits et sans engagement pour tous les travaux d'élagage à Chantilly et dans l'Oise. Contactez-nous au ${data.numero} pour obtenir votre devis sous 48h.`,
          },
        },
        {
          "@type": "Question",
          name: "Intervenez-vous en urgence pour l'abattage d'arbres dangereux ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: `Oui, ${data.entreprise} intervient pour l'abattage d'arbres dangereux dans tout l'Oise. Nous pouvons intervenir rapidement pour sécuriser votre propriété.`,
          },
        },
        {
          "@type": "Question",
          name: "Quelles zones géographiques couvrez-vous ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: `${data.entreprise} intervient à Chantilly, Gouvieux et Chambly, ainsi que dans l'ensemble de l'Oise et du Val-d'Oise.`,
          },
        },
        {
          "@type": "Question",
          name: `${data.entreprise} propose-t-il des devis gratuits ?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `Oui, ${data.entreprise} propose des devis gratuits et sans engagement sous 48h pour tous vos travaux d'élagage, d'abattage et de taille de haie à Chantilly et dans l'Oise.`,
          },
        },
        {
          "@type": "Question",
          name: "Êtes-vous assuré pour l'élagage en hauteur ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: `Oui, ${data.entreprise} dispose d'une assurance responsabilité civile professionnelle et d'une garantie décennale, et intervient dans le respect des normes de sécurité en vigueur, y compris pour les interventions en hauteur.`,
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} ${inknutAntiqua.variable} h-full antialiased`}
    >
      <head><meta name="google-site-verification" content="sbY6yk1Vsof5Nn2aCsnR_9lbm5ZsLJ1_tetvLWhCRPM" /></head>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
