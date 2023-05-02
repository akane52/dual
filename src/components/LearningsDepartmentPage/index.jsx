import React from "react";
import NavBar from "../NavBar"
import Footer from "../Footer";
import { IntroductionTitle,
  IntroductionText,
  FirstPageContainer,
  HorizontalLine, 
  TextAndImageContainer,
  LearningsContainer,
  LearningsTitle
} from "./styles"

import gherking_logo from "../../resources/images/gherking_logo.png"
import javascript_logo from "../../resources/images/javascript_logo.jpg"
import bdd_logo from "../../resources/images/bdd_logo.png"
import react_logo from "../../resources/images/react_logo.png"
import brain_logo from "../../resources/images/brain_logo.png"
import travelport_logo_redondo from "../../resources/images/travelport_logo_redondo.png"
import grupo_trabajo from "../../resources/images/grupo_trabajo.png"

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const LearningsDepartmentPage = () => {
  return (
    <div>
      <NavBar />
      <FirstPageContainer>
        <IntroductionTitle>DEPARTAMENTO</IntroductionTitle>
        <HorizontalLine />
        <TextAndImageContainer>
          <IntroductionText>
            <p>
              Durante estos últimos meses he tenido la oportunidad de trabajar en el departamento de CUST UI DEL & AUTO ENG - ES,
              ubicado en unas oficinas en Barcelona, justo al lado del puerto olímpico. 
              Mi experiencia ha sido enriquecedora y he tenido la suerte de contar con la supervisión de Toni Recio como mi tutor de prácticas
              durante este tiempo.
            </p>
            <p>
              Durante este año en el departamento, he podido disfrutar de un conjunto de herramientas y recursos que me han permitido
              realizar mis tareas de manera eficiente. 
              Entre las herramientas que hemos tenido a nuestra disposición se encuentran: portátiles para aquellos que no disponen de 
              uno propio, teclados y ratones, segundas pantallas, acceso a Microsoft Teams y a todas las aplicaciones relacionadas con 
              Microsoft Office, así como también acceso a la plataforma SPC.
            </p>
            <p>
              Además de todas estas herramientas, también hemos tenido acceso a comida y bebida en la oficina que ha permitido que 
              todos nosotros nos hayamos sentido cómodos y bien atendidos. Todo esto ha creado un ambiente de trabajo 
              muy agradable y ha permitido que cada uno de nosotros pueda desarrollar nuestras capacidades al máximo.
            </p>
          </IntroductionText>
        </TextAndImageContainer>
      </FirstPageContainer>
      <LearningsContainer>
        <LearningsTitle>¿QUÉ HE APRENDIDO? - LÍNEA DEL TIEMPO</LearningsTitle>
        <HorizontalLine />
        <VerticalTimeline lineColor={ '#94A8B3' }>
          <VerticalTimelineElement
            contentStyle={{ background: '#94A8B3', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #94A8B3' }}
            iconStyle={{ background: '#fff', color: '#fff' }}
            icon={ <img src={gherking_logo} alt="Gherking logo" style={{ borderRadius: "50%", height: "100%", width: "100%"}}/> }
          >
            <h3 className="vertical-timeline-element-title">JUNIO 2022</h3>
            <h4 className="vertical-timeline-element-subtitle">Gherking</h4>
            <p>
              Creación de una “wikipedia” con toda la parte teórica de HTML, CSS
              Utilización de github
            </p>
            <p>
              He aprendido a utilizar el lenguaje de marcas html y las hojas de estilo css a nivel avanzado. 
              Aprendizaje de github a nivel de usuario básico.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: '#94A8B3', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #94A8B3' }}
            iconStyle={{ background: '#fff', color: '#fff' }}
            icon={ <img src={javascript_logo} alt="Javascript logo" style={{ borderRadius: "50%", height: "100%", width: "100%"}}/> }
          >
            <h3 className="vertical-timeline-element-title">JULIO 2022</h3>
            <h4 className="vertical-timeline-element-subtitle">JavaScript</h4>
            <p>
              Comienzo con JavaScript. Creación de una calculadora en base a un feature file y realización de los tests automáticos. (gherkin)
            </p>
            <p>
              He aprendido a utilizar el lenguaje de programación JavaScript a un nivel avanzado. 
              También a realizar feature files y a generar tests automáticos para comprobar el funcionamiento de la aplicación.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: '#94A8B3', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #94A8B3' }}
            iconStyle={{ background: '#fff', color: '#fff' }}
            icon={ <img src={javascript_logo} alt="Javascript logo" style={{ borderRadius: "50%", height: "100%", width: "100%"}}/> }
          >
            <h3 className="vertical-timeline-element-title">SEPTIEMBRE 2022</h3>
            <h4 className="vertical-timeline-element-subtitle">JavaScript</h4>
            <p>
              Continuación con JavaScript. Creación de un buscaminas con metodología BDD.
            </p>
            <p>
              Hemos seguido con JavaScript.
              También hemos aprendido a realizar feature files y a generar tests automáticos para comprobar el funcionamiento de la aplicación. 
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: '#94A8B3', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #94A8B3' }}
            iconStyle={{ background: '#fff', color: '#fff' }}
            icon={ <img src={bdd_logo} alt="BDD logo" style={{ borderRadius: "50%", height: "100%", width: "100%"}}/> }
          >
            <h3 className="vertical-timeline-element-title">OCTUBRE 2022</h3>
            <h4 className="vertical-timeline-element-subtitle">JavaScript y BDD</h4>
            <p>
              Continuación con JavaScript. Creación de un buscaminas con metodología BDD.
            </p>
            <p>
              Hemos seguido con JavaScript 
              También a realizar feature files y a generar tests automáticos para comprobar el funcionamiento de la aplicación. 
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: '#94A8B3', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #94A8B3' }}
            iconStyle={{ background: '#fff', color: '#fff' }}
            icon={ <img src={react_logo} alt="React logo" style={{ borderRadius: "50%", height: "100%", width: "100%"}}/> }
          >
            <h3 className="vertical-timeline-element-title">NOVIEMBRE 2022</h3>
            <h4 className="vertical-timeline-element-subtitle">React y Emotion</h4>
            <p>
              Continuación con JavaScript. Creación de un buscaminas con metodología BDD.
            <br></br>
              Iniciación a React y Emotion en la réplica de la página web utilizada en la empresa. (Storefront)
            </p>
            <p>
              Hemos aprendido a utilizar el framework de React y la librería Emotion para css. 
              Aparte, hemos aprendido a trabajar en equipo y a organizarnos para llegar a un objetivo común.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: '#94A8B3', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #94A8B3' }}
            iconStyle={{ background: '#fff', color: '#fff' }}
            icon={ <img src={react_logo} alt="React logo" style={{ borderRadius: "50%", height: "100%", width: "100%"}}/> }
          >
            <h3 className="vertical-timeline-element-title">DICIEMBRE 2022</h3>
            <h4 className="vertical-timeline-element-subtitle">React y Emotion</h4>
            <p>
              Iniciación a React y Emotion en la réplica de la página web utilizada en la empresa. (Storefront)
            </p>
            <p>
              Hemos aprendido a utilizar el framework de React y la librería Emotion para css. 
              Aparte, hemos aprendido a trabajar en equipo y a organizarnos para llegar a un objetivo común.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: '#94A8B3', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #94A8B3' }}
            iconStyle={{ background: '#fff', color: '#fff' }}
            icon={ <img src={brain_logo} alt="Brain logo" style={{ borderRadius: "50%", height: "100%", width: "100%"}}/> }
          >
            <h3 className="vertical-timeline-element-title">ENERO 2023</h3>
            <h4 className="vertical-timeline-element-subtitle">Pruebas de conocimientos</h4>
            <p>
              Prueba práctica para poner a prueba nuestros conocimientos sobre React, llamadas a API, Emotion y testing.
              <br />
              Creación de una web de temática libre para poner en práctica nuestros conocimientos.
            </p>
            <p>
              Hemos aprendido a gestionarnos en un corto periodo de tiempo para acabar una tarea que nos han pedido. Aparte, hemos tenido que aprender en base a buscar documentación a utilizar APIs y a gestionar sus datos.
              <br />
              Al igual que con la prueba práctica, hemos tenido que organizarnos en pequeños grupos para acabar una web completamente funcional en 2 semanas. Todo esto, aplicando los conocimientos anteriormente aprendidos (React, Styled components, deployment, llamadas a las API…)
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: '#94A8B3', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #94A8B3' }}
            iconStyle={{ background: '#fff', color: '#fff' }}
            icon={ <img src={travelport_logo_redondo} alt="Travelport logo" style={{ borderRadius: "50%", height: "100%", width: "100%"}}/> }
          >
            <h3 className="vertical-timeline-element-title">FEBRERO 2023</h3>
            <h4 className="vertical-timeline-element-subtitle">Introducción a SmartPoint Cloud</h4>
            <p>
              Introducción a Smart Point Cloud, haciéndonos un pequeño ejercicio para coger los conocimientos básicos. 
              <br />
              Una vez acabado esto, nos eligieron a varios para incorporarnos a un equipo de trabajo. 
            </p>
            <p>
            Empezamos ya a tocar el framework de la empresa. Nos hicieron un ejercicio que consistía en poner un botón en 
            una navbar, que al hacer click nos saliese un historial de comandos y que, por último, apareciese un terminal 
            propio de la empresa que al insertar un comando, nos apareciese el historial de comandos utilizados. 
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: '#94A8B3', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #94A8B3' }}
            iconStyle={{ background: '#fff', color: '#fff' }}
            icon={ <img src={grupo_trabajo} alt="Grupo logo" style={{ borderRadius: "50%", height: "100%", width: "100%"}}/> }
          >
            <h3 className="vertical-timeline-element-title">MARZO 2023</h3>
            <h4 className="vertical-timeline-element-subtitle">Introducción a grupos de trabajo</h4>
            <p>
              Empezamos a incorporarnos al equipo haciendo tareas de mantenimiento como por ejemplo actualizar yarn 
              en varios repositorios, también asistiendo a las dailys y a los PI planning para coger el ritmo de trabajo.
            </p>
            <p>
              Organización interna de los equipos, matificación de la metodología scrum, actualización de versiones…
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: '#94A8B3', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid #94A8B3' }}
            iconStyle={{ background: '#fff', color: '#fff' }}
            icon={ <img src={grupo_trabajo} alt="Grupo logo" style={{ borderRadius: "50%", height: "100%", width: "100%"}}/> }
          >
            <h3 className="vertical-timeline-element-title">ABRIL 2023</h3>
            <h4 className="vertical-timeline-element-subtitle">Introducción a grupos de trabajo</h4>
            <p>
              Empezamos a incorporarnos al equipo haciendo tareas de mantenimiento como por ejemplo actualizar yarn 
              en varios repositorios, también asistiendo a las dailys y a los PI planning para coger el ritmo de trabajo.
            </p>
            <p>
              Organización interna de los equipos, matificación de la metodología scrum, actualización de versiones…
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </LearningsContainer>
      <Footer />
    </div>
  )
}
