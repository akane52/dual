import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const MenuLink = styled(Link)`
  text-decoration: none;
`
export const ContainerText = styled.div`
   display: flex;
   justify-content: center; 
`
export const Text = styled.button`
   font-size: 1.3rem;
   font-family: monospace;
   color: black;
   padding: 0.9% 1% 0.5% 3%;
   border: none;
   font-weight: bold;
   background: none;
   &:hover {
      color: grey;
      cursor: pointer;
   }
   &.selected {
      font-weight: bold;
      color: #94A8B3;
      text-decoration: underline;
   }
`
