import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";
//import Logoimg from '../../public/imageasset/ccwhite.png'
import {GiHamburgerMenu} from 'react-icons/gi'
import {Nav,Logo,NavMenu,NavItem,BackImg,Back,MobNav} from './nav-styles'
import { ImCross } from "react-icons/im";

const Navbar = () =>{

  const router = useRouter();
  const[show,setshow]=useState(false);
  return(
    <>
    <BackImg>
      <Back src="/imageasset/navbg.png"/>
    </BackImg>
    <Nav>
    <Logo src="/imageasset/ccwhite.png" />
    
    <MobNav>
        {!show && <GiHamburgerMenu fill="#ffffff" fontSize="1.5rem" onClick={()=>setshow(true)}/>}
        {show && <ImCross fill="#ffffff" fontSize="1.5rem" onClick={()=>setshow(false)}/>}
    </MobNav>
    
     <NavMenu>
       <NavItem><Link href="/">Home</Link></NavItem>
       <NavItem><Link href="/Events">Events</Link></NavItem>
       <NavItem><Link href="/Articles">Articles</Link></NavItem>
       <NavItem><Link href="/team">Team</Link></NavItem>
       <NavItem><Link href="/Leaderboard">LeaderBoard</Link></NavItem>
     </NavMenu>
     </Nav>
     </>
  );

};

export default Navbar;