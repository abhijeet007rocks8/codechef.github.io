import React, { useState } from 'react'
//import {Header} from "./header"
//import {footer} from "./footer"
import {RiTwitterLine} from "react-icons/ri";
import {FaGithubAlt} from "react-icons/fa"
import {AiOutlineLinkedin} from "react-icons/ai"
//import {Container, DisplayFlex ,Name,Img,LineB,Job, Heading ,Card, Description, DescriptionContent, Profile, Social, Details, DisplayGrid} from "./team-styles.js"
import styled from 'styled-components'
import teamdata from "../../data/team.json"
import '../../styles/Home.module.css'
import Footer from '../../components/Footer/Footer';


export default function Team(){
    
   return (
      <>
        <style>
         @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap');
        </style>
      {/* <Navbar/> */}
  <Heading>OUR TEAM</Heading>
    <DisplayFlex>
    <DisplayGrid>   
        {teamdata['teammember'].map((node) => (
        <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
        <Profile>
        <Card>
           <Img>
           <img src={node.profilepic} width="100%"></img>
              <Description>
                  <DescriptionContent>
                   {node.description}
                  </DescriptionContent>
              </Description>
           </Img>
        </Card>
         <Social>
            <div style={{marginBottom:".3rem"}}><a href={node.social.linkedin}><AiOutlineLinkedin fill="#102E46"/></a></div>
            <div style={{marginBottom:".3rem"}}><a href={node.social.github}><FaGithubAlt fill="#102E46"/></a></div>
            <div style={{marginBottom:".3rem"}}><a href={node.social.twitter}><RiTwitterLine fill="#102E46"/></a></div>
            <LineB style={{marginTop:".5rem",marginLeft:".6rem",width:"3px",background:"#102E46"}}></LineB>
         </Social>
         </Profile>
         <Details>
         <Name>{node.name}</Name>
         <Job>{node.title}</Job>
        </Details>
        </div>
          ))}
    </DisplayGrid>
       {/* <footer/> */}
       </DisplayFlex>
       <Footer/>
      </> 
      )
};



  const DisplayFlex = styled.div`
    padding:.2rem;
    display: flex;
    margin: 2rem 10rem;
    width:-webkit-fill-available;
    align-items:center;
    justify-content:center;
    justify-self:center;
    align-self:center;
    overflow-x: hidden;
    flex-direction:column;
    
    @media (max-width: 1200px){
        margin: 2rem;
    }
    @media (max-width: 1024px){
        margin: 2rem;
    }
    @media (max-width: 768px) {
        margin: 2rem;
    }
    @media (max-width: 576px) {
      margin:.5rem;
    }
`;


  const DisplayGrid = styled.div`
    padding:1rem;
    display: grid;
    overflow-x: hidden;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 2rem;
    grid-row-gap:2rem;
    @media (max-width: 1024px){
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 1rem;
    }
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        padding:.8rem;
    }
    @media (max-width: 576px) {
        grid-template-columns: 1fr;
        padding: .5rem;
    }
`;

  const Profile=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`;
  const Card=styled.span`
    display:flex;
    width: fit-content;
    height: fit-content;
    max-width:315px;
    //border: 3px solid #102E46;
`;
  const Social=styled.span`
   display:flex;
   margin-left:.6rem;
   flex-direction:column;
   align-self:flex-end;
   font-size:1.4rem;
   color:dark-blue;
`;
  const Heading=styled.div`
    font-size:3rem; 
    color:#102E46;
    margin-top:1rem;
    padding-bottom:2rem;
    text-align:center;
    font-weight:bold;
    font-family:san-serif;
`;
  const Details=styled.div`
    color:grey;
    font-size:1.1rem;
    display:flex;
    flex-direction:column;
    align-self:left;
    width:100%;
    margin-left:.2rem;
    font-family:roboto;
    @media (max-width: 576px) {
      width:100%; 
    }
`;
  const Name=styled.p`
font-weight:bold;
color: #102E46;
margin-block-start: 1em;
margin-block-end: 0em;
font-size:20px;
@media (max-width: 576px){
font-size:17px;}
`;
  const Job=styled.p`
margin-block-start: 0em;
margin-block-end: 0em;
color: #102E46;
font-size:15px;
@media (max-width: 576px){
font-size:15px;}
`;
  const LineB=styled.div`
    height:9.9rem;
    background:"#0000CD";
    width:"3px" ;
    marginTop:".6rem";
    marginLeft:".6rem"; 
    @media (max-width: 576px) {
        height:7rem;
    }
`;
  const Img=styled.div`
    -webkit-clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 25%, 75% 0);
    clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 25%, 75% 0);
    border: 3px solid #102E46;
    position: relative;
`;

  const DescriptionContent=styled.p`
    font-size:1.25rem;
    margin-top:0.15rem;
    display:flex;
    justify-content:center;
`;


  const Description=styled.span`
    position: absolute;
    opacity:60%;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background: rgba(0,0,0,0.6);
    font-family: "Quicksand" ,sans-serif;
    color:#ffffff;
    font-weight:bold;
    display:flex;
    flex-direction: column;
    justify-content:center;
    backdrop-filter:blur(3px);
    opacity:0;
    transition: opacity 0.75s;
    
    p${DescriptionContent}{
        transform: translateY(30px);
        transition: transform 0.75s;
    }
    
    :hover{
        opacity:1;

        p${DescriptionContent}{
            transform: translateY(0px);
        }
    }
`;
