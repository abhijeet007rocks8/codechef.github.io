import React from 'react'
import {Heading} from './styles'
import upcoming from '../../data/upcoming.json'
import styled from "styled-components";
import {
    SiTwitter,
    SiFacebook,
    SiInstagram,
    SiLinkedin,
    SiYoutube,
  } from "react-icons/si";
  

export default function Upcoming() {
    return (
        <div style={{marginTop:'3rem',marginBottom:'6rem',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <Heading style={{fontFamily:'Segoe UI'}}>Be Ready For</Heading>
            {upcoming['upcoming'].map((node)=>
            <Card>
               <Imag>
                   <img src={node.poster} height="auto" width="100%" alt=""/>
               </Imag>
                <Text style={{display:'flex',flexDirection:'column'}}>
                    <Event>{node.title}</Event>
                    <Time>{node.timing}</Time>
                    <Description>{node.description}</Description>
                    <Register>Register here: <a href={node.register} style={{color:'blue'}}>{node.register}</a></Register>
                </Text>
                <Social>
                    <UpcomingE>
                        <img src="/ue.png" width="200px" height="200px" alt=""></img>
                    </UpcomingE>
                   <a href={node.social.linkedin} target="_blank">
                        <Icon style={{margin:".5rem"}}>
                            <SiLinkedin color="#fff" />
                        </Icon>
                    </a>
                   <a href={node.social.twitter} target="_blank">
                        <Icon style={{margin:".5rem"}}>
                            <SiTwitter color="#fff" />
                        </Icon>
                    </a>
                   <a href={node.social.instagram} target="_blank">
                        <Icon style={{margin:".5rem"}}>
                            <SiInstagram color="#fff" />
                        </Icon>
                    </a>
                </Social>
            </Card>
            )}
        </div>
    );
}

const Card = styled.div`
    display:flex;
    width:fit-content;
    width:90%;
    align-items:center;
    justify-content:space-between;
    justify-self:center;
    height: fit-content;
    //border: 3px solid #102E46;
    border-radius: 10px;
    background: #FFFFFF;
    box-shadow:  15px 15px 30px #bababa;
    margin: 1rem 3rem;

    @media screen and (max-width:565px){
        margin:1rem 0rem;
        flex-direction:column;
        width:85%
    }
`;

const UpcomingE =styled.div`
    margin-top:-3rem;
    top:0;
    left:90%;
    @media screen and (max-width:565px){
    display:none;
    }
`;

const Event =styled.div`
   font-size:2.5rem;
   margin: .6rem 0rem;
   font-weight:bold;
   flex-wrap:wrap;
   @media (max-width: 575px) {
    font-size:1.8rem;
    }
`;

const Text = styled.div`
    margin: 0rem 2rem; 
    font-family:Segoe UI;
`;

const Time = styled.div`
    font-size:1.3rem;
    margin-top:0.6rem;
    margin-bottom:2rem;
    font-weight:bold;
    @media (max-width: 575px) {
        font-size:1.1rem;
    }
`;

const Description = styled.div`
    font-size:1.1rem;
    @media (max-width: 575px) {
    font-size:0.9rem;
    }
`;

const Register = styled.div`
      margin-top:2rem;
      font-size:1.3rem;
      font-weight:bold;
`;

const Icon = styled.div`
  background: #4a74f5;
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

const Social = styled.div`
  display:flex;
  margin-top:1rem;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  //margin-left:6rem;
  flex-wrap:wrap;
  z-index:1;
  @media (max-width: 991px) {
   margin-left:2rem;
  }
  @media (max-width: 575px) {
    margin-left:0rem;
    flex-direction:row;
    align-self:center;
  }
`;

const Imag =styled.div`
  height:auto;
  width:100%;
  border-top-left-radius:10px;
  border-top-right-radius:0px;
  border-bottom-left-radius:10px;
  overflow:hidden;
  @media (max-width: 575px) {
    width:100%;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
    border-bottom-left-radius:0px;
  }
`;
