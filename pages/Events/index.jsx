import React from 'react'
import events from "../../data/events.json"
import {Event, Title ,Img, Cardrev, Heading ,Image,Card, Description, Details, DisplayFlex} from "./style-events.js"
import Footer from '../../components/Footer/Footer';

function Events(){
    let check=0;
    return(
        <>
        <Heading>EVENTS</Heading>
        <DisplayFlex>   
            {events['events'].map((node) => (
            // <div style={{display:"flex",flexDirection:"column",alignSelf:"center",justifyContent:"center", width:"-webkit-fill-available"}}>
            <Event>
            {++check%2!=0 && <Card>
               <Img>
               <Image src={node.eventpic} width="100%"></Image>                 
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

            {check%2==0 && <Cardrev>
               <Description>
                <Title>
                      {node.title}
                </Title>
                <Details>
                      {node.description}
                </Details>
              </Description>
              <Img>
               <Image src={node.eventpic} width="100%"></Image>                 
               </Img>
            </Cardrev>}

            </Event>
              ))}

        </DisplayFlex>
           {/* <footer/> */}
           <Footer/>    
           </>
    );
}

export default Events