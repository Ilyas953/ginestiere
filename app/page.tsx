import { Hero2, About, RelatedLinks, Temoignage, Contact, Footer } from "./components";

export default function Home() {
  return (
    <>
      <Hero2 />
      <main>
        <About />
        <RelatedLinks
          titre="Élagueur dans l'Oise et le Val-d'Oise : nos zones et nos tarifs"
          liens={[
            { href: "/elagueur-viarmes", label: "Élagueur à Viarmes", description: "Notre siège, intervention rapide sur la commune." },
            { href: "/elagueur-gouvieux", label: "Élagueur à Gouvieux", description: "Élagage et abattage dans l'Oise, secteur de Chantilly." },
            { href: "/elagueur-domont", label: "Élagueur à Domont", description: "Élagage et entretien de jardin dans le Val-d'Oise." },
            { href: "/tarif-taille-de-haie", label: "Tarif taille de haie", description: "Nos fourchettes de prix au mètre linéaire." },
            { href: "/prix-abattage-arbre", label: "Prix abattage d'arbre", description: "Nos fourchettes de prix par hauteur d'arbre." },
            { href: "/arbre-dangereux", label: "Arbre dangereux : les signes", description: "Comment reconnaître un arbre à risque." },
          ]}
        />
        <Temoignage />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
