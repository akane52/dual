import React from "react";
import { 
    CardBackground, 
    CardImage, 
    CardTextContainer, 
    CardTitle, 
    CardDescription,
    CardContainer
} from "./styles"

const TravelportCards = () => {
  return (
    <CardContainer>
        <CardBackground>
            <CardImage ></CardImage>
              {/* Linea para poner los iconos solo hace falta poner classname y el nombre
            del icono que quieras */}
            {/* <span className="fab fa-42-group"></span>  */}
            <CardTextContainer>
            <CardTitle>Phone</CardTitle>
            <CardDescription>934 15 71 64</CardDescription>
            </CardTextContainer>
        </CardBackground>
        <CardBackground>
            <CardImage ></CardImage>
            <CardTextContainer>
            <CardTitle>Dirección</CardTitle>
            <CardDescription>Ronda Litoral, 12, 08005 Barcelona</CardDescription>
            </CardTextContainer>
        </CardBackground>
        <CardBackground>
            <CardImage></CardImage>
            <CardTextContainer>
            <CardTitle>Razón social</CardTitle>
            <CardDescription>Travelport Worldwide Limited</CardDescription>
            </CardTextContainer>
        </CardBackground>
    </CardContainer>
  )
}

export default TravelportCards