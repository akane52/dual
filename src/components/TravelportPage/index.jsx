import React from "react";
import { IntroductionTitle,
  IntroductionText,
  FirstPageContainer,
  FirstPagePhoto,
  HorizontalLine, 
  TextAndImageContainer,
  ImageContainer 
} from "./styles"
import Travelport_photo from "../../resources/images/travelport_logo.jpg"
import NavBar from "../NavBar"
import TravelportCards from "../TravelportCards"
import Footer from "../Footer";

export const TravelportPage = () => {
  return (
    <div>
      <NavBar />
      <FirstPageContainer>
        <IntroductionTitle>TRAVELPORT</IntroductionTitle>
        <HorizontalLine />
        <TextAndImageContainer>
          <IntroductionText>
            Travelport GDS está considerado como uno de los tres principales operadores 
            de sistemas de distribución global. La compañía tiene su sede en el Reino Unido, 
            pero su historia se remonta a 1971 y la creación del Apollo GDS en los Estados Unidos. 
            De hecho, en la actualidad, Travelport está compuesto por Apollo, Worldspan y Galileo GDS sistemas.
            <br></br>
            Si bien Travelport GDS se orientó inicialmente hacia las compañías aéreas, 
            hoy en día se utiliza para distribuir una variedad de productos y servicios 
            para aquellos en la industria de viajes, incluidas habitaciones de hotel y productos de hotel.
            <br></br>
            Para más información contacte con: 934 15 71 64
          </IntroductionText>
          <ImageContainer href="https://www.travelport.com">
            <FirstPagePhoto src={Travelport_photo} alt="Descripción de la imagen" />
          </ImageContainer>
        </TextAndImageContainer>
      </FirstPageContainer>
      <TravelportCards />
      <Footer />
    </div>
  )
}
