import React from 'react'
import events from "../../data/events.json"
import {Container, Title ,Img,LineB,Job, Heading ,Card, Description, DescriptionContent, Profile, Social, Details, DisplayFlex} from "./style-events.js"
import Footer from '../../components/Footer/Footer';

const Events = () =>{
    let check=0;
    return(
        <>
        <Heading>EVENTS</Heading>
        <DisplayFlex>   
            {events['events'].map((node) => (
            <div style={{display:"flex",flexDirection:"column",alignSelf:"center",justifyContent:"center", width:"-webkit-fill-available"}}>
            
            {++check%2!=0 && <Card>
               <Img>
               <img src={node.eventpic} width="100%"></img>                 
               </Img>
               <Description>
                <Title>
                      {node.title}
                </Title>
                <Details>
                      {node.description}
                </Details>
              </Description>
            </Card>}

            {check%2==0 && <Card>
               <Description>
                <Title>
                      {node.title}
                </Title>
                <Details>
                      {node.description}
                </Details>
              </Description>
              <Img>
               <img src={node.eventpic} width="100%"></img>                 
               </Img>
            </Card>} 
            </div>
              ))}

        </DisplayFlex>
           {/* <footer/> */}
           <Footer/>    
           </>
    );
}

export default Events;