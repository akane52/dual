import React from "react";
import { 
  FirstPageContainer, 
  IntroductionTitle, 
  HorizontalLine, 
  GreyContainer, 
  Numbers,
  ConclusionsText
} from "./styles"

export const ConclusionsNumbers = () => {
  return (
    <div>
      <FirstPageContainer>
        <IntroductionTitle>CONCLUSIONES</IntroductionTitle>
        <HorizontalLine />
      </FirstPageContainer>
      <GreyContainer>
        <Numbers> 1 </Numbers>
        <ConclusionsText>hola</ConclusionsText>
      </GreyContainer>
      <GreyContainer>
        <Numbers> 2 </Numbers>
        <ConclusionsText>hola</ConclusionsText>
      </GreyContainer>
      <GreyContainer>
        <Numbers> 3 </Numbers>
        <ConclusionsText>hola</ConclusionsText>
      </GreyContainer>
      <GreyContainer>
        <Numbers> 4 </Numbers>
        <ConclusionsText>hola</ConclusionsText>
      </GreyContainer>
    </div>
  )
}
