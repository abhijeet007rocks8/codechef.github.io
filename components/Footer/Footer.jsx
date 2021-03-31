import React from "react";
import {
  SiDiscord,
  SiTwitter,
  SiGithub,
  SiFacebook,
  SiInstagram,
  SiLinkedin,
  SiYoutube,
  SiMedium,
  SiReddit,
  SiCodechef
} from "react-icons/si";
import styled from "styled-components";
import {Back,BackImg} from './footer-style';

const Footer = () => (
  <>
  
    <BackImg>
      <Back src="/imageasset/footer.png"/>
    </BackImg>
    <Container>
         {/* <MobileTitle>
        Made with ❤️ by DSC Web Team | Contribute to our  
      Coders Assemble
      <GithubATag href="">
        {" "}
        Github
      </GithubATag>
    </MobileTitle> */}
    <Flex>
      <Title>
        VIT BHOPAL CHAPTER
      </Title>
      <Social>
      <a href="#" target="_blank">
        <Icon style={{margin:".5rem"}}>
          <SiMedium color="#000" />
        </Icon>
      </a>
      <a href="#" target="_blank">
        <Icon style={{margin:".5rem"}}>
          <SiFacebook color="#3b5999" />
        </Icon>
      </a>
      <a href="#" target="_blank">
        <Icon style={{margin:".5rem"}}>
          <SiTwitter color="#55acee" />
        </Icon>
      </a>
      <a href="#" target="_blank">
        <Icon style={{margin:".5rem"}}>
          <SiInstagram color="#e1306c" />
        </Icon>
      </a>
      <a href="#"target="_blank">
        <Icon style={{margin:".5rem"}}>
          <SiYoutube color="#cd201f" />
        </Icon>
      </a>
      <a href="#" target="_blank" >
        <Icon style={{margin:".5rem"}}>
          <SiGithub color="#333" />
        </Icon>
      </a>
      <a href="#" target="_blank">
        <Icon style={{margin:".5rem"}}>
          <SiDiscord color="#7289da" />
        </Icon>
      </a>
      <a href="#" target="_blank">
        <Icon style={{margin:".5rem"}}>
          <SiLinkedin color="#0077b5" />
        </Icon>
      </a>
      <a href="#" target="_blank">
        <Icon style={{margin:".5rem"}}>
          <SiReddit color="#0077b5" />
        </Icon>
      </a>
      <a href="#" target="_blank">
        <Icon style={{margin:".5rem"}}>
          <SiCodechef color="#0077b5" />
        </Icon>
      </a>
      </Social>
    </Flex>    
    </Container>
  </>
);

export default Footer;

const Title = styled.div`
  font-size: 1.7rem;
  font-weight: bolder;
  color:white;
  text-align: left;
  padding-top: 0.5rem;
  @media (max-width: 991px) {
    font-size: 1.3rem;
  }
  @media (max-width: 575px) {
    font-size: 1.1rem;
  }
`;

const MobileTitle = styled.div`
  display: none;
  @media (max-width: 991px){
    display: block;
    font-weight: bolder;
    text-align: center;
    font-size: 15px;
    padding-bottom: 1.5rem;
  }
  @media (max-width: 575px) {
    display: block;
    font-size: 10px;
    font-weight: bolder;
    text-align: center;
    padding-bottom: 1.5rem;
  }
`;

const Flex = styled.div`
  display: flex;
  margin-top:6rem;
  justify-content:space-around;
  flex-wrap:wrap;
  //flex-direction:column;
  @media (max-width: 575px) {
    margin-top:3rem;
  }
`;

const GithubATag = styled.a`
  text-decoration: none;
  color: #0099ff;
`;

const Icon = styled.div`
  background: white;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 1.2rem;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.03);
  &:hover {
    cursor: pointer;
  }
}`;

const Section = styled.section`
  padding: 5rem 0rem;
  
`;

// const commonTheme = {
//     screen: {
//       xs: "575px",
//       sm: "767px",
//       md: "991px",
//       lg: "1199px",
//     },
//   };
const Container = styled.div`
  display:flex;
  align-items:center;
  margin: 0px auto;
  margin-top:1.5rem;
  /* Extra small devices (phones, 575px and down) */
  @media (max-width: 575px) {
    padding: 0rem 1rem;
  }
  /* Small devices (portrait tablets and large phones, 575px and up) */
  @media (min-width: 575px) {
    max-width: 520px;
  }
  /* Medium devices (landscape tablets, 767px and up) */
  @media (min-width: 767px) {
    max-width: 700px;
  }
  /* Large devices (laptops/desktops, 991px and up) */
  @media (min-width: 991px) {
    max-width: 900px;
  }
  /* Extra large devices (large laptops and desktops, 1199px and up) */
  @media (min-width: 1199px) {
    max-width: 1100px;
  }
`;

const Social = styled.div`
  display:flex;
  margin-top:1rem;
  margin-left:17rem;
  justify-content:space-around;
  flex-wrap:wrap;
  @media (max-width: 991px) {
   margin-left:2rem;
  }
  @media (max-width: 575px) {
    margin-left:2rem;
  }
`;