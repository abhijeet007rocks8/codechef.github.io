import  React,{useState} from 'react'
//import {Heading, HeaderStyled, TitleStyled, DisplayFlex, Card, Details , Name, Job,Container,DisplayGrid} from './style-leaderboard';
import styled from 'styled-components';
import { RiArrowDownSLine, RiArrowRightSLine } from "react-icons/ri";
import Footer from '../../components/Footer/Footer'
import leaderboard from '../../data/leaderboard.json';


function Leaderboard (){
   //leaderboard['events'].reverse()
   const [expanded, setExpanded] = useState(true);
      return(
          <>
      <Heading>LeaderBoard</Heading> 
        {leaderboard['events'].map((node)=>(
         <div style={{display:"block", width:"-webkit-fill-available", margin:"1rem 2rem"}}>
      <HeaderStyled onClick={() => setExpanded(!expanded)}>
      <TitleStyled>{node.eventname}</TitleStyled>
      {expanded ? <RiArrowDownSLine /> : <RiArrowRightSLine />}
      </HeaderStyled>
      {expanded && (<DisplayGrid>
          {node.ranking.map((subnode)=>(
             <Card>
             <Details>
                <Position>{subnode.position}</Position>
                <Name> {subnode.name}</Name>
                <Score> {subnode.score}</Score>
             </Details>
          </Card> 
     ))}
      </DisplayGrid>)}
       </div>
    ))}
    <Footer/>
          </>
      );
  
}



  const Heading=styled.div`
    font-size:3rem; 
    color:#102E46;
    margin-top:1rem;
    padding-bottom:2rem;
    text-align:center;
    font-weight:bold;
    font-family:san-serif;
`;

  const DisplayGrid = styled.div`
    padding:1rem;
    display: grid;
    width:97%;
    margin-bottom:2rem;
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
        margin-bottom:3rem;
    }
`;

  const Card=styled.span`
    display:flex;
    width: 95%;
    align-items:center;
    justify-content:center;
    justify-self:center;
    height: fit-content;
    max-width:315px;
    //border: 3px solid #102E46;
    border-radius: 10px;
    background: #FFFFFF;
    box-shadow:  15px 15px 30px #bababa;
             

    
`;

  const Details=styled.div`
    font-family:"Quicksand",sans-serif;
    flex-wrap:wrap;
    color:grey;
    font-size:1.1rem;
    margin:5%;
    display:flex;
    flex-direction:column;
    align-self:left;
    width:100%;
    font-family:roboto;
    @media (max-width: 576px) {
      width:100%; 
    }
`;

  const HeaderStyled = styled.div`
    font-family:"Quicksand",sans-serif;
    flex-wrap:wrap;
    display: flex;
    margin:2% 5%;
  font-size: 2.2rem;
  -webkit-box-pack: justify;
  justify-content: space-between;
  cursor: pointer;
`;

  const TitleStyled = styled.div`
  font-size: 1.7rem;
  font-weight: bold;
`;

const Name=styled.p`
font-weight:bold;
color: #102E46;
margin-block-start: 0.3em;
margin-block-end: 0em;
font-size:18px;
@media (max-width: 576px){
font-size:15px;}
`;

const Position=styled.p`
font-weight:bold;
color: #102E46;
margin-block-start: 0.5em;
margin-block-end: 0em;
font-size:20px;
@media (max-width: 576px){
font-size:17px;}
`;

const Score=styled.p`
margin:0.3rem 0rem;
margin-block-start: 0em;
margin-block-end: 0em;
color: #102E46;
font-size:16px;
@media (max-width: 576px){
font-size:16px;}
`;

export default Leaderboard;