import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";
//import Logoimg from '../../public/imageasset/ccwhite.png'
import {GiHamburgerMenu} from 'react-icons/gi'
import {Nav,Logo,NavMenu,NavItem,MobNav,MenuWrapper,MobNavItem,MobNavmenu} from './nav-styles'
import { ImCross } from "react-icons/im";

const Navbar = () =>{

  const router = useRouter();
  const[show,setshow]=useState(false);
  return(
    <>
    <Nav>
    <Logo src="/imageasset/ccwhite.png" />
    
    <MobNav>
        {!show && <GiHamburgerMenu fill="#ffffff" fontSize="1.5rem" onClick={()=>setshow(true)}/>}
        {show && <ImCross fill="#ffffff" fontSize="1.3rem" onClick={()=>setshow(false)}/>}
    </MobNav>
    
     <NavMenu>
       <NavItem><Link href="/">Home</Link></NavItem>
       <NavItem><Link href="/Events">Events</Link></NavItem>
       <NavItem><Link href="/Articles">Articles</Link></NavItem>
       <NavItem><Link href="/team">Team</Link></NavItem>
       <NavItem><Link href="/Leaderboard">LeaderBoard</Link></NavItem>
     </NavMenu>
     </Nav>

     {show &&(
       <MenuWrapper onClick={()=> setshow(false)}>
       <MobNavmenu onClick={()=> setshow(false)}>
            <MobNavItem><Link href="/">Home</Link></MobNavItem>
            <MobNavItem><Link href="/Events">Events</Link></MobNavItem>
            <MobNavItem><Link href="/Articles">Articles</Link></MobNavItem>
            <MobNavItem><Link href="/team">Team</Link></MobNavItem>
            <MobNavItem><Link href="/Leaderboard">LeaderBoard</Link></MobNavItem>
       </MobNavmenu>
       </MenuWrapper>
     )}
     </>
  );

};

export default Navbar;