import React from 'react'
import {Header,HeaderImg,Signup} from './styles'

export default function header() {
    return (
        <Header style={{width:'100%',height:'fit-content',display:'flex',flexDirection:'column',alignItems:'center'}}>
               <HeaderImg>
                   <img src="/imageasset/heading.png" width="75%" height="auto"></img>
                   <Signup><a href="https://www.codechef.com/college-chapter/member" target="_blank">SIGN UP</a></Signup>
               </HeaderImg>
        </Header>
    );
}