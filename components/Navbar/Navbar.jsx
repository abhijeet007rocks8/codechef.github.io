import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";
import styled from 'styled-components';
import {GiHamburgerMenu} from 'react-icons/gi'
// import {Nav,Logo,NavMenu,NavItem,MobNav,MenuWrapper,MobNavItem,MobNavmenu} from './nav-styles'
import { ImCross } from "react-icons/im";

const Navbar = () =>{

  const router = useRouter();
  const[show,setshow]=useState(false);
  return(
    <>
    <Nav>
    <Logo src="/imageasset/ccwhite2.png" />
    
    <MobNav>
        {!show && <GiHamburgerMenu fill="#ffffff" fontSize="1.5rem" onClick={()=>setshow(true)}/>}
        {show && <ImCross fill="#ffffff" fontSize="1.3rem" onClick={()=>setshow(false)}/>}
    </MobNav>
    
     <NavMenu>
       <NavItem><Link href="/">Home</Link></NavItem>
       <NavItem><Link href="/Events">Events</Link></NavItem>
       <NavItem><Link href="/Articles">Articles</Link></NavItem>
       <NavItem><Link href="/Team">Team</Link></NavItem>
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

const Nav = styled.div`
position: sticky;
display: flex;
background:#4a74f5;
top:0;
left:0;
flex-direction:row; 
justify-content: space-between;
align-items:center;
padding: 0.2rem;
z-index: 12;
`;


 const NavMenu = styled.div`
display: flex;
flex-direction:row;
width:fit-content;
margin-right:15rem;
@media screen and (max-width: 767px) {
	display: none;
}
@media  screen and (max-width: 1024px) {
    margin-right:8rem;
}
`;

 const MobNav = styled.div`
    font-size: 2rem;
    margin-right: 2rem;
    transition:1.0s;
@media screen and (min-width: 767px) {
	display: none;
}    
`;

 const NavItem = styled.div`
    color:white;
    font-family:"-apple-system",sans-serif;
    font-size:1.5rem;
    width:fit-content;
    margin:4%;
    padding:4px;
    font-weight:bolder;
    transition:background 0.45s ease-in-out;
    // transition:color 0.45s ease-in-out;
    // transition:border 0.45s ease-in-out;
    

  :hover{
    background:white;
    color:#0d6efd;
    border-radius:15px;
    }
  
   &:active {
      color: black;
      font-weight:bolder;
  }

  @media screen and (max-width: 1024px){
      font-size:1.3rem;
      margin:3%;
  }
  @media  screen and (max-width: 768px) {
      font-size:1.1rem;
      margin:2%;
  }
`;

 const Logo = styled.img`
     width:180px;
     margin-bottom:2px;
     margin-left:3rem;

     @media  screen and (max-width: 768px) {
        margin-left:2rem;
        width:150px;
    }

    @media  screen and (max-width: 525px) {
        margin-left:1rem;
    }
`;




 const MenuWrapper = styled.div`
position: fixed;
top: 0;
left: 0;
z-index: 4;
width: -webkit-fill-available;
height: -webkit-fill-available;
background: #0d6efd;
display: flex;
align-items: center;
justify-content: center;
opacity:0.95;
transition: display .35s ease-in-out;
@media  screen and (min-width: 768px) {
 display:none;
}
`;

 const MobNavmenu = styled.div`
    text-align:center;
`;

 const MobNavItem = styled.div`
  list-style: none;
  align-text:center;
  color: white;
  font-size: 1.5rem;
  padding: 0.5rem;
  font-weight:500;

  :hover{
      background:white;
      color:#0d6efd;
  }
`;


export default Navbar;
