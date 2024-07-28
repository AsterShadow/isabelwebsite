import Images from "@/assets/images";
import Image from "next/image";
import React from "react";

const AboutLayout = () => {
  return (
    <div className="flex ">
      <div className="text-sm lg:text-base">
        <p className="lg:text-xl font-bold font-headers">
          Bienvenue à toi sur mon site web!
        </p>

        <p>
          Ici je te parle un petit peu de moi, de mon parcours en tant
          qu'artiste peintre autodidacte.
        </p>

        <p>
          Je m'appelle Isabel Valdes Laberge. Je suis née en 1976 à Québec. J'ai
          grandi sur les rives du majestueux fleuve St-Laurent. La beauté qui
          m'entourait a éveillé ma nature contemplative ainsi que ma fibre
          artistique.
        </p>

        <p>
          Durant mon enfance et mon adolescence j'étais fortement attirée par le
          dessin, la peinture et par toutes sortes d'expressions artistiques
          (danse, photographie, musique, écriture...). Ces intérêts m'ont amenés
          à suivre toutes sortes de cours au fur et à mesure des années.
        </p>

        <p>
          Cependant, mon processus artistique plus authentique à réelement
          débuté en 2017... Un jour, j'ai sorti tous mes pinceaux et mes tubes
          de peinture et j'ai accroché une grande toile de coton sur un mur dans
          mon salon. J'ai mis de la musique tribale et je me suis mise à danser.
          J'ai danser jusqu'à me rendre dans un espèce d'état hypnotique... Et
          là j'ai commencé à peindre, à laisser aller les mouvements librement,
          à me laisser porter par ce qui voulait s'exprimer de moi...sur la
          toile. Mon premier atelier est né ce jour là ainsi que le plus grand
          coup de foudre de ma vie!
        </p>

        <p>
          Je touchait (enfin!) à ce qui est, depuis ce jour, ma forme
          d'expression artistique de prédilection : la peinture
          abstraite-intuitive-expressive: haute en couleurs!!!
        </p>

        <p>
          Peindre est devenue une nécessité, une grâce indicible! Un moyen de
          communion avec mon intérieur et de communication avec l'extérieur.
        </p>

        <p>Voilà! Bonne découverte de mes œuvres!!</p>

        <p>
          Comme le disait Picasso : '' La peinture est plus forte que moi. Elle
          me fait faire ce qu'elle veut''.
        </p>

        <p>
          Et Henri Matisse : ''Sans sincérité, il n'y a pas d'oeuvre
          authentique. (…) Je le répète encore : il faut être sincère et
          l'oeuvre d'art n'existe pleinement que lorsqu'elle est chargée
          d'émotion humaine''
        </p>
      </div>
      <div className="">
        <Image src={Images.isabel} alt="isabel-picture"/>
      </div>
    </div>
  );
};

export default AboutLayout;
