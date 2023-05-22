import React from "react";

import { IntroductionTitle,
  IntroductionText,
  FirstPageContainer,
  FirstPagePhoto,
  HorizontalLine, 
  TextAndImageContainer,
  ImageContainer,
  CardsContainer,
  CardText,
  Card,
  BlueCard,
  GreenCard,
  AreasFuncionesImage
} from "./styles"

import Travelport_photo from "../../resources/images/travelport_logo.jpg"
import areas_funciones_empresa from "../../resources/images/areas_funciones_empresa.png"
import Organigrama from "../../resources/images/organigrama.png"

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
            <br></br>
            Travelport GDS se orientó hacia las compañías aéreas, hoy en día se utiliza para distribuir una variedad de 
            productos y servicios para aquellos en la industria de viajes, incluidas habitaciones de hotel y productos de hotel.
          </IntroductionText>
          <ImageContainer href="https://www.travelport.com">
            <FirstPagePhoto src={Travelport_photo} alt="Descripción de la imagen" />
          </ImageContainer>
        </TextAndImageContainer>
      </FirstPageContainer>
      <TravelportCards />
      <FirstPageContainer>
        <IntroductionTitle>CLIENTES Y PROVEEDORES</IntroductionTitle>
        <HorizontalLine />
          <CardsContainer>
            <BlueCard>
              <Card>
                CLIENTES
                <br />
                <CardText>
                  Agencias de viajes
                </CardText>
              </Card>
            </BlueCard>
            <GreenCard>
              <Card>
                PROVEEDORES
                <br />
                <CardText>
                  Servicios informáticos
                </CardText>
              </Card>
            </GreenCard>
          </CardsContainer>
      </FirstPageContainer>
      <FirstPageContainer>
        <IntroductionTitle>ÁREAS Y FUNCIONES DE LA EMPRESA</IntroductionTitle>
        <HorizontalLine />
        <AreasFuncionesImage src={areas_funciones_empresa} alt="Areas y funciones de la empresa"/>
      </FirstPageContainer>
      <FirstPageContainer>
        <IntroductionTitle>ORGANIGRAMA</IntroductionTitle>
        <HorizontalLine />
        <AreasFuncionesImage src={Organigrama} alt="Organigrama"/>
      </FirstPageContainer>
      <Footer />
    </div>
  )
}
