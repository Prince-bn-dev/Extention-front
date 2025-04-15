import React from 'react'
import Slider from "react-slick";
import { PhArrowRight,PhArrowLeft, PhQuotesFill } from '../uikits/Icons';



function Home() {

    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        arrows: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
    
        verticalSwiping: true,
        beforeChange: function (currentSlide, nextSlide) {
          console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function (currentSlide) {
          console.log("after change", currentSlide);
        },
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
            <a href="/dashboard">Obtenir votre clé</a>
         </button>
        </div>

        <div className='navbar'>
            <h2>
                LOGO
            </h2>
            <span>
            <button className='b1'>
                <a href="/register">S'inscrire
                </a>
            </button>
            <button className='b2'>
            <a href="/login">Se connecter
            </a>
            </button>
            </span>
        </div>

        <h2 className='titre'>
              A-Propos
            </h2>

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

        <h2 className='titre'>Nos commentaires</h2>

        <div className='avis'>
            <div className='gauche'>
                <h2>
                  Avis
                </h2>
                <img src="/public/images/avis.svg" alt="" />


            </div>

            <div className='droite'>
            <Slider {...settings}>
        {commentaireInfo.map((commentaires, i) =>(
       <div className='commentaire'  key={"nos commentaires" + i}>
 
              <img src={commentaires.image} alt="" />
              <section>
              <PhQuotesFill></PhQuotesFill>
              <p>  {commentaires.commentaire} </p>
              
              <div>
              <h3 className='com-name'>
                  {commentaires.nom}
                </h3>
             
  
              </div>
              </section>
           </div>
        ))}
</Slider>

            </div>

        </div>

    </div>
  )
}

export default Home