import React from "react";
import { 
  FirstPageContainer, 
  IntroductionTitle, 
  HorizontalLine, 
  GreyContainer, 
  Numbers 
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
      </GreyContainer>
      <GreyContainer>
        <Numbers> 2 </Numbers>
      </GreyContainer>
      <GreyContainer className='blackContainer'>
        <Numbers className='whiteNumber'> 3 </Numbers>
      </GreyContainer>
    </div>
  )
}
