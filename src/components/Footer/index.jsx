import React from "react";
import github from "../../resources/images/github.png";
import linkedin from "../../resources/images/linkedin.png";
import { FooterDiv, SocialLinksDiv, SocialLink, LinkedinLogo, GithubLogo } from "./styles"

const Footer = () => {
    return (
        <FooterDiv >
          <p>Copyright &copy; 2022 Lucia Todos los derechos reservados</p>
          <SocialLinksDiv>
            <SocialLink href='https://github.com/akane52'>
              <GithubLogo src={github} alt="Github logo"></GithubLogo>
            </SocialLink>
            <SocialLink href='https://www.linkedin.com/in/lucia-lozano-montes-65b970263/'>
              <LinkedinLogo src={linkedin} alt="Linkedin logo"></LinkedinLogo>
            </SocialLink>
          </SocialLinksDiv>
        </FooterDiv>
      )
};

export default Footer;
