import  { ContainerNB, ContainerText, Text }  from './styles'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const handleOnClickHome = () => {
    navigate('/')
  }
  const handleOnClickWhoAmI = () => {
    navigate('/components/WhoAmIPage')
  }
  const handleOnClickPersonalObjectives = () => {
    navigate('/components/PersonalObjectivesPage')
  }
  const handleOnClickTravelport = () => {
    navigate('/components/TravelportPage')
  }
  const handleOnClickConclusions = () => {
    navigate('/components/ConclusionsPage')
  }
    return (
      <ContainerNB>
        <ContainerText>
          <Text onClick={handleOnClickHome}>Home</Text>
          <Text onClick={handleOnClickWhoAmI}>Who am I</Text>
          <Text onClick={handleOnClickPersonalObjectives}>Personal objectives</Text>
          <Text onClick={handleOnClickTravelport}>Travelport</Text>
          <Text onClick={handleOnClickConclusions}>Conclusions</Text>
        </ContainerText>
      </ContainerNB>
    )
  }
  
  export default Navbar