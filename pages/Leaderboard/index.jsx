import  React,{useState} from 'react'
import {Heading, HeaderStyled, TitleStyled, DisplayFlex, Card, Details , Name, Job,Container,DisplayGrid} from './style-leaderboard';
import { RiArrowDownSLine, RiArrowRightSLine } from "react-icons/ri";
import Footer from '../../components/Footer/Footer'
import leaderboard from '../../data/leaderboard.json';


export default function Leaderboard (){
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
                <Name>Name {subnode.name}</Name>
                <Job>Score {subnode.score}</Job>
                <Job>Position{subnode.position}</Job>
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

// export default Leaderboard;