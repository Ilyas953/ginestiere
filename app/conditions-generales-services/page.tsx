import type { Metadata } from "next";
import Link from "next/link";
import { data } from "../data";

export const metadata: Metadata = {
  title: "Conditions Générales de Services — Pierre Elagage",
  description:
    "Conditions générales de services de Pierre Elagage, élagueur certifié à Chantilly dans l'Oise.",
  alternates: {
    canonical: "/conditions-generales-services",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function ConditionsGeneralesServices() {
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
            Conditions Générales de Services
          </h1>
        </div>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-gray-900">
            Article 1 — Objet
          </h2>
          <p>
            Les présentes conditions générales de services (CGS) ont pour objet
            de définir les droits et obligations des parties dans le cadre des
            prestations d&apos;élagage, d&apos;abattage d&apos;arbres, de taille
            de haie, de pose de clôture et d&apos;entretien d&apos;espaces verts
            réalisées par {data.entreprise}, représentée par {data.name},
            élagueur certifié, dont le siège est situé au {data.adresse}.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-gray-900">
            Article 2 — Devis et commande
          </h2>
          <p>
            Toute prestation fait l&apos;objet d&apos;un devis gratuit préalable
            établi après visite ou description des travaux par le client. Le
            devis est valable 30 jours à compter de sa date d&apos;émission.
          </p>
          <p>
            La signature du devis par le client vaut acceptation des présentes
            CGS et constitue un bon de commande ferme. Aucun travail ne sera
            commencé sans devis signé.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-gray-900">
            Article 3 — Prix et modalités de paiement
          </h2>
          <p>
            Les prix sont indiqués en euros TTC. {data.entreprise} se réserve le
            droit de modifier ses tarifs à tout moment, sous réserve que les
            tarifs applicables soient ceux en vigueur au moment de la signature
            du devis.
          </p>
          <p>
            Le paiement est exigible à la fin des travaux, sauf accord écrit
            contraire. Les modes de paiement acceptés sont : espèces, chèque et
            virement bancaire.
          </p>
          <p>
            Tout retard de paiement entraînera l&apos;application de pénalités
            de retard au taux légal en vigueur, ainsi qu&apos;une indemnité
            forfaitaire de recouvrement de 40 € conformément à la
            réglementation.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-gray-900">
            Article 4 — Exécution des prestations
          </h2>
          <p>
            Les prestations sont réalisées par {data.name} et/ou son équipe,
            selon les règles de l&apos;art et dans le respect des normes de
            sécurité en vigueur.
          </p>
          <p>
            Le client s&apos;engage à faciliter l&apos;accès aux zones de
            travail et à informer {data.entreprise} de toute contrainte
            particulière (présence de réseaux souterrains, servitudes,
            restrictions de copropriété, etc.) avant le début des travaux.
          </p>
          <p>
            Les délais d&apos;intervention sont donnés à titre indicatif et ne
            constituent pas un engagement contractuel, sauf accord écrit
            spécifique.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-gray-900">
            Article 5 — Évacuation des déchets végétaux
          </h2>
          <p>
            Sauf mention contraire explicite dans le devis, l&apos;évacuation
            des déchets végétaux (branches, troncs, broyat) est incluse dans la
            prestation. Le client est informé que le broyat peut être laissé sur
            place en paillage, à sa demande.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-gray-900">
            Article 6 — Responsabilité et assurance
          </h2>
          <p>
            {data.entreprise} est assuré en responsabilité civile professionnelle
            pour toutes les prestations réalisées. En cas de dommage causé par
            notre intervention, notre responsabilité est engagée dans la limite
            des garanties souscrites.
          </p>
          <p>
            La responsabilité de {data.entreprise} ne pourra être engagée en cas
            de dommages résultant d&apos;informations incomplètes ou inexactes
            fournies par le client (présence de réseaux, état sanitaire des
            arbres non signalé, etc.).
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-gray-900">
            Article 7 — Annulation et report
          </h2>
          <p>
            Toute annulation ou report d&apos;intervention par le client doit
            être signalé au moins 48 heures à l&apos;avance par téléphone au{" "}
            <a href={`tel:${data.numero}`} className="text-accent hover:underline">
              {data.numero}
            </a>
            . En cas d&apos;annulation tardive (moins de 48 h), des frais de
            déplacement pourront être facturés.
          </p>
          <p>
            {data.entreprise} se réserve le droit d&apos;annuler ou reporter une
            intervention en cas de conditions météorologiques dangereuses
            (vents forts, orage, gel) ou de force majeure, sans indemnité due
            au client.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-gray-900">
            Article 8 — Droit applicable et litiges
          </h2>
          <p>
            Les présentes CGS sont soumises au droit français. En cas de
            litige, les parties s&apos;engagent à rechercher une solution
            amiable avant tout recours judiciaire. À défaut, les tribunaux
            compétents du ressort du siège social de {data.entreprise} seront
            seuls compétents.
          </p>
        </section>

        <p className="text-sm text-gray-500">
          Dernière mise à jour : avril 2025
        </p>
      </div>
    </div>
  );
}
