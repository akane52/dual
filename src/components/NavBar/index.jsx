import React from "react";
import  { ContainerText, Text }  from './styles'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const handleOnClickHome = () => {
    navigate('/')
  }
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
      <div>
        <ContainerText>
          <Text onClick={handleOnClickHome}>HOME</Text>
          <Text onClick={handleOnClickWhoAmI}>WHO AM I</Text>
          <Text onClick={handleOnClickTravelport}>TRAVELPORT</Text>
          <Text onClick={handleOnClickLearnings}>LEARNINGS</Text>
          <Text onClick={handleOnClickConclusions}>CONCLUSIONS</Text>
        </ContainerText>
      </div>
    )
  }
  
  export default Navbar