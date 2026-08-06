"use client"
import Image from "next/image";
import { Icon } from "@iconify/react";
import { ReactNode, useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

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

        <div className={` flex flex-row gap-[10px] items-center text-[24px] px-5 py-[16px] bg-accent rounded-[8px] ${className}`}>
            {children}
            </div>

        </>
    )
}

export function SecondBouton({className, children}: boutonprops) {
    return (
        <>

        <div className={` flex flex-row gap-[10px]  text-[16px] px-5 py-[12px]  border-[1px] border-accent rounded-[8px] justify-center items-center ${className}`}>
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
        quality={100}
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
                <div className="flex flex-col gap-[16px] lg:max-w-7xl">
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
                <SecondBouton className="h-full"><Icon icon='material-symbols:mail' width={24} height={24} className="text-white"/>
                <p className=" text-[16px] font-semibold text-white ">Obtenir un devis gratuit</p></SecondBouton>
                </Link>
            </div>
            <div className="flex px-8 py-6 bg-white/20 text-white font-semibold text-[16px] rounded-xl drop-shadow-white/20 backdrop-blur-2xl drop-shadow-2xl ">
                <p>{data.deschero}</p>
            </div>
            </motion.div>

        </header>
        
        </>
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
                <Link href="#accueil"><div className="flex flex-col gap-1 group transition-all duration-500 ease-in-out">Accueil <span className=" transition-all duration-300 ease-in-out border-accent border-1 w-0 opacity-0 group-hover:w-full group-hover:opacity-100"></span> </div></Link>
                <Link href="#service"><div className="flex flex-col gap-1 group transition-all duration-500 ease-in-out">À propos <span className=" transition-all duration-300 ease-in-out border-accent border-1 w-0 opacity-0 group-hover:w-full group-hover:opacity-100"></span> </div></Link>
                <Link href="#contact"><div className="flex flex-col gap-1 group transition-all duration-500 ease-in-out">Contact <span className=" transition-all duration-300 ease-in-out border-accent border-1 w-0 opacity-0 group-hover:w-full group-hover:opacity-100"></span> </div></Link>
            </div>


            <div className="flex flex-row gap-[16px] justify-center items-center">
                <a href={`tel:${data.numero}`} className="hidden lg:block">
                <SecondBouton className="text-white border-accent">
                <Icon icon='material-symbols:call' width={24} height={24}/>
                <p className="font-extrabold text-[16px]">{data.numero}</p>
                </SecondBouton>
                </a>
                <Link href="#contact">
                <Bouton className="items-center opacity-0 lg:opacity-100 h-full">
                    <Icon icon='material-symbols:mail' width={24} height={24} className="text-white"/>
                <p className=" text-[16px] font-semibold">Devis gratuit</p>
                </Bouton>
                </Link>
            </div>

        <button onClick={() => setBurger(true)} className="lg:hidden bg-accent rounded-[8px] w-[44px] h-[44px] flex items-center justify-center shrink-0"><Icon icon="qlementine-icons:menu-burger-16" className={`${!burger ? 'opacity-100' : 'opacity-0'} w-[24px] h-[24px] text-white`} /></button>

     </div>

     <a href={`tel:${data.numero}`} className="lg:hidden fixed bottom-0 left-0 w-full z-[90] flex items-center justify-center gap-2 bg-accent text-white py-[14px] border-t border-white/20">
         <Icon icon='material-symbols:call' width={20} height={20}/>
         <p className="font-extrabold text-[14px]">{data.numero}</p>
     </a>

     {burger && <div className=" fixed top-0 left-0  inset h-screen z-30 w-screen flex flex-col justify-center items-center px-8 py-8 bg-black/85 text-white">
                <div className=" self-end justify-self-start flex flex-row items-end "><button onClick={() => setBurger(false)}><Icon icon="akar-icons:cross" className="relative   w-[44px] h-11 text-second " /></button></div>
                 <div className=" row-start-1 mt-20 ml-10 col-span-full text-center items-center flex flex-col gap-8 text-[24px] font-semibold ">
                <Link href="#accueil"><div className="flex flex-col gap-1 group transition-all duration-500 ease-in-out" onClick={()=> setBurger(false)}>Accueil <span className=" transition-all duration-300 ease-in-out border-violet-500 border-1 w-0 opacity-0 group-hover:w-full group-hover:opacity-100"></span> </div></Link>
                <Link href="#service"><div className="flex flex-col gap-1 group transition-all duration-500 ease-in-out" onClick={()=> setBurger(false)}>À propos <span className=" transition-all duration-300 ease-in-out border-violet-500 border-1 w-0 opacity-0 group-hover:w-full group-hover:opacity-100"></span> </div></Link>
                <Link href="#contact"><div className="flex flex-col gap-1 group transition-all duration-500 ease-in-out" onClick={()=> setBurger(false)}>Contact <span className=" transition-all duration-300 ease-in-out border-violet-500 border-1 w-0 opacity-0 group-hover:w-full group-hover:opacity-100"></span> </div></Link>
                
            </div>

                </div>
        
        }
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
                <Image src={data.photo1} alt={data.altphoto1} width={320} height={337} quality={75} className="object-cover object-bottom rounded-lg shrink-0" />
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
                <Image src={data.photo2} alt={data.altphoto2} width={320} height={337} quality={75} className="object-cover object-bottom rounded-lg shrink-0" />
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
                <div  key={index} className="w-full p-8 lg:h-full lg:col-span-4 lg:row-span-1  bg-white text-[24px] font-bold border border-text flex flex-col rounded-[12px] justify-start "><div className="flex flex-col gap-8 items-start">
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


export function Contact() {
    return (
        <>
        <div id="contact">
        <Section  className="relative grid grid-cols-12  w-full h-auto  p-[32px] z-30 bg-accent text-white  ">
        
      <Image
        src="/fongui.jpg"
        alt="arbre en mauvais état a abattre"
        fill
        priority
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
                    <h2 className="font-extrabold text-[32px]">Demandez votre devis gratuit — Élagueur à Chantilly </h2>
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














export function Footer() {

    return (
        <footer className=" bg-accent w-full xl:min-h-75 text-white flex flex-col   items-center justify-center gap-16 py-16 px-8 lg:px-24 xl:items-start  ">

            <div className="flex flex-col gap-16  xl:flex-row justify-center ">
           {  /* data.logo && <Image src={data.logo.image} width={265} height={266} alt={data.logo.alt} className="w-fit h-auto drop-shadow-[4px] drop-shadow-accent/10 rounded-xl" /> */ }
              <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-16 lg:h-full ">
                 <div className="text-white font-semibold text-2xl flex flex-col gap-6 text-center">
                     <p className="text-white text-[32px]">Navigation</p>
                      <a href="#accueil">Accueil</a>
                       <a href="#service">À propos</a><a href="#contact">Contact</a>
                        </div>
                         <div className="bg-second/50 w-full h-px lg:h-65 lg:w-0.5  "></div>
                        <div className="text-white font-semibold text-2xl flex flex-col gap-6 text-center">
                            <p className="text-white text-[32px]">Contact</p>
                            <a href={`tel:${data.numero}`}>
                            <div className="flex gap-2.5 items-center justify-center">
                                 <Icon icon="material-symbols:call" width="28" height="28" />
                         <span>{data.numero}</span>
                          </div>
                            </a>
            <a href={`mailto:${data.email}`}>
                           <div className="flex gap-2.5 items-center justify-center">
                            <Icon icon="material-symbols:mail" width="28" height="28" />
              <span>{data.email}</span>
              </div>
              </a>
              </div>
              </div>
              </div>
            <div className="self-center text-center flex flex-col lg:flex-row gap-6">
                <a>{`Copyright © ${data.entreprise}. Tous droits réservés.`}</a>
                <Link href="/mentions-legales">Mentions légales</Link>
                <Link href="/conditions-generales-services">Conditions générales de services</Link>

            </div>

            <p className="self-end text-[20px] drop-shadow-2xl drop-shadow-white ">Créé et propulsé par l&apos;agence  <a className="font-extrabold text-violet-600" href="https://webprestige.fr" target="_blank" rel="noopener noreferrer">WebPrestige</a></p>
              </footer>
    )
}



