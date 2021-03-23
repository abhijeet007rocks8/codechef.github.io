import React from 'react'
import events from "../../data/events.json"
import {Container, Title ,Img, Heading ,Card,Details, DisplayGrid} from "./style-article.js"
import Footer from '../../components/Footer/Footer';

const Articles = () =>{
    return(
        <>
        <Heading>ARTICLES</Heading>
        <Container>
        <DisplayGrid>   
            {events['events'].map((node) => (
            <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",alignSelf:"center"}}>
            <a href={node.link}>
            <Card>
               <Img>
               <img src={node.eventpic} width="100%"></img>                 
               </Img>
                <Title>
                      {node.title}
                </Title>
                <Details>
                      {node.description}
                </Details>
            </Card>
            </a>
            </div>
              ))}
        </DisplayGrid>
           {/* <footer/> */}
           </Container>
           <Footer/>    
           </>
    );
}

export default Articles;