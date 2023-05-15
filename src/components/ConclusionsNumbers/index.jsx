import React from "react";
import { 
  FirstPageContainer, 
  IntroductionTitle, 
  HorizontalLine, 
  GreyContainer, 
  Numbers,
  ConclusionsText
} from "./styles"

export const ConclusionsNumbers = () => {
  return (
    <div>
      <FirstPageContainer>
        <IntroductionTitle>CONCLUSIONES</IntroductionTitle>
        <HorizontalLine />
      </FirstPageContainer>
      <GreyContainer>
        <Numbers> 1 </Numbers>
        <ConclusionsText>
          He tenido la oportunidad de adquirir conocimientos en diferentes tecnologías,
          lenguajes de programación y herramientas utilizadas en el desarrollo de aplicaciones multiplataforma. 
        </ConclusionsText>
      </GreyContainer>
      <GreyContainer>
        <Numbers> 2 </Numbers>
        <ConclusionsText>
          Las prácticas me dieron la oportunidad de entrar en un entorno 
          laboral real. Pude experimentar la cultura empresarial, colaborar con equipos multidisciplinarios 
          y comprender las dinámicas de trabajo más utilizadas hoy en día.
        </ConclusionsText>
      </GreyContainer>
      <GreyContainer>
        <Numbers> 3 </Numbers>
        <ConclusionsText>
          Durante mis prácticas duales, recibí comentarios constantes de profesionales experimentados.
          Estos comentarios me ayudaron a identificar mis puntos fuertes y áreas en las que podía mejorar.
        </ConclusionsText>
      </GreyContainer>
    </div>
  )
}
