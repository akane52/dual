import React from "react"
import NavBar from "../NavBar"
import foto_lucia from "../../resources/images/lucia_foto.jpg"
import { 
  IntroductionTitle, 
  IntroductionText, 
  FirstPageContainer, 
  LuciaPhoto, 
  WhoAmITitleAndText, 
  HorizontalLine 
} from "./styles"

const Wrapper = ({ children }) => (
  <div style={{ backgroundColor: '#DEDCDE', height: '100vh' }}>
    {children}
  </div>
)

export const WhoAmIPage = () => {
  return (
    <Wrapper>
      <NavBar />
      <FirstPageContainer>
        <WhoAmITitleAndText>
          <IntroductionTitle>WHO AM I</IntroductionTitle>
          <IntroductionText>
          Soy una estudiante entusiasta y comprometida en aprender y desarrollarme tanto en el ámbito académico como en el personal. Me gusta explorar diferentes temas y adquirir nuevos conocimientos en diferentes áreas, lo que me permite tener una visión amplia y multidisciplinaria del mundo.
          {/* <br></br>En cuanto a mi formación académica, actualmente estoy estudiando un grado superior de desarrollo de aplicaciones multiplataforma. */}
          <br></br>En mi tiempo libre, me gusta ir al gimnasio, aprender idiomas y también disfruto de actividades al aire libre como caminatas. Además, me entusiasma ver series y películas.
          <br></br>En resumen, soy una estudiante curiosa y apasionada por aprender, y espero poder aplicar mis conocimientos y habilidades para contribuir positivamente a la sociedad en el futuro.
          </IntroductionText>
          <HorizontalLine />
        </WhoAmITitleAndText>
        <LuciaPhoto src={foto_lucia} alt="Lucia foto" />
      </FirstPageContainer>
    </Wrapper>
  )
}