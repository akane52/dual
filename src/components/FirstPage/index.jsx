import { ReadMoreButton, IntroductionTitle, IntroductionText, FirstPageContainer, FirstPagePhoto } from "./styles"
import foto_prueba from "../../resources/images/foto_inicio.jpg"
import NavBar from "../NavBar"
import { Link } from "react-router-dom"

const FirstPage = () => {
  return (
    <div>
      <NavBar />
      <FirstPageContainer>
        <IntroductionTitle>INTRODUCTION</IntroductionTitle>
        <IntroductionText>
          Durante los últimos meses he tenido la oportunidad de trabajar en una empresa líder en su sector
          donde he tenido la oportunidad de adquirir habilidades valiosas y aprender sobre las tecnologías más utilizadas hoy en día.
        </IntroductionText>
        <Link to='/components/ReadMoreButton'>
          <ReadMoreButton>READ MORE</ReadMoreButton>
        </Link>
        <FirstPagePhoto src={foto_prueba} alt="Descripción de la imagen" />
      </FirstPageContainer>
    </div>
  )
}

export default FirstPage