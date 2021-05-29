import React, {useState} from 'react';
import{Card,Button,Imag,TitleImg,DisplayFlex,Discription,ETitle,Details,LCard,Desktop,Mobile} from './styles';
import events from "../../data/events.json"
import {FaAngleDoubleLeft,FaAngleDoubleRight} from 'react-icons/fa'
import Link from 'next/link'
import styled from 'styled-components'

export default function events_home() {
    const [prev, setprev]=useState(1);
    const [middle, setmiddle]=useState(2);
    const [next, setnext]=useState(3);
    const [disableLeft,setdisableLeft]=useState(false);
    const [disableRight,setdisableRight]=useState(false);
    const [counter,setcounter]=useState(1);
    const data = events['events'];
    
    const nextevent = () =>{
        console.log(disableRight)
        
        if(counter<=data.length)
        setcounter(counter+1)
        
        if(prev<=1)
        setdisableLeft(false)
        
        if(next==data.length){
            setdisableRight(true)
        }
        else{
            setnext(next+1)
            setmiddle(middle+1)
            setprev(prev+1)
        }

        
         console.log(prev,middle,next,disableRight)
    }
    
    const previous = () =>{
        console.log(disableLeft)
        
        if(counter>1)
        setcounter(counter-1)

        if(next==data.length)
        setdisableRight(false)
         if(prev<=1){
             setdisableLeft(true)
         }
         else{
             setnext(next-1)
             setmiddle(middle-1)
             setprev(prev-1)
         }
       
         console.log(prev,middle,next,disableLeft)
    }

    return (

        <EventHome style={{}}>
            <TitleImg>
            <img src="/imageasset/events-heading.png" width="100%" height="auto"></img>
            </TitleImg>
            
            <DisplayFlex>
                <Button onClick={previous} disabled={disableLeft}><FaAngleDoubleLeft /></Button>
                <Desktop>{data.map((node)=><>{node.id == prev && (<LCard>
                        <Imag>
                           <img src={node.eventpic} width="100%" height="auto"  alt=""/>
                        </Imag>

                    <Discription>
                        <ETitle>
                            {node.title}
                        </ETitle>
                        <LDetails>
                            {(node.description).length<=175?node.description:(node.description).substring(0,160)+" ......."}
                            <div style={{color:'blue'}}><Link href="/Events">Read More</Link></div>
                        </LDetails>
                    </Discription>
                    </LCard>)}
                    
                    {node.id == middle && <Card>
                        <Imag>
                           <img src={node.eventpic} width="100%" height="auto" alt=""/>
                        </Imag>

                    <Discription>
                        <ETitle>
                            {node.title}
                        </ETitle>
                        <Details>
                            {(node.description).length<=175?node.description:(node.description).substring(0,160)+" ......."}
                            <div style={{color:'blue'}}><Link href="/Events">Read More</Link></div>
                        </Details>
                    </Discription>
                    </Card>}

                    {node.id == next && <LCard>
                        <Imag>
                           <img src={node.eventpic} width="100%" height="auto" alt=""/>
                        </Imag>

                        
                    <Discription>
                        <ETitle>
                            {node.title}
                        </ETitle>
                        <LDetails>
                        {(node.description).length<=175?node.description:(node.description).substring(0,160)+" ......."}
                            <div style={{color:'blue'}}><Link href="/Events">Read More</Link></div>
                        </LDetails>
                    </Discription>
                    </LCard>}
                    </>
                    )}
                    </Desktop>

                    <Mobile>
                    {data.map((node)=>node.id == counter && <Card>
                        <Imag>
                           <img src={node.eventpic} width="100%" height="auto" alt=""/>
                        </Imag>

                    <Discription>
                        <ETitle>
                            {node.title}
                        </ETitle>
                        <Details>
                        {(node.description).length<=175?node.description:(node.description).substring(0,160)+" ......."}
                            <div style={{color:'blue'}}><Link href="/Events">Read More</Link></div>
                        </Details>
                    </Discription>
                    </Card>)}
                    </Mobile>

                {<Button onClick={nextevent} disabled={disableRight}><FaAngleDoubleRight /></Button>}
            </DisplayFlex>
        </EventHome>
    )
}

const EventHome = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin:1rem 3rem;
    margin-top:5rem;
    overflow-x:hidden;
    @media (max-width: 576px) {
    margin:1rem -1rem;
    }
`;

const LDetails = styled.div`
    color:grey;
    font-size:1.1rem;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    margin:0.3rem 1rem;
    font-family:roboto;
    @media (max-width: 576px) {
      width:97%; 
      margin:0.5rem 0.3rem;
      font-size:1rem;
    }

`;


