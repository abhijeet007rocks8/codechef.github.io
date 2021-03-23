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
} from "react-icons/si";
import styled from "styled-components";


const Footer = () => (
  <Container>
    <MobileTitle>
      Made with ❤️ by DSC Web Team | Contribute to our
      <GithubATag href="https://github.com/DSCVITBHOPAL/dscvitbhopal.github.io">
        {" "}
        Github
      </GithubATag>
    </MobileTitle>
    <Flex>
      <Title>
        Made with ❤️ by Web Team | Contribute to our
        <GithubATag href="#">
          {" "}
          Github
        </GithubATag>
      </Title>
      <a href="#" target="_blank">
        <Icon>
          <SiMedium color="#000" />
        </Icon>
      </a>
      <a href="#" target="_blank">
        <Icon>
          <SiFacebook color="#3b5999" />
        </Icon>
      </a>
      <a href="#" target="_blank">
        <Icon>
          <SiTwitter color="#55acee" />
        </Icon>
      </a>
      <a href="#" target="_blank">
        <Icon>
          <SiInstagram color="#e1306c" />
        </Icon>
      </a>
      <a
        href="#"
        target="_blank"
      >
        <Icon>
          <SiYoutube color="#cd201f" />
        </Icon>
      </a>
      <a href="#" target="_blank">
        <Icon>
          <SiGithub color="#333" />
        </Icon>
      </a>
      <a href="#" target="_blank">
        <Icon>
          <SiDiscord color="#7289da" />
        </Icon>
      </a>
      <a href="#" target="_blank">
        <Icon>
          <SiLinkedin color="#0077b5" />
        </Icon>
      </a>
    </Flex>
  </Container>
);

export default Footer;

const Title = styled.div`
  font-size: 15px;
  font-weight: bolder;
  text-align: left;
  padding-top: 0.5rem;
  @media (max-width: 991px) {
    font-size: 8px;
  }
  @media (max-width: 575px) {
    font-size: 10px;
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
  display: grid;
  grid-template-columns: 30fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 2rem;
  margin: 100px auto 30px auto;
  @media (max-width: 991px) {
    display: none;
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
  margin: 0px auto;
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