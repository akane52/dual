import React from "react";
import { 
    CardBackground, 
    CardTextContainer,
    CardTitle, 
    CardDescription,
    CardContainer,
    CirclePersonalObjectivesCard,
    Logos
} from "./styles"
import codingPhoto from "../../resources/images/coding_logo.png"
import grouth from "../../resources/images/grouth.png"
import contactsLogo from "../../resources/images/contacts.png"

const PersonalObjectivesCard = () => {
  return (
    <CardContainer>
        <CardBackground>
            <CirclePersonalObjectivesCard>
                <Logos src={codingPhoto} />            
            </CirclePersonalObjectivesCard>
            <CardTextContainer>
            <CardTitle>Nuevas tecnologías</CardTitle>
            <CardDescription>
                Aprender una nueva tecnología o lenguaje de programación 
                relacionado con el desarrollo web para mejorar la capacidad 
                técnica y el conocimiento.
            </CardDescription>
            </CardTextContainer>
        </CardBackground>
        <CardBackground>
            <CirclePersonalObjectivesCard>
                <Logos src={grouth} />            
            </CirclePersonalObjectivesCard>
            <CardTextContainer>
            <CardTitle>Crecimiento personal</CardTitle>
            <CardDescription>Uno de mis principales objetivos personales ha sido siempre crecer tanto a 
                nivel profesional como personal. Y considero que estas prácticas me han dado la oportunidad
                de hacerlo.
            </CardDescription>
            </CardTextContainer>
        </CardBackground>
        <CardBackground>
            <CirclePersonalObjectivesCard>
                <Logos src={contactsLogo} />            
            </CirclePersonalObjectivesCard>
            <CardTextContainer>
            <CardTitle>Red de contactos</CardTitle>
            <CardDescription>
                Establecer contactos profesionales y mantener relaciones de 
                trabajo sólidas con compañeros de trabajo para construir una red de contactos
            </CardDescription>
            </CardTextContainer>
        </CardBackground>
    </CardContainer>
  )
}

export default PersonalObjectivesCard