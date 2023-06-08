import React from "react";
import { IntroductionTitle, IntroductionText, FirstPageContainer, FirstPagePhoto, HorizontalLine, TextAndImageContainer } from "./styles"
import foto_prueba from "../../resources/images/foto_inicio.jpg"
import NavBar from "../NavBar"
import FirstPageCards from "../FirstPageCards"
import Footer from "../Footer";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <FirstPageContainer>
        <IntroductionTitle>INTRODUCCIÓN</IntroductionTitle>
        <HorizontalLine />
        <TextAndImageContainer>
          <IntroductionText>
          Durante los últimos meses he tenido la oportunidad de trabajar en una empresa líder en su sector donde he tenido la oportunidad de adquirir habilidades valiosas y aprender sobre las tecnologías más utilizadas hoy en día.
          <br></br>Me siento agradecida por haber tenido la oportunidad de trabajar en una empresa como la que es Travelport. 
          <br></br>Durante mi tiempo allí, he aprendido a trabajar en grupo, a organizarme y, como ya he comentado antes, a utilizar algunas de las tecnologías más buscadas hoy en día en el mundo de la programación. 
          </IntroductionText>
          <FirstPagePhoto src={foto_prueba} alt="Descripción de la imagen" />
        </TextAndImageContainer>
      </FirstPageContainer>
      <FirstPageCards />
      <Footer />
    </div>
  )
}

export default HomePage