import { ReadMoreButton, IntroductionTitle, IntroductionText, FirstPageContainer, FirstPagePhoto } from "./styles"
import foto_prueba from "../../resources/images/foto_inicio.jpg"
import HamburgerMenu from "../NavBar"

const FirstPage = () => {
    return(
        <div>
        <HamburgerMenu/>
        <FirstPageContainer>
          <IntroductionTitle>INTRODUCTION</IntroductionTitle>
          <IntroductionText>
           Durante los últimos meses he tenido la oportunidad de trabajar en una empresa líder en su sector
           donde he tenido la oportunidad de adquirir habilidades valiosas y aprender sobre las tecnologías más utilizadas hoy en día.
          </IntroductionText>
          <ReadMoreButton>READ MORE</ReadMoreButton>
        <FirstPagePhoto src={foto_prueba} alt="Descripción de la imagen"/>
        </FirstPageContainer>
      </div>
    )
}

export default FirstPage