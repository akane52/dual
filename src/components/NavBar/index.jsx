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
    navigate('/components/LearningsDepartmentPage')
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
          <Text onClick={handleOnClickWhoAmI}>QUIÉN SOY</Text>
          <Text onClick={handleOnClickTravelport}>TRAVELPORT</Text>
          <Text onClick={handleOnClickLearnings}>APRENDIZAJES</Text>
          <Text onClick={handleOnClickConclusions}>CONCLUSIONES</Text>
        </ContainerText>
      </div>
    )
  }
  
  export default Navbar