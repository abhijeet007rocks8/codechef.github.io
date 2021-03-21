import React, { useState } from 'react'
//import {Header} from "./header"
//import {footer} from "./footer"
import {RiTwitterLine} from "react-icons/ri";
import {FaGithubAlt} from "react-icons/fa"
import {AiOutlineLinkedin} from "react-icons/ai"
import {Name,Img,LineB,Job, Heading ,Card, Description, Profile, Social, Details, DisplayGrid} from "./team-styles.js"
import teamdata from "../../data/team.json"


const Team = ()=>{
    return (
        <>
    {/* <Header/> */}
    <Heading>OUR TEAM</Heading>
    <DisplayGrid>
        {teamdata['teammember'].map((node) => (
        <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
        <Profile>
        <Card>
           <Img>
           <img src={node.profilepic} width="100%"></img>
           <Description>{node.description}</Description>
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
       </>
    )
};
export default Team;
