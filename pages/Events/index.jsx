import React from 'react'
import events from "../../data/events.json"
//import {Event, Title ,Img, Cardrev, Heading ,Image,Card, Description, Details, DisplayFlex} from "./style-events.js"
import styled from 'styled-components'
import Footer from '../../components/Footer/Footer';

function Events(){
    let check=0;
    return(
        <>
        <div style={{display:'flex',justifyContent:'center'}}>
        <Heading>
          <img src="/imageasset/events-heading.png" width="100%" height="auto"></img>
        </Heading>
        </div>
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


const DisplayFlex = styled.div`
    padding:.2rem;
    display: flex;
    margin:2rem;
    width:-webkit-fill-available;
    align-items:center;
    justify-content:center;
    align-self:center;
    overflow-x: hidden;
    flex-direction:column;
    @media (max-width: 1024px){
        
    }
    @media (max-width: 768px) {
        
    }
    @media (max-width: 576px) {
      margin:.5rem;
    }
`;

  const Card=styled.span`
    display:flex;
    width: 100%;
    justify-content:center;
    height: fit-content;
    //background:#fff000;
    border-radius:1rem;
    align-items:center;
    overflow:hidden;
    margin:1rem;
    @media screen and (max-width:900px)
    {
      flex-direction: column;
      margin:.5rem;
      margin-bottom:.7rem;
    }
    @media screen and (max-width:767px)
    {
      flex-direction:column;
      margin:0rem;
      margin-bottom:.7rem;
    }
`;

  const Cardrev=styled.span`
    display:flex;
    width: 100%;
    justify-content:center;
    height: fit-content;
    //background:#fff000;
    align-items:center;
    border-radius:1rem;
    overflow:hidden;
    margin:1rem;
    
    @media screen and (max-width:900px)
    {
      flex-direction: column-reverse;
      margin:0rem;
      margin-bottom:.7rem;
    }

    @media screen and (max-width:767px)
    {
      flex-direction: column-reverse;
      margin:0rem;
      margin-bottom:.7rem;
    }
`;

  const Heading=styled.div` 
    margin-top: 2%;
    display:flex;
    justify-content:center;
    width:550px;
   @media screen and (max-width:565px){
      width:270px;
  }
`;

  const Details=styled.div`
    color:grey;
    font-size:1.5rem;
    display:flex;
    flex-wrap:wrap;
    margin:0.5rem 1rem;
    font-family:roboto;
    @media (max-width: 576px) {
      width:97%; 
      margin:0.5rem 0.3rem;
      font-size:1.2rem;
    }
`;

  const Img=styled.div` 
  margin:1rem;
`;
  const Image=styled.img` 
  border-radius:15px;
`;


  const Title=styled.div`
    font-family:"Quicksand",sans-serif;
    flex-wrap:wrap;
    font-size:1.8rem;
    font-weight:bold;
    margin: 1rem;
    @media (max-width: 767px) {
      width:97%; 
      margin:0.5rem 0.3rem;
      font-size:1.5rem;
    }
`;

  const Description=styled.div`
    display:flex;
    justify-self:center;
    flex-direction:column;
    flex-wrap:wrap;
    margin-right:2rem;
    padding-bottom:2rem;
    width:60%;
    border-radius: 10px;
    background: #FFFFFF;
    box-shadow:  15px 15px 10px #bababa;

    @media (max-width: 767px) {
        width:95%;
        margin-right: 0rem;
        box-shadow:  10px 10px 5px #bababa;
        padding-bottom:0rem;
        margin-bottom:1.1rem;
    }         
`;

  const Event=styled.div`
    display:"flex";
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:80%;
    @media (max-width: 767px) {
      width:100%; 
  }   
`;

export default Events;
