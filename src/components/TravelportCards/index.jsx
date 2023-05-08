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
            <CardTextContainer>
            <CardTitle>TELÉFONO</CardTitle>
            <CardDescription>934 15 71 64</CardDescription>
            </CardTextContainer>
        </CardBackground>
        <CardBackground>
            <CardImage ></CardImage>
            <CardTextContainer>
            <CardTitle>DIRECCIÓN</CardTitle>
            <CardDescription>Ronda Litoral, 12, 08005 Barcelona</CardDescription>
            </CardTextContainer>
        </CardBackground>
        <CardBackground>
            <CardImage></CardImage>
            <CardTextContainer>
            <CardTitle>RAZÓN SOCIAL</CardTitle>
            <CardDescription>Travelport Worldwide Limited</CardDescription>
            </CardTextContainer>
        </CardBackground>
    </CardContainer>
  )
}

export default TravelportCards