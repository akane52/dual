import React from "react";
import NavBar from "../NavBar"
import Footer from "../Footer";
import TimeLine from "../TimeLine"
import foto_dual from "../../resources/images/travelport_dual.jpg"

import { IntroductionTitle,
  IntroductionText,
  FirstPageContainer,
  HorizontalLine, 
  TextAndImageContainer,
  LearningsContainer,
  LearningsTitle, 
  DepartmentPhoto,
  PhotoContainer
} from "./styles"

export const LearningsDepartmentPage = () => {
  return (
    <div>
      <NavBar />
      <FirstPageContainer>
        <IntroductionTitle>DEPARTAMENTO</IntroductionTitle>
        <HorizontalLine />
        <TextAndImageContainer>
          <IntroductionText>
            <p>
              Durante estos últimos meses he tenido la oportunidad de trabajar en el departamento de CUST UI DEL & AUTO ENG - ES,
              ubicado en unas oficinas en Barcelona, justo al lado del puerto olímpico. 
              Mi experiencia ha sido enriquecedora y he tenido la suerte de contar con la supervisión de Toni Recio como mi tutor de prácticas
              durante este tiempo.
            </p>
            <p>
              Durante este año en el departamento, he podido disfrutar de un conjunto de herramientas y recursos que me han permitido
              realizar mis tareas de manera eficiente. 
              Entre las herramientas que hemos tenido a nuestra disposición se encuentran: portátiles para aquellos que no disponen de 
              uno propio, teclados y ratones, segundas pantallas, acceso a Microsoft Teams y a todas las aplicaciones relacionadas con 
              Microsoft Office, así como también acceso a la plataforma SPC.
            </p>
            <p>
              Además de todas estas herramientas, también hemos tenido acceso a comida y bebida en la oficina que ha permitido que 
              todos nosotros nos hayamos sentido cómodos y bien atendidos. Todo esto ha creado un ambiente de trabajo 
              muy agradable y ha permitido que cada uno de nosotros pueda desarrollar nuestras capacidades al máximo.
            </p>
          </IntroductionText>
        </TextAndImageContainer>
      </FirstPageContainer>
      <PhotoContainer>
        <DepartmentPhoto src={foto_dual} alt="Foto de la oficina" />
        <DepartmentPhoto src={foto_dual} alt="Foto de la oficina" />
      </PhotoContainer>
      <LearningsContainer>
        <LearningsTitle>¿QUÉ HE APRENDIDO? - LÍNEA DEL TIEMPO</LearningsTitle>
        <HorizontalLine />
        <TimeLine />
      </LearningsContainer>
      <Footer />
    </div>
  )
}
