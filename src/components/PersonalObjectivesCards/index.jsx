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
import error_logo from "../../resources/images/error_logo.png"
import ui_logo from "../../resources/images/ui_logo.png"

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
        <CardBackground>
            <CirclePersonalObjectivesCard>
                <Logos src={ui_logo} />            
            </CirclePersonalObjectivesCard>
            <CardTextContainer>
            <CardTitle>UX/UI</CardTitle>
            <CardDescription>
                Desarrollar habilidades en diseño de interfaz de usuario (UI) y 
                experiencia de usuario (UX) para crear aplicaciones atractivas y fáciles de usar.
            </CardDescription>
            </CardTextContainer>
        </CardBackground>
        <CardBackground>
            <CirclePersonalObjectivesCard>
                <Logos src={error_logo} />            
            </CirclePersonalObjectivesCard>
            <CardTextContainer>
            <CardTitle>Resolución de problemas</CardTitle>
            <CardDescription>
                Desarrollar habilidades de resolución de problemas, para poder identificar y
                solucionar errores y problemas en el código.
            </CardDescription>
            </CardTextContainer>
        </CardBackground>
    </CardContainer>
  )
}

export default PersonalObjectivesCard