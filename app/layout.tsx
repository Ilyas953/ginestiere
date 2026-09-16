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
        streetAddress: "Chemin le grand sentier",
        addressLocality: "Viarmes",
        postalCode: "95270",
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
            
          ],
          opens: "08:00",
          closes: "20:00",
        },
      ],
      priceRange: "€€",
      image: `${data.url}/fongui.jpg`,
        areaServed: [
        { "@type": "City", name: "Chantilly" },
        { "@type": "AdministrativeArea", name: "Creil" },
        { "@type": "AdministrativeArea", name: "Gouvieux" },
        { "@type": "AdministrativeArea", name: "Domont" },
        { "@type": "AdministrativeArea", name: "Viarmes" },
        
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "8",
        bestRating: "5",
        worstRating: "5",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services d'élagage",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Enlevement d'arbres",
              description:
                "Enlèvement sécurisé d'arbres abîmés, dangereux ou encombrants, avec évacuation des débris.",

            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Enlevement de souches d'arbres",
              description:
                "Enlèvement de souches d'arbres pour remettre propre un terrain et faciliter l'aménagement de votre espace.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Taille et elagage d'arbre",
                description:
                "La taille et l'élagage assurent la bonne santé de vos arbres et la sécurité de votre environnement. Nous intervenons dans le Val-d'Oise et l'Oise.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "plantation d'arbres",
                description:
                "Nous vous accompagnons dans la plantation d'arbres adaptés à votre terrain et au climat local.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "pose de cables et de renfort",
              description:
                "Pose de câbles et renforts pour sécuriser et renforcer les structures de jardin, haies et espaces verts.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "intervention rapides apres tempetes ou chutes d'arbres",
              description:
                "En cas de chute d'arbre ou de dégâts liés à la météo, nous intervenons rapidement pour sécuriser votre terrain.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "elagage d'arbres toutes hauteurs",
              description:
                "Nous intervenons sur des arbres de toutes tailles, du petit jardin aux grands espaces boisés. L'élagage est réalisé avec soin.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Abattage d'arbres dangereux ou encombrants",
              description:
                "Nous prenons en charge l'abattage d'arbres présentant un danger ou gênant vos projets d'aménagement. Une intervention sécurisée et adaptée aux contraintes locales du Val-d'Oise et de l'Oise.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Debroussaillage et nettoyage de terrain",
              description:
                "Le débroussaillage permet de limiter les risques d'incendie et nettoyer vos parcelles. Nous nettoyons vos terrains, jardins ou zones boisées.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "tailles de haies, arbustes et fruitiers",
              description:
                "Nous assurons la taille régulière de haies, arbustes et arbres fruitiers pour favoriser leur croissance et maintenir vos espaces verts et jardin en ordre et bien entretenu.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "entretien de jardins et espaces verts",
              description:
                "Nous proposons l'entretien complet de jardins et espaces verts dans le Val-d'Oise et l'Oise. Taille, tonte, nettoyage.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Soins aux arbres (diagnostic, securisation)",
              description:
                "Nous réalisons le diagnostic sanitaire de vos arbres et proposons des solutions adaptées pour les sécuriser. Ce service prévient les risques.",
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
