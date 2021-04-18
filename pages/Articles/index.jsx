import React from 'react'
import articles from "../../data/articles.json"
import {Event, Title ,Img,Image,Cardrev, Heading ,Card, Description, Details, DisplayFlex} from "./style-article.js"

import Footer from '../../components/Footer/Footer';

const Articles = () =>{
    let check=0;
    return(
        <div style={{zIndex:'1'}}>
        <Heading>ARTICLES</Heading>
        <DisplayFlex>   
            {articles['articles'].map((node) => (
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
           </div>
    );
}

export default Articles;