import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import Image from "next/image";

export const Nav = styled.div`
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


export const NavMenu = styled.div`
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

export const MobNav = styled.div`
    font-size: 2rem;
    margin-right: 2rem;
    transition:1.0s;
@media screen and (min-width: 767px) {
	display: none;
}    
`;

export const NavItem = styled.div`
    color:white;
    font-family:"-apple-system",sans-serif;
    font-size:1.5rem;
    width:fit-content;
    margin:4%;
    padding:10px;
    font-weight:bolder;
    transition:background 0.45s ease-in-out;
    

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

export const Logo = styled.img`
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




export const MenuWrapper = styled.div`
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

export const MobNavmenu = styled.div`
    text-align:center;
`;

export const MobNavItem = styled.div`
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
