import React from 'react'
import events from "../../data/events.json"
import {Container, Title ,Img,LineB,Job, Heading ,Card, Description, DescriptionContent, Profile, Social, Details, DisplayGrid} from "./style-events.js"
import Footer from '../../components/Footer/Footer';

const Events = () =>{
    return(
        <>
        <Heading>EVENTS</Heading>
        <Container>
        <DisplayGrid>   
            {events['events'].map((node) => (
            <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",alignSelf:"center"}}>
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
            </div>
              ))}
        </DisplayGrid>
           {/* <footer/> */}
           </Container>
           <Footer/>    
           </>
    );
}

export default Events;