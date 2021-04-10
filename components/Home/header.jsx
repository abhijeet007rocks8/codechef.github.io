import React from 'react'
import {HeaderImg,Signup} from './styles'

export default function header() {
    return (
        <div style={{width:'100%',height:'fit-content',display:'flex',flexDirection:'column',alignItems:'center',marginBottom:'10rem'}}>
               <HeaderImg>
                   <img src="/heading.png" width="80%" height="auto"></img>
                   <Signup><a href="" target="_blank">SIGN UP</a></Signup>
               </HeaderImg>
               {/* <Signup><a href="" target="_blank">SIGN UP</a></Signup> */}
        </div>
    );
}