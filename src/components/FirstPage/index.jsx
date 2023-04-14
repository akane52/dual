import { ReadMoreButton, IntroductionTitle, IntroductionText, FirstPageContainer, FirstPagePhoto } from "./styles"
import foto_prueba from "../../resources/images/foto_inicio.jpg"
import NavBar from "../NavBar"

const FirstPage = () => {
  const handleClick = () => {
    window.location.href = '/components/ReadMoreButton';
  }

  return (
    <div>
      <NavBar />
      <FirstPageContainer>
        <IntroductionTitle>INTRODUCTION</IntroductionTitle>
        <IntroductionText>
          Durante los últimos meses he tenido la oportunidad de trabajar en una empresa líder en su sector
          donde he tenido la oportunidad de adquirir habilidades valiosas y aprender sobre las tecnologías más utilizadas hoy en día.
        </IntroductionText>
        <ReadMoreButton onClick={handleClick}>READ MORE</ReadMoreButton>
        <FirstPagePhoto src={foto_prueba} alt="Descripción de la imagen" />
      </FirstPageContainer>
    </div>
  )
}

export default FirstPage