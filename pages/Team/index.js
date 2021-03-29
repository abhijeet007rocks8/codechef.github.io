import React, { useState } from 'react'
//import {Header} from "./header"
//import {footer} from "./footer"
import Navbar from '../../components/Navbar/Navbar.js'
import {RiTwitterLine} from "react-icons/ri";
import {FaGithubAlt} from "react-icons/fa"
import {AiOutlineLinkedin} from "react-icons/ai"
import {Container ,Name,Img,LineB,Job, Heading ,Card, Description, DescriptionContent, Profile, Social, Details, DisplayGrid} from "./team-styles.js"
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
    <Container>
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
       </Container>
       <Footer/>
      </> 
         )
};
// export default Team;
