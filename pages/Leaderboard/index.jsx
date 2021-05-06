import  React,{useState} from 'react'
import styled from 'styled-components';
import Footer from '../../components/Footer/Footer'
import leaderboard from '../../data/leaderboard.json';
import Leadercomp from '../../components/Leaderdivision/leadercomp';

function Leaderboard (){
      return(
          <>
          <div style={{display:'flex',justifyContent:'center'}}> 
      <Heading>
          <img src="/imageasset/Leaderboard.png" width="100%" height="auto"></img>
      </Heading>
      </div>
        {leaderboard['events'].map((node)=>(
        <Leadercomp {...node} /> 
        ))}
    <Footer/>
          </>
      );  
}

const Heading=styled.div`
  width:550px;
  @media screen and (max-width:565px){
     width:270px;
 }
`;

export default Leaderboard;