import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const MenuLink = styled(Link)`
  text-decoration: none;
`
export const ContainerNB = styled.div`
   background-color: #654AFF;
`
export const ContainerText = styled.div`
   display: flex;
   align-items: flex-start; 
`
export const Text = styled.button`
   font-size: 25px;
   color: white;
   padding: 0.9% 1% 0.9% 5%;
   font-weight: bold;
   background: none;
   border: none;
   &:hover {
      color: #8763FF;
      cursor: pointer;
   }
`