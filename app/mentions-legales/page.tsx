import type { Metadata } from "next";
import Link from "next/link";
import { data } from "../data";

export const metadata: Metadata = {
  title: "Mentions Légales — Pierre Elagage",
  description:
    "Mentions légales du site Pierre Elagage, élagueur certifié à Chantilly dans l'Oise.",
  alternates: {
    canonical: "/mentions-legales",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="max-w-3xl mx-auto px-6 py-16 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <Link
            href="/"
            className="text-accent font-semibold hover:underline w-fit"
          >
            ← Retour à l&apos;accueil
          </Link>
          <h1 className="text-4xl font-extrabold text-gray-900">
            Mentions Légales
          </h1>
        </div>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-gray-900">
            1. Éditeur du site
          </h2>
          <p>
            <strong>Raison sociale :</strong> {data.entreprise}
          </p>
          <p>
            <strong>Responsable de publication :</strong> {data.name}
          </p>
          <p>
            <strong>Adresse :</strong> {data.adresse}
          </p>
          <p>
            <strong>Téléphone :</strong>{" "}
            <a href={`tel:${data.numero}`} className="text-accent hover:underline">
              {data.numero}
            </a>
          </p>
          <p>
            <strong>Email :</strong>{" "}
            <a
              href={`mailto:${data.email}`}
              className="text-accent hover:underline"
            >
              {data.email}
            </a>
          </p>
          <p>
            <strong>Site web :</strong>{" "}
            <a
              href={data.url}
              className="text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.url}
            </a>
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-gray-900">
            2. Hébergeur du site
          </h2>
          <p>
            <strong>Société :</strong> Vercel Inc.
          </p>
          <p>
            <strong>Adresse :</strong> 340 Pine Street, Suite 701, San Francisco,
            CA 94104, États-Unis
          </p>
          <p>
            <strong>Site web :</strong>{" "}
            <a
              href="https://vercel.com"
              className="text-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://vercel.com
            </a>
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-gray-900">
            3. Propriété intellectuelle
          </h2>
          <p>
            L&apos;ensemble des contenus présents sur ce site (textes, images,
            graphismes, logo, etc.) est la propriété exclusive de{" "}
            {data.entreprise} ou de ses partenaires. Toute reproduction,
            distribution, modification ou utilisation de ces contenus sans
            autorisation préalable est strictement interdite.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-gray-900">
            4. Protection des données personnelles
          </h2>
          <p>
            Les informations collectées via le formulaire de contact (nom,
            adresse e-mail, téléphone, message) sont utilisées uniquement pour
            répondre à vos demandes de devis. Elles ne sont ni vendues, ni
            cédées à des tiers.
          </p>
          <p>
            Conformément au Règlement Général sur la Protection des Données
            (RGPD) et à la loi Informatique et Libertés, vous disposez d&apos;un
            droit d&apos;accès, de rectification, de suppression et
            d&apos;opposition concernant vos données. Pour exercer ces droits,
            contactez-nous à{" "}
            <a
              href={`mailto:${data.email}`}
              className="text-accent hover:underline"
            >
              {data.email}
            </a>
            .
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-gray-900">5. Cookies</h2>
          <p>
            Ce site n&apos;utilise pas de cookies de traçage ou publicitaires.
            Des cookies techniques strictement nécessaires au bon fonctionnement
            du site peuvent être déposés.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-gray-900">
            6. Limitation de responsabilité
          </h2>
          <p>
            {data.entreprise} s&apos;efforce d&apos;assurer l&apos;exactitude et
            la mise à jour des informations diffusées sur ce site. Toutefois,
            {data.entreprise} ne peut garantir l&apos;exactitude, la précision
            ou l&apos;exhaustivité des informations mises à disposition. En
            conséquence, {data.entreprise} décline toute responsabilité pour
            toute imprécision, inexactitude ou omission portant sur des
            informations disponibles sur ce site.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-gray-900">
            7. Droit applicable
          </h2>
          <p>
            Le présent site et ses mentions légales sont soumis au droit
            français. En cas de litige, les tribunaux français seront seuls
            compétents.
          </p>
        </section>

        <p className="text-sm text-gray-500">
          Dernière mise à jour : avril 2025
        </p>
      </div>
    </div>
  );
}
