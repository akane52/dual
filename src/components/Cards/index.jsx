import React from "react";
import learningsPhoto from "../../resources/images/learnings_photo.jpg"
import travelportPhoto from "../../resources/images/travelport_logo.jpg"
import conclusionsPhoto from "../../resources/images/conclusions_photo.jpg"
import { useNavigate } from 'react-router-dom'

import { 
    CardBackground, 
    CardImage, 
    CardTextContainer, 
    CardButton, 
    CardTitle, 
    CardDescription,
    CardContainer
} from "./styles"

const Card = () => {
    const navigate = useNavigate()
    const handleOnClickWhoAmI = () => {
        navigate('/components/WhoAmIPage')
    }
    const handleOnClickLearnings = () => {
        navigate('/components/LearningsPage')
    }
    const handleOnClickTravelport = () => {
        navigate('/components/TravelportPage')
    }
    const handleOnClickConclusions = () => {
        navigate('/components/ConclusionsPage')
    }
  return (
    <CardContainer>
        <CardBackground>
            <CardImage ></CardImage>
            <CardTextContainer>
            <CardTitle>Who am I?</CardTitle>
            <CardDescription>holka diuwdhiuehdfouewd</CardDescription>
            <CardButton onClick={handleOnClickWhoAmI}>Read more</CardButton>
            </CardTextContainer>
        </CardBackground>
        <CardBackground>
            <CardImage src={travelportPhoto}></CardImage>
            <CardTextContainer>
            <CardTitle>Travelport</CardTitle>
            <CardDescription>holka diuwdhiuehdfouewd</CardDescription>
            <CardButton onClick={handleOnClickTravelport}>Read more</CardButton>
            </CardTextContainer>
        </CardBackground>
        <CardBackground>
            <CardImage src={learningsPhoto}></CardImage>
            <CardTextContainer>
            <CardTitle>Learnings</CardTitle>
            <CardDescription>holka diuwdhiuehdfouewd</CardDescription>
            <CardButton onClick={handleOnClickLearnings}>Read more</CardButton>
            </CardTextContainer>
        </CardBackground>
        <CardBackground>
            <CardImage src={conclusionsPhoto}></CardImage>
            <CardTextContainer>
            <CardTitle>Conclusions</CardTitle>
            <CardDescription>holka diuwdhiuehdfouewd</CardDescription>
            <CardButton onClick={handleOnClickConclusions}>Read more</CardButton>
            </CardTextContainer>
        </CardBackground>
    </CardContainer>
  )
}

export default Card