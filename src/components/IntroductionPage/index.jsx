import React from "react"
import NavBar from "../NavBar"
import { IntroductionTitle, IntroductionText, FirstPageContainer } from "./styles"

export const IntroductionPage = () => {
  return (
    <div>
      <NavBar />
      <FirstPageContainer>
        <IntroductionTitle>INTRODUCTION</IntroductionTitle>
        <IntroductionText>
        Durante los últimos meses he tenido la oportunidad de trabajar en una empresa líder en su sector donde he tenido la oportunidad de adquirir habilidades valiosas y aprender sobre las tecnologías más utilizadas hoy en día.
        Como objetivo personal, siempre me esfuerzo por crecer profesionalmente y mejorar mis habilidades. La empresa en la que he trabajado se dedica a las transacciones entre proveedores de servicios de la industria de viajes. 
        <br></br>Me siento agradecida por haber tenido la oportunidad de trabajar en una empresa que se esfuerza por mantener altos estándares de calidad y excelencia en su trabajo. 
        <br></br>Durante mi tiempo allí, he aprendido a trabajar en grupo, a organizarme y, como ya he comentado antes, a utilizar algunas de las tecnologías más buscadas hoy en día en el mundo de la programación. Estoy emocionada de seguir expandiendo mi experiencia y aplicar mis habilidades y conocimientos en nuevos proyectos y desafíos.
        </IntroductionText>
      </FirstPageContainer>
    </div>
  )
}