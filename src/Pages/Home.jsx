import React from 'react'
import Slider from "react-slick";
import { PhArrowRight,PhArrowLeft, PhQuotesFill,PhUserCircle,PhMedalBold,MaterialSymbolsAcUnit } from '../uikits/Icons';




function Home() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Affiche plusieurs produits horizontalement
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
 };

    const commentaireInfo = [
        {
          image : "/public/images/ikeshop/5.jpg",
          nom : "leticia",
          commentaire : " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus eveniet maiores suscipit tempore quo, ullam iusto molestias iure numquam. "
        },
        {
          image : "/public/images/ikeshop/ike4.jpg",
          nom : "leticia",
          commentaire : " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus eveniet maiores suscipit tempore quo, ullam iusto molestias iure numquam. "
        },
        {
          image : "/public/images/ikeshop/5.jpg",
          nom : "leticia",
          commentaire : " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus eveniet maiores suscipit tempore quo, ullam iusto molestias iure numquam. "
        },
        {
          image : "/public/images/ikeshop/ike4.jpg",
          nom : "leticia",
          commentaire : " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus eveniet maiores suscipit tempore quo, ullam iusto molestias iure numquam. "
        },
        {
          image : "/public/images/ikeshop/5.jpg",
          nom : "leticia",
          commentaire : " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus eveniet maiores suscipit tempore quo, ullam iusto molestias iure numquam. "
        },
        {
          image : "/public/images/ikeshop/ike4.jpg",
          nom : "leticia",
          commentaire : " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus eveniet maiores suscipit tempore quo, ullam iusto molestias iure numquam. "
        },
        {
          image : "/public/images/ikeshop/5.jpg",
          nom : "leticia",
          commentaire : " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus eveniet maiores suscipit tempore quo, ullam iusto molestias iure numquam. "
        },
        {
          image : "/public/images/ikeshop/ike4.jpg",
          nom : "leticia",
          commentaire : " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus eveniet maiores suscipit tempore quo, ullam iusto molestias iure numquam. "
        },
      ]

  return (
    <div className='Home'>
        
        <div className='h-banner'>
         <h1>
            Bienvenue sur notre extensions
         </h1>

         <button>
            <a href="">Télécharger votre extension</a>
         </button>
        </div>
{/* 
        <div className='navbar'>
            <h2>
                LOGO
            </h2>
            <span>
            <button className='b1'>
                <a href="/register"> <b>S'inscrire</b>
                </a>
            </button>
            <button className='b2'>
            <a href="/login"> <b>Se connecter</b>
            </a>
            </button>
            </span>
        </div> */}

       

        <h2 className='titre'>A-Propos</h2>
        <div className='about'>

          <div className='left'>
             <h2>
                Que permet-elle?
             </h2>
             <p>
             Cette extension simplifie votre expérience sur les réseaux sociaux en automatisant l'ajout de contacts. Gagnez du temps et élargissez votre réseau facilement, sans devoir ajouter chaque personne manuellement.
             {/* Notre extension a été conçue pour simplifier et optimiser votre expérience
              sur les réseaux sociaux. Grâce à elle, plus besoin d’ajouter manuellement
               chaque contact un par un : en quelques clics, vous pouvez automatiser cette
                tâche et gagner un temps précieux. Que vous soyez créateur de contenu, community
                 manager ou simplement un utilisateur actif, cette extension vous offre un moyen rapide, 
                 efficace et sécurisé d’élargir votre réseau. */}
             Votre productivité sur les réseaux sociaux n’a jamais été aussi fluide.

             </p>
            
          </div>

          <div className='right'>
            <img src="/public/images/about.svg" alt="" />
          </div>
        </div>
        <h2 className='titre'> Voulez vous une clé ? </h2>
        <div className='clé'>
         <b>
         Cette clé d’accessibilité est fournie pour permettre l’utilisation personnelle
          de l’extension. Elle sert à authentifier votre accès et garantir une utilisation
           sécurisée et conforme aux conditions prévues. Cette clé est strictement réservée
            à un usage individuel
          et ne doit pas être partagée ou utilisée à des fins commerciales sans autorisation préalable
         </b>

         <img src="/public/images/arrow.png" alt="" />


         <button><a href="/dashboard"><b>Obtenir votre clé</b></a></button>

        </div>

        <h2 className='titre'>Nos services</h2>

        <div className='service'>
         <section>

          <PhUserCircle/>
          <h3>
            titre
          </h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum aut ipsum
          </p>
         </section>

         <section>
          <PhMedalBold/>

          <h3>
            titre
          </h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum aut ipsum
          </p>
         </section>

         <section>

          <MaterialSymbolsAcUnit/>
          <h3>
            titre
          </h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum aut ipsum
          </p>
         </section>
        </div>

        <h2 className='titre'>Nos commentaires</h2>
        <div className='avis'>
            <div className='gauche'>
                <h2>
                  Avis
                </h2>
                <img src="/public/images/avis.svg" alt="" />


            </div>

            <div className='droite'>
       

            </div>

        </div>

    </div>
  )
}

export default Home