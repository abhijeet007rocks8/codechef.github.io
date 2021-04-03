import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";
//import Logoimg from '../../public/imageasset/ccwhite.png'
import {GiHamburgerMenu} from 'react-icons/gi'
import {Nav,Logo,NavMenu,NavItem,BackImg,Back,MobNav} from './nav-styles'

const Navbar = () =>{

  const router = useRouter();

  return(
    <>
    <BackImg>
      <Back src="/imageasset/navbg.png"/>
    </BackImg>
    <Nav>
    <Logo src="/imageasset/ccwhite.png" />
    
    <MobNav>
        <GiHamburgerMenu fill="#ffffff"/>
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