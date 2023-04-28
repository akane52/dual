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
            <CardTitle>Teléfono</CardTitle>
            <CardDescription>holka diuwdhiuehdfouewd</CardDescription>
            </CardTextContainer>
        </CardBackground>
        <CardBackground>
            <CardImage ></CardImage>
            <CardTextContainer>
            <CardTitle>Travelport</CardTitle>
            <CardDescription>holka diuwdhiuehdfouewd</CardDescription>
            </CardTextContainer>
        </CardBackground>
        <CardBackground>
            <CardImage></CardImage>
            <CardTextContainer>
            <CardTitle>Learnings</CardTitle>
            <CardDescription>holka diuwdhiuehdfouewd</CardDescription>
            </CardTextContainer>
        </CardBackground>
        <CardBackground>
            <CardImage></CardImage>
            <CardTextContainer>
            <CardTitle>Conclusions</CardTitle>
            <CardDescription>holka diuwdhiuehdfouewd</CardDescription>
            </CardTextContainer>
        </CardBackground>
    </CardContainer>
  )
}

export default TravelportCards