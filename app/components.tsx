"use client"
import Image from "next/image";
import { Icon } from "@iconify/react";
import { ReactNode, useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { data } from "./data";
import { ContactForm } from "./Formdevis";
import AnimatedSection from "./AnimatedSection";


type boutonprops = {
    className?: string,
    children?: ReactNode
}




export function ContactCard({className, children}: boutonprops) {
    return (
        <>

        <div className={` flex text-[24px] px-5 py-[16px] bg-white/20 border border-white/80 rounded-[8px] ${className}`}>
            {children}
            </div>

        </>
    )
}


export function Bouton({className, children}: boutonprops) {
    return (
        <>

        <div className={` flex flex-row gap-[10px] items-center text-[24px] px-5 py-[16px] bg-accent rounded-xl shadow-md shadow-accent/20 transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5 hover:brightness-110 ${className}`}>
            {children}
            </div>

        </>
    )
}

export function SecondBouton({className, children}: boutonprops) {
    return (
        <>

        <div className={` flex flex-row gap-[10px]  text-[16px] px-5 py-[12px]  border-[1px] border-accent rounded-xl justify-center items-center transition-all duration-300 hover:bg-accent/10 hover:-translate-y-0.5 ${className}`}>
            {children}
            </div>

        </>
    )
}

export function Section({className, children}: boutonprops) {

    return (
        <>
        <section className={`px-8 lg:px-24 py-8 flex flex-col gap-6 ${className}`}>
            {children}

        </section>

        </>
    )

}



















export function Hero2() {


    

    return (
        <>
        <header id="accueil" className="relative h-auto grid grid-cols-12 w-full px-[32px]">

      <Image
        src="/fongui.jpg"
        alt="arbre a abattre et entretenir"
        fill
        priority
        quality={80}
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />
            <Header />
            <motion.div
    initial={{ opacity: 1, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}

    className=" min-h-screen lg:text-start col-span-full lg:col-span-7 items-center lg:items-start flex flex-col gap-[48px] py-[124px] lg:py-[96px] lg:px-[32px] z-20 lg:col-start-1">
                <div className="flex flex-col gap-[16px] lg:max-w-7xl pt-[128px]">
            <h1 className=" text-white  text-[32px] lg:text-[48px] font-extrabold text-center lg:text-start justify-center">{data.titreh1}</h1>
            <p className="text-[24px] text-[#E6E6E6] font-semibold text-center lg:text-start">{data.soustitrehero}</p>
            </div>
            <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start gap-[24px]">
                <Link href={`tel:${data.numero}`} className="h-full"><Bouton className="h-full">
                        <Icon icon='material-symbols:call' width={24} height={24} className="text-white"/>
                <p className=" text-[16px] font-semibold text-white ">Appeler Maintenant</p>
                </Bouton>
                </Link>
                <Link href="#contact" className="h-full">
                <SecondBouton className="h-full text-white border-white/70 hover:bg-white/10"><Icon icon='material-symbols:mail' width={24} height={24} className="text-white"/>
                <p className=" text-[16px] font-semibold text-white ">Obtenir un devis gratuit</p></SecondBouton>
                </Link>
            </div>
            <div className="flex px-8 py-6 bg-white/20 text-white font-semibold text-[16px] rounded-xl drop-shadow-white/20 backdrop-blur-2xl drop-shadow-2xl ">
                <p>{data.deschero}</p>
            </div>
            <TrustBadges />
            </motion.div>

        </header>

        </>
    )
}

type villeHeroProps = {
    titre: string,
    description: string,
    image: string,
    imageAlt: string,
}

export function VilleHero({titre, description, image, imageAlt}: villeHeroProps) {

    return (
        <>
        <header id="accueil" className="relative h-auto grid grid-cols-12 w-full px-[32px]">

      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        quality={80}
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />
            <Header />
            <motion.div
    initial={{ opacity: 1, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}

    className=" min-h-[70vh] lg:text-start col-span-full lg:col-span-7 items-center lg:items-start flex flex-col gap-[48px] py-[124px] lg:py-[96px] lg:px-[32px] z-20 lg:col-start-1">
                <div className="flex flex-col gap-[16px] lg:max-w-7xl">
            <h1 className=" text-white  text-[32px] lg:text-[48px] font-extrabold text-center lg:text-start justify-center">{titre}</h1>
            <p className="text-[24px] text-[#E6E6E6] font-semibold text-center lg:text-start">{description}</p>
            </div>
            <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start gap-[24px]">
                <Link href={`tel:${data.numero}`} className="h-full"><Bouton className="h-full">
                        <Icon icon='material-symbols:call' width={24} height={24} className="text-white"/>
                <p className=" text-[16px] font-semibold text-white ">Appeler Maintenant</p>
                </Bouton>
                </Link>
                <Link href="/#contact" className="h-full">
                <SecondBouton className="h-full text-white border-white/70 hover:bg-white/10"><Icon icon='material-symbols:mail' width={24} height={24} className="text-white"/>
                <p className=" text-[16px] font-semibold text-white ">Obtenir un devis gratuit</p></SecondBouton>
                </Link>
            </div>
            <TrustBadges />
            </motion.div>

        </header>

        </>
    )
}

export function VilleContent({ville, intro, services, pourquoi, image, imageAlt}: {
    ville: string,
    intro: string,
    services: string,
    pourquoi: string,
    image: string,
    imageAlt: string,
}) {

    return (
        <>
            <AnimatedSection id="service" className="flex flex-col py-16 px-6 lg:px-24 gap-16 bg-gradient-to-b from-[#f5f5f5] via-white to-accent">

            <div className="flex flex-col gap-6 text-center max-w-4xl mx-auto">
                <h2 className="text-accent font-bold text-[32px] lg:text-[48px]">Élagueur à {ville}</h2>
                <p className="text-[16px] text-text">{intro}</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-center max-w-5xl mx-auto w-full">
                <Image src={image} alt={imageAlt} width={320} height={337} quality={75} className="object-cover object-bottom rounded-2xl shadow-xl shrink-0" />
                <div className="flex flex-col gap-4">
                    <h3 className="text-accent font-bold text-[24px]">Nos services à {ville}</h3>
                    <p className="text-[16px] text-text">{services}</p>
                </div>
            </div>

            <div className="flex flex-col gap-4 max-w-5xl mx-auto w-full">
                <h3 className="text-accent font-bold text-[24px]">Pourquoi nous choisir</h3>
                <p className="text-[16px] text-text">{pourquoi}</p>
            </div>

            </AnimatedSection>
        </>
    )
}


export function ServiceContent({titre, intro, servicesTitre, services, pourquoi, image, imageAlt}: {
    titre: string,
    intro: string,
    servicesTitre: string,
    services: string,
    pourquoi: string,
    image: string,
    imageAlt: string,
}) {

    return (
        <>
            <AnimatedSection id="service" className="flex flex-col py-16 px-6 lg:px-24 gap-16 bg-gradient-to-b from-[#f5f5f5] via-white to-accent">

            <div className="flex flex-col gap-6 text-center max-w-4xl mx-auto">
                <h2 className="text-accent font-bold text-[32px] lg:text-[48px]">{titre}</h2>
                <p className="text-[16px] text-text">{intro}</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-center max-w-5xl mx-auto w-full">
                <Image src={image} alt={imageAlt} width={320} height={337} quality={75} className="object-cover object-bottom rounded-2xl shadow-xl shrink-0" />
                <div className="flex flex-col gap-4">
                    <h3 className="text-accent font-bold text-[24px]">{servicesTitre}</h3>
                    <p className="text-[16px] text-text">{services}</p>
                </div>
            </div>

            <div className="flex flex-col gap-4 max-w-5xl mx-auto w-full">
                <h3 className="text-accent font-bold text-[24px]">Pourquoi nous choisir</h3>
                <p className="text-[16px] text-text">{pourquoi}</p>
            </div>

            </AnimatedSection>
        </>
    )
}


export function Faq({titre, questions}: {
    titre: string,
    questions: { question: string, reponse: string }[],
}) {

    return (
        <>
            <AnimatedSection id="faq" className="flex flex-col py-16 px-6 lg:px-24 gap-10 bg-white">

            <h2 className="text-accent font-bold text-[32px] lg:text-[48px] text-center max-w-4xl mx-auto">{titre}</h2>

            <div className="flex flex-col gap-6 max-w-3xl mx-auto w-full">
                {questions.map((q, index) => (
                    <details key={index} className="group border-b border-text/10 pb-6">
                        <summary className="cursor-pointer list-none flex justify-between items-center gap-4 text-accent font-bold text-[20px]">
                            {q.question}
                            <Icon icon="material-symbols:add" width={24} height={24} className="shrink-0 group-open:hidden" />
                            <Icon icon="material-symbols:remove" width={24} height={24} className="shrink-0 hidden group-open:block" />
                        </summary>
                        <p className="text-[16px] text-text pt-4">{q.reponse}</p>
                    </details>
                ))}
            </div>

            </AnimatedSection>
        </>
    )
}


export function TrustBadges({className}: {className?: string}) {

    const badges = [
        { icon: "material-symbols:verified-user", label: "Assurance RC Pro" },
        { icon: "material-symbols:shield-lock", label: "Garantie décennale" },
        { icon: "material-symbols:request-quote", label: "Devis gratuit 48h" },
        { icon: "material-symbols:bolt", label: "Intervention rapide" },
    ];

    return (
        <div className={`flex flex-wrap gap-3 ${className}`}>
            {badges.map((b, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/15 border border-white/25 backdrop-blur-sm rounded-full px-4 py-2 text-white text-[13px] lg:text-[14px] font-semibold">
                    <Icon icon={b.icon} width={18} height={18} className="shrink-0" />
                    {b.label}
                </div>
            ))}
        </div>
    )
}


export function Breadcrumb({items, dark = false}: {
    items: { label: string, href?: string }[],
    dark?: boolean,
}) {

    const muted = dark ? "text-white/70" : "text-text/60";
    const current = dark ? "text-white font-semibold" : "text-accent font-semibold";
    const link = dark ? "hover:text-white" : "hover:text-accent";

    return (
        <nav aria-label="fil d'ariane" className={`flex flex-wrap items-center gap-1.5 text-[13px] ${muted}`}>
            {items.map((item, i) => (
                <span key={i} className="flex items-center gap-1.5">
                    {i > 0 && <Icon icon="material-symbols:chevron-right" width={14} height={14} className="shrink-0" />}
                    {item.href ? (
                        <Link href={item.href} className={`${link} transition-colors`}>{item.label}</Link>
                    ) : (
                        <span className={current}>{item.label}</span>
                    )}
                </span>
            ))}
        </nav>
    )
}


export function BreadcrumbBar({items}: { items: { label: string, href?: string }[] }) {
    return (
        <div className="bg-fond2 px-6 lg:px-24 py-4">
            <Breadcrumb items={items} />
        </div>
    )
}


export function PricingTable({titre, rows, note}: {
    titre?: string,
    rows: { label: string, prix: string }[],
    note?: string,
}) {
    return (
        <div className="flex flex-col gap-4 max-w-3xl mx-auto w-full">
            {titre && <h3 className="text-accent font-bold text-[24px]">{titre}</h3>}
            <div className="overflow-hidden rounded-2xl border border-accent/15 shadow-sm">
                <table className="w-full text-left border-collapse">
                    <tbody>
                        {rows.map((r, i) => (
                            <tr key={i} className={`${i % 2 === 0 ? "bg-fond2" : "bg-white"}`}>
                                <td className="px-5 py-4 text-[15px] lg:text-[16px] text-text font-semibold">{r.label}</td>
                                <td className="px-5 py-4 text-[15px] lg:text-[16px] text-accent font-extrabold text-right whitespace-nowrap">{r.prix}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {note && <p className="text-[14px] text-text/70 italic">{note}</p>}
        </div>
    )
}


export function RelatedLinks({titre, liens}: {
    titre: string,
    liens: { href: string, label: string, description: string }[],
}) {
    return (
        <AnimatedSection className="flex flex-col py-16 px-6 lg:px-24 gap-10 bg-fond2">

            <h2 className="text-accent font-bold text-[32px] lg:text-[48px] text-center max-w-4xl mx-auto">{titre}</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto w-full">
                {liens.map((l, i) => (
                    <Link key={i} href={l.href} className="group flex flex-col gap-2 bg-white rounded-2xl p-6 border border-accent/10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <p className="text-accent font-bold text-[18px] flex items-center gap-2">
                            {l.label}
                            <Icon icon="material-symbols:arrow-right-alt" width={20} height={20} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </p>
                        <p className="text-text text-[14px]">{l.description}</p>
                    </Link>
                ))}
            </div>

        </AnimatedSection>
    )
}


export function ArticleHero({titre, description, breadcrumb}: {
    titre: string,
    description: string,
    breadcrumb: { label: string, href?: string }[],
}) {
    return (
        <header className="relative w-full px-6 lg:px-24 pt-36 lg:pt-44 pb-16 lg:pb-20 bg-gradient-to-br from-accent to-[#1a3324] overflow-hidden">
            <Header />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            <div className="relative z-10 flex flex-col gap-6 max-w-4xl">
                <Breadcrumb items={breadcrumb} dark />
                <h1 className="text-white text-[32px] lg:text-[48px] font-extrabold leading-tight">{titre}</h1>
                <p className="text-[#E6E6E6] text-[18px] lg:text-[20px] font-medium max-w-3xl">{description}</p>
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <Link href={`tel:${data.numero}`}>
                        <Bouton>
                            <Icon icon='material-symbols:call' width={24} height={24} className="text-white"/>
                            <p className="text-[16px] font-semibold text-white">Appeler maintenant</p>
                        </Bouton>
                    </Link>
                    <Link href="/#contact">
                        <SecondBouton className="text-white border-white/70 hover:bg-white/10">
                            <Icon icon='material-symbols:mail' width={24} height={24} className="text-white"/>
                            <p className="text-[16px] font-semibold text-white">Devis gratuit</p>
                        </SecondBouton>
                    </Link>
                </div>
                <TrustBadges className="pt-2" />
            </div>
        </header>
    )
}


export function Header() {

    const [burger, setBurger] = useState<boolean>(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10)
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
     <>
     <nav>
     <div className={`col-span-full w-full fixed px-[32px] py-[24px] top-0 left-0 z-50 flex flex-row items-center justify-between text-white transition-all duration-300 ${scrolled ? "backdrop-blur-md" : ""}`}>
        <p className={`text-2xl text-[#2CC817] font-extrabold  font-[family-name:var(--font-inknut-antiqua)]`}>{data.entreprise}</p>
            <div className="hidden lg:flex flex-row gap-8 text-[16px] ">
                <Link href="/#accueil"><div className="flex flex-col gap-1 group transition-all duration-500 ease-in-out">Accueil <span className=" transition-all duration-300 ease-in-out border-accent border-1 w-0 opacity-0 group-hover:w-full group-hover:opacity-100"></span> </div></Link>
                <Link href="/#service"><div className="flex flex-col gap-1 group transition-all duration-500 ease-in-out">À propos <span className=" transition-all duration-300 ease-in-out border-accent border-1 w-0 opacity-0 group-hover:w-full group-hover:opacity-100"></span> </div></Link>
                <Link href="/#contact"><div className="flex flex-col gap-1 group transition-all duration-500 ease-in-out">Contact <span className=" transition-all duration-300 ease-in-out border-accent border-1 w-0 opacity-0 group-hover:w-full group-hover:opacity-100"></span> </div></Link>
            </div>


            <div className="flex flex-row gap-[16px] justify-center items-center">
                <a href={`tel:${data.numero}`} className="hidden lg:block">
                <SecondBouton className="text-white border-accent">
                <Icon icon='material-symbols:call' width={24} height={24}/>
                <p className="font-extrabold text-[16px]">{data.numero}</p>
                </SecondBouton>
                </a>
                <Link href="/#contact">
                <Bouton className="items-center opacity-0 lg:opacity-100 h-full">
                    <Icon icon='material-symbols:mail' width={24} height={24} className="text-white"/>
                <p className=" text-[16px] font-semibold">Devis gratuit</p>
                </Bouton>
                </Link>
            </div>

        <button onClick={() => setBurger(true)} className="lg:hidden bg-accent rounded-xl w-[44px] h-[44px] flex items-center justify-center shrink-0 shadow-md shadow-accent/30"><Icon icon="qlementine-icons:menu-burger-16" className={`${!burger ? 'opacity-100' : 'opacity-0'} w-[24px] h-[24px] text-white`} /></button>

     </div>

     <a href={`tel:${data.numero}`} className="lg:hidden fixed bottom-0 left-0 w-full z-[90] flex items-center justify-center gap-2 bg-accent text-white py-[14px] border-t border-white/20">
         <Icon icon='material-symbols:call' width={20} height={20}/>
         <p className="font-extrabold text-[14px]">{data.numero}</p>
     </a>

     <AnimatePresence>
     {burger && <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className=" fixed top-0 left-0  inset h-screen z-30 w-screen flex flex-col justify-center items-center px-8 py-8 bg-black/90 backdrop-blur-sm text-white">
                <div className=" self-end justify-self-start flex flex-row items-end "><button onClick={() => setBurger(false)}><Icon icon="akar-icons:cross" className="relative   w-[44px] h-11 text-second " /></button></div>
                 <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className=" row-start-1 mt-20 ml-10 col-span-full text-center items-center flex flex-col gap-8 text-[24px] font-semibold ">
                <Link href="/#accueil"><div className="flex flex-col gap-1 group transition-all duration-500 ease-in-out" onClick={()=> setBurger(false)}>Accueil <span className=" transition-all duration-300 ease-in-out border-violet-500 border-1 w-0 opacity-0 group-hover:w-full group-hover:opacity-100"></span> </div></Link>
                <Link href="/#service"><div className="flex flex-col gap-1 group transition-all duration-500 ease-in-out" onClick={()=> setBurger(false)}>À propos <span className=" transition-all duration-300 ease-in-out border-violet-500 border-1 w-0 opacity-0 group-hover:w-full group-hover:opacity-100"></span> </div></Link>
                <Link href="/#contact"><div className="flex flex-col gap-1 group transition-all duration-500 ease-in-out" onClick={()=> setBurger(false)}>Contact <span className=" transition-all duration-300 ease-in-out border-violet-500 border-1 w-0 opacity-0 group-hover:w-full group-hover:opacity-100"></span> </div></Link>

            </motion.div>

                </motion.div>

        }
        </AnimatePresence>
        </nav>
     </>

    )
}


export function About() {

    return (
        <>
            <AnimatedSection id="service" className="flex flex-col py-16 px-6 lg:px-24 gap-16 bg-gradient-to-b from-[#f5f5f5] via-white to-accent">

            <div className="flex flex-col gap-6 text-center max-w-4xl mx-auto">
                <h2 className="text-accent font-bold text-[32px] lg:text-[48px]">{data.titreh2}</h2>
                <p className="text-[16px] text-text">{data.soustitreh2}</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-center max-w-5xl mx-auto w-full">
                <Image src={data.photo1} alt={data.altphoto1} width={320} height={337} quality={75} className="object-cover object-bottom rounded-2xl shadow-xl shrink-0" />
                <div className="flex flex-col gap-4">
                    <h3 className="text-accent font-bold text-[24px]">Nos Services</h3>
                    <p className="text-[16px] text-text">{data.textservice}</p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-center max-w-5xl mx-auto w-full">
                <div className="flex flex-col gap-4">
                    <h3 className="text-accent font-bold text-[24px]">Pourquoi nous choisir</h3>
                    <p className="text-[16px] text-text">{data.pourquoichoisir}</p>
                </div>
                <Image src={data.photo2} alt={data.altphoto2} width={320} height={337} quality={75} className="object-cover object-bottom rounded-2xl shadow-xl shrink-0" />
            </div>

            </AnimatedSection>
        </>
    )
}













export function Temoignage() {

    return (
        <>
        <div id="temoignages">
            <Section className="bg-accent flex flex-col gap-[48px]">

            <div className=" mx-auto py-[15px] px-[20px] w-fit h-fit bg-white text-accent flex flex-col p-5 rounded-4xl">
                    <p className="font-extrabold text-xl rounded-4xl "> Nos Témoignages </p>
                    </div>
            <h2 className="text-[48px] text-white font-extrabold text-center  ">{data.avish2}</h2>
            <p className="font-semibold text-2xl text-center text-white">La satisfaction de nos clients est notre plus belle récompense, découvrez leurs avis sur nos prestations</p>
            <div className="flex flex-col gap-[24px] items-center w-full lg:grid lg:grid-cols-12  lg:col-span-full">
                {data.avis.map((a, index) => { return (
                <div  key={index} className="w-full p-8 lg:h-full lg:col-span-4 lg:row-span-1  bg-white text-[24px] font-bold border border-accent/10 flex flex-col rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 justify-start "><div className="flex flex-col gap-8 items-start">
                    <div className=" h-fit text-yellow-300 flex flex-row ">
                     <Icon icon="material-symbols:star" width="24" height="24" />
                     <Icon icon="material-symbols:star" width="24" height="24" />
                     <Icon icon="material-symbols:star" width="24" height="24" />
                     <Icon icon="material-symbols:star" width="24" height="24" />
                     <Icon icon="material-symbols:star" width="24" height="24" />
                    </div>
                    <div className="flex flex-col gap-[10px] ">
                        <p className=" text-[20px]">
                            {`"${a.commentaire}"`}
                        </p>
                        <p className="font-semibold text-black text-[20px]">{a.nom}</p>
                    </div>
                 </div></div>
                 ) })}
            </div>
            </Section>
         </div>


        </>
    )
}


export function Contact({titre}: {titre?: string} = {}) {
    return (
        <>
        <div id="contact">
        <Section  className="relative grid grid-cols-12  w-full h-auto  p-[32px] z-30 bg-accent text-white  ">
        
      <Image
        src="/fongui.jpg"
        alt="arbre en mauvais état a abattre"
        fill
        loading="lazy"
        quality={75}
        sizes="100vw"
        className="object-cover"
      />
    <div className="absolute inset-0 bg-black/60" />



            <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="row-start-1 lg:row-start-6 col-span-full w-full justify-center items-center flex flex-col gap-[48px]  z-80">
                <div className="flex flex-col gap-[16px] text-center">
                    <h2 className="font-extrabold text-[32px]">{titre ?? "Demandez votre devis gratuit — Élagueur à Chantilly"}</h2>
                    <p className="font-semibold text-[24px]">Contactez-nous dès aujourd'hui pour un devis gratuit et sans engagement. Notre équipe est à votre disposition pour étudier votre projet et vous proposer les meilleures solutions adaptées à vos besoins.</p>
            </div>
            <div className="flex flex-col gap-[24px] lg:flex-row ">
                <a href={`tel:${data.numero}`}>
                <ContactCard className="justify-center flex-col gap-6 items-center lg:w-[394px]">
                        <Icon icon='material-symbols:call' width={24} height={24} className="text-white"/>
                <p className=" font-semibold  ">Téléphone</p>
                <p>{data.numero} </p>
                </ContactCard>
                </a>

                <a href={`mailto:${data.email}`} className="">
                    <ContactCard className="justify-center items-center flex-col gap-6 lg:w-[394px]">
                    <Icon icon='material-symbols:mail' width={24} height={24} className="text-white"/>
                    <p>Email</p>
                     <p className="text-center">{data.email}</p>
                     </ContactCard>
                </a>


            </div>

            <div className="flex flex-col w-full gap-[16px] justify-center items-center">
                <ContactForm  />
            </div>
            </motion.div>

        </Section>
        </div>
        </>
    )
}














function FooterLink({href, children}: {href: string, children: ReactNode}) {
    return (
        <Link href={href} className="text-white/85 hover:text-second transition-colors duration-200 w-fit">
            {children}
        </Link>
    )
}

export function Footer() {

    return (
        <footer className="bg-accent w-full text-white flex flex-col items-center gap-14 py-16 px-8 lg:px-24">

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 w-full max-w-6xl text-center sm:text-left">

                <div className="flex flex-col gap-4">
                    <p className="text-white text-[22px] font-bold">Navigation</p>
                    <div className="flex flex-col gap-2.5 text-[16px]">
                        <FooterLink href="/#accueil">Accueil</FooterLink>
                        <FooterLink href="/#service">À propos</FooterLink>
                        <FooterLink href="/#contact">Contact</FooterLink>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <p className="text-white text-[22px] font-bold">Nos services</p>
                    <div className="flex flex-col gap-2.5 text-[16px]">
                        <FooterLink href="/abattage-arbre">Abattage d&apos;arbre</FooterLink>
                        <FooterLink href="/taille-de-haie">Taille de haie</FooterLink>
                        <FooterLink href="/dessouchage">Dessouchage</FooterLink>
                        <FooterLink href="/debroussaillage">Débroussaillage</FooterLink>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <p className="text-white text-[22px] font-bold">Guides &amp; tarifs</p>
                    <div className="flex flex-col gap-2.5 text-[16px]">
                        <FooterLink href="/tarif-taille-de-haie">Tarif taille de haie</FooterLink>
                        <FooterLink href="/prix-abattage-arbre">Prix abattage d&apos;arbre</FooterLink>
                        <FooterLink href="/prix-elagage-arbre">Prix élagage d&apos;arbre</FooterLink>
                        <FooterLink href="/arbre-dangereux">Arbre dangereux : que faire ?</FooterLink>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <p className="text-white text-[22px] font-bold">Zones d&apos;intervention</p>
                    <div className="flex flex-col gap-2.5 text-[16px]">
                        <FooterLink href="/elagueur-viarmes">Élagueur à Viarmes</FooterLink>
                        <FooterLink href="/elagueur-gouvieux">Élagueur à Gouvieux</FooterLink>
                        <FooterLink href="/elagueur-domont">Élagueur à Domont</FooterLink>
                    </div>
                </div>

                <div className="flex flex-col gap-4 col-span-2 sm:col-span-1">
                    <p className="text-white text-[22px] font-bold">Contact</p>
                    <div className="flex flex-col gap-2.5 text-[16px]">
                        <a href={`tel:${data.numero}`} className="flex gap-2 items-center justify-center sm:justify-start text-white/85 hover:text-second transition-colors duration-200">
                            <Icon icon="material-symbols:call" width="20" height="20" className="shrink-0" />
                            <span>{data.numero}</span>
                        </a>
                        <a href={`mailto:${data.email}`} className="flex gap-2 items-center justify-center sm:justify-start text-white/85 hover:text-second transition-colors duration-200">
                            <Icon icon="material-symbols:mail" width="20" height="20" className="shrink-0" />
                            <span className="break-all">{data.email}</span>
                        </a>
                    </div>
                </div>

            </div>

            <div className="w-full max-w-6xl h-px bg-white/15" />

            <div className="flex flex-col items-center gap-4 w-full max-w-6xl">
                <div className="text-center flex flex-col lg:flex-row gap-2 lg:gap-6 text-[14px] text-white/75">
                    <span>{`Copyright © ${data.entreprise}. Tous droits réservés.`}</span>
                    <Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link>
                    <Link href="/conditions-generales-services" className="hover:text-white transition-colors">Conditions générales de services</Link>
                </div>

                <p className="text-[14px] text-white/60">Créé et propulsé par l&apos;agence <a className="font-bold text-second hover:text-white transition-colors" href="https://webprestige.fr" target="_blank" rel="noopener noreferrer">WebPrestige</a></p>
            </div>
        </footer>
    )
}



