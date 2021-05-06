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

const Footer = () => (
  <>
    <BackImg>
      <Back src="/imageasset/footer.png"/>
    </BackImg>
    <Container>
    <Flex>
    <Logo src="/imageasset/ccwhite2.png"/>
      <Title>
        VIT BHOPAL CHAPTER
      </Title>
      <Social>
      <a href="https://medium.com/codechef-vit-bhopal" target="_blank">
        <Icon style={{margin:".5rem"}}>
          <SiMedium color="#000" />
        </Icon>
      </a>
      <a href="https://www.facebook.com/codechefvitbhopal/" target="_blank">
        <Icon style={{margin:".5rem"}}>
          <SiFacebook color="#3b5999" />
        </Icon>
      </a>
      <a href="https://twitter.com/codechefvitb" target="_blank">
        <Icon style={{margin:".5rem"}}>
          <SiTwitter color="#55acee" />
        </Icon>
      </a>
      <a href="https://www.instagram.com/codechefvitbhopal/" target="_blank">
        <Icon style={{margin:".5rem"}}>
          <SiInstagram color="#e1306c" />
        </Icon>
      </a>
      <a href="https://www.youtube.com/channel/UCnN2MXUF5ufqof-VSsXVn7Q"target="_blank">
        <Icon style={{margin:".5rem"}}>
          <SiYoutube color="#cd201f" />
        </Icon>
      </a>
      <a href="https://github.com/codechefvitbhopal" target="_blank" >
        <Icon style={{margin:".5rem"}}>
          <SiGithub color="#333" />
        </Icon>
      </a>
      <a href="https://discord.gg/kSg6X4tFBx" target="_blank">
        <Icon style={{margin:".5rem"}}>
          <SiDiscord color="#7289da" />
        </Icon>
      </a>
      <a href="https://www.linkedin.com/company/codechefvitbhopal" target="_blank">
        <Icon style={{margin:".5rem"}}>
          <SiLinkedin color="#0077b5" />
        </Icon>
      </a>
      </Social>
      <Copyright>© Copyright 2021 | CodeChef VIT Bhopal | All Rights Reserved</Copyright>
    </Flex>
    <Image>
        <img src="/imageasset/chefgrad.png" alt="" width="auto" height="280px"></img>
    </Image>
    </Container>
  </>
);


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
    padding-top:1rem;
  }
`;


const Flex = styled.div`
  display: flex;
  margin-top:2rem;
  margin-left: 0.2rem;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  flex-wrap:wrap;
  z-index:1;

  @media screen and (min-width: 767px){
    margin-top:9rem;
    margin-left:2rem;
    align-items:unset;
    justify-content:unset;
}
`;

const Icon = styled.div`
  background: white;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 1.5rem;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.03);
  transition: width .35s ease-in-out;
  transition: height .35s ease-in-out;
  &:hover {
    cursor: pointer;
    width: 60px;
    height: 60px; 
  }
  @media (max-width: 991px) {
   font-size:1.3rem;
   width: 45px;
  height: 45px; 
  }
  @media (max-width: 575px) {
    font-size:1.1rem;
    width: 40px;
    height: 40px; 
  }
}`;


const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  width:100%;
  margin: 0px auto;
  margin-top:1.5rem;
  /* Extra small devices (phones, 575px and down) */
  @media (max-width: 575px) {
    padding: 0rem 0rem;
    
  }
  /* Small devices (portrait tablets and large phones, 575px and up) */
  @media (min-width: 575px) {
  }
  /* Medium devices (landscape tablets, 767px and up) */
  @media (max-width: 767px) {
    background:#4a74f5;
    justify-content:center;
    width: 100%;
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
  justify-content:center;
  //margin-left:6rem;
  flex-wrap:wrap;
  z-index:1;
  @media (max-width: 991px) {
   margin-left:2rem;
  }
  @media (max-width: 575px) {
    margin:0.3rem 5rem;
    align-self:center;
  }
  @media (max-width: 380px) {
    margin:0.3rem 4rem;
    align-self:center;
  }
`;

const Image = styled.div`
z-index:1;
  @media (max-width: 768px) {
     display:none;
   }
`;

const Back = styled.img`
    height:400px;
    width:100%;
    display: list-item;
    @media (max-width: 765px) {
        height:500px;
  }
`;
const BackImg = styled.div`
    position:absolute;
    left:0;
    z-index:0;
    @media (max-width: 767px){
        display:none;
    }
`;

const Logo = styled.img`
     width:150px;
     margin-bottom:2px;
`;

const Copyright =styled.p`
    display:flex;
    flex-wrap:wrap;
    color:white;
    text-align:left;
    margin: 0.4rem 3rem;
    @media (max-width: 767px){
    text-align:center;
    }
`; 

export default Footer;
