import React from "react";
import { 
    CardBackground, 
    CardImage, 
    CardTextContainer, 
    CardTitle, 
    CardDescription,
    CardContainer
} from "./styles"

import ubicacion_empresa from "../../resources/images/ubicacion_empresa.png"
import departamento from "../../resources/images/departamento.png"

const TravelportCards = () => {
  return (
    <CardContainer>
        <CardBackground>
            <CardImage ></CardImage>
            <CardTextContainer>
            <CardTitle>TELÉFONO</CardTitle>
            <CardDescription>934 15 71 64</CardDescription>
            </CardTextContainer>
        </CardBackground>
        <CardBackground>
            <CardImage src={ubicacion_empresa}></CardImage>
            <CardTextContainer>
            <CardTitle>DIRECCIÓN</CardTitle>
            <CardDescription>Ronda Litoral, 12, 08005 Barcelona</CardDescription>
            </CardTextContainer>
        </CardBackground>
        <CardBackground>
            <CardImage></CardImage>
            <CardTextContainer>
            <CardTitle>RAZÓN SOCIAL</CardTitle>
            <CardDescription>GALILEO ESPAÑA SL B79276481</CardDescription>
            </CardTextContainer>
        </CardBackground>
        <CardBackground>
            <CardImage src={departamento}></CardImage>
            <CardTextContainer>
            <CardTitle>DEPARTAMENTO</CardTitle>
            <CardDescription>Product & Tech <br /> Global Solutions Delivery</CardDescription>
            </CardTextContainer>
        </CardBackground>
    </CardContainer>
  )
}

export default TravelportCards