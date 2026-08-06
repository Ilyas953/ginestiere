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
  title: "Élagueur Chantilly - Élagage, abattage, taille de haie | Ginestiere",
  description:
    "Pierre Rudy, élagueur certifié à Chantilly dans l'Oise. Spécialiste en élagage, abattage d'arbres extrême et taille de haie. Devis gratuit sous 24h. Intervention rapide en Île-de-France.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Élagueur Chantilly - Élagage, abattage, taille de haie | Ginestiere",
    description:
      "Élagueur certifié avec 20 ans d'expérience. Élagage, abattage, taille de haie dans l'Oise. Devis gratuit.",
    url: data.url,
    siteName: "Elagage Pierre",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/fongui.jpeg",
        width: 1200,
        height: 630,
        alt: "Élagueur Pierre Rudy en action à Chantilly dans l'Oise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Élagueur à Chantilly — Pierre Elagage",
    description:
      "Élagueur certifié avec 20 ans d'expérience. Élagage, abattage, taille de haie à Chantilly et dans l'Oise. Devis gratuit.",
    images: ["/fongui.jpeg"],
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
        "Élagueur certifié avec 20 ans d'expérience en élagage, abattage d'arbres et taille de haie à Chantilly dans l'Oise.",
      url: data.url,
      telephone: data.numero,
      email: data.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "10 route d'Eragny",
        addressLocality: "Chantilly",
        postalCode: "95480",
        addressRegion: "Oise",
        addressCountry: "FR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 49.0283,
        longitude: 2.0852,
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
      image: `${data.url}/fongui.jpeg`,
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
          name: "Quel est le tarif d'un élagueur à Pierrelaye ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pierre Elagage propose des devis gratuits et sans engagement pour tous les travaux d'élagage à Chantilly et dans l'Oise. Contactez-nous au 06 06 77 65 87 pour obtenir votre devis sous 24h.",
          },
        },
        {
          "@type": "Question",
          name: "Intervenez-vous en urgence pour l'abattage d'arbres dangereux ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, Pierre Rudy intervient en urgence pour l'abattage d'arbres dangereux dans tout l'Oise. Spécialisé dans les abattages extrêmes, il peut intervenir rapidement pour sécuriser votre propriété.",
          },
        },
        {
          "@type": "Question",
          name: "Quelles zones géographiques couvrez-vous ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pierre Elagage intervient à Chantilly et dans tout l'Oise (95), ainsi que dans les départements voisins en Île-de-France, dans l'Oise et dans les Yvelines.",
          },
        },
        {
          "@type": "Question",
          name: "Pierre Elagage propose-t-il des devis gratuits ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, Pierre Rudy propose des devis gratuits et sans engagement sous 24h pour tous vos travaux d'élagage, d'abattage et de taille de haie à Chantilly et dans l'Oise.",
          },
        },
        {
          "@type": "Question",
          name: "Êtes-vous certifié pour l'élagage en hauteur ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, Pierre Rudy est un élagueur certifié avec 20 ans d'expérience, spécialisé dans les interventions en hauteur et les abattages extrêmes en milieu difficile. Toutes les interventions sont réalisées dans le respect des normes de sécurité en vigueur.",
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
      <head><meta name="google-site-verification" content="NvbGpkvEyilbI1jZscCpYfKqX_77F5fn7TYhotS31yU" /></head>
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
