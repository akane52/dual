import React from "react";
import  { ContainerText, Text }  from './styles'
import { useNavigate, useLocation } from 'react-router-dom'

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

  const location = useLocation();
    return (
      <div>
        <ContainerText>
          <Text onClick={handleOnClickHome} className={location.pathname === '/' ? 'selected' : '' }>HOME</Text>
          <Text onClick={handleOnClickWhoAmI} className={location.pathname === '/components/WhoAmIPage' ? 'selected' : '' }>QUIÉN SOY</Text>
          <Text onClick={handleOnClickTravelport} className={location.pathname === '/components/TravelportPage' ? 'selected' : '' }>TRAVELPORT</Text>
          <Text onClick={handleOnClickLearnings} className={location.pathname === '/components/LearningsDepartmentPage' ? 'selected' : '' }>APRENDIZAJES</Text>
          <Text onClick={handleOnClickConclusions} className={location.pathname === '/components/ConclusionsPage' ? 'selected' : '' }>CONCLUSIONES</Text>
        </ContainerText>
      </div>
    )
  }
  
  export default Navbar