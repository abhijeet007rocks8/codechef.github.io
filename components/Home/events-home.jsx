import React, {useState} from 'react';
import{Card,Button,About,Imag,TitleImg,DisplayFlex,Discription,ETitle,Details,LCard} from './styles';
import events from "../../data/events.json"
import {FaAngleDoubleLeft,FaAngleDoubleRight} from 'react-icons/fa'

export default function events_home() {
    const [prev, setprev]=useState(1);
    const [middle, setmiddle]=useState(2);
    const [next, setnext]=useState(3);
    const [disableLeft,setdisableLeft]=useState(false);
    const [disableRight,setdisableRight]=useState(false);
    const data = events['events'];
    
    const nextevent = () =>{
        //  {middle==data.length?setmiddle(1):setmiddle(middle+1)}
        //  {prev==data.length?setprev(1):setprev(prev+1)}
        //  {next==data.length?setnext(1):setnext(next+1)}
        console.log(disableRight)
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
        //  {middle<=1?setmiddle(data.length):setmiddle(middle-1)}
        console.log(disableLeft)
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
        //  {next<=1?setnext(data.length):setnext(next-1)}

         console.log(prev,middle,next,disableLeft)
    }

    return (

        <div style={{display:'flex', flexDirection:'column',alignItems:'center' ,justifyContent:'center',margin:'1rem 2rem',marginTop:'5rem',overflowX:'hidden'}}>
            <TitleImg>
            <img src="/events-heading.png" width="100%" height="auto"></img>
            </TitleImg>
            
            <DisplayFlex>
                <Button onClick={previous} disabled={disableLeft}><FaAngleDoubleLeft fill="#000000"/></Button>
                   {data.map((node)=><>{node.id == prev && (<LCard>
                        <Imag>
                           <img src={node.eventpic} width="100%" height="auto"  alt=""/>
                        </Imag>

                    <Discription>
                        <ETitle>
                            {node.title}
                        </ETitle>
                        <Details>
                            {node.description}
                        </Details>
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
                            {node.description}
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
                        <Details>
                            {node.description}
                        </Details>
                    </Discription>
                    </LCard>}</>
                    )}
                <Button onClick={nextevent} disabled={disableRight}><FaAngleDoubleRight fill="#000000"/></Button>
            </DisplayFlex>
        </div>
    )
}
