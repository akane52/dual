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

import { personalObjectivesData } from '../../dataSamples/PersonalObjectivesInfo';

const PersonalObjectivesCard = () => {
  return (
    <CardContainer>
      {personalObjectivesData.map((data) => (
        <CardBackground key={data.id}>
          <CirclePersonalObjectivesCard>
            <Logos src={data.logo} />            
          </CirclePersonalObjectivesCard>
          <CardTextContainer>
            <CardTitle>{data.title}</CardTitle>
            <CardDescription>{data.description}</CardDescription>
          </CardTextContainer>
        </CardBackground>
      ))}
    </CardContainer>
  )
}

export default PersonalObjectivesCard