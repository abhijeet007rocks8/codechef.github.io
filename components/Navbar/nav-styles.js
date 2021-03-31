import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import Image from "next/image";

export const Nav = styled.nav`
position: sticky;
display: flex;
background:blue;
top:0;
left:0;
flex-direction:row; 
justify-content: space-around;
align-items:center;
padding: 0.2rem;
z-index: 12;
`;


export const NavMenu = styled.div`
display: flex;
flex-direction:row;
width:fit-content;
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #808080;
padding: 10px 22px;
color: #000000;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
/* Second Nav */
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff;
	color: #808080;
}
`;
export const MyDesktopNavbar =styled.nav`
    display:flex;
    flex-flow:row nowrap;
    justify-content:space-evenly;
    align-items:center;

    background:transparent;
    color:black;

    .logo {
      font-size: 7vh;
      font-weight: bold;
      text-shadow: 3px 3px 3px black;
    }

    .nav-links{
      display:flex;
      flex-flow:row nowrap;
      justify-content:space-evenly;
      align-items:center;

      width:35vw;

      list-style:none;
    }

    .link {
      color:black;
      font-size:2.5vh;
      text-decoration:none;
    }
`;
export const NavItem = styled.div`
    color:white;
    font-family:"-apple-system",sans-serif;
    font-size:1.5rem;
    width:fit-content;
    margin:5%;
  :hover{
     color:red;
     font-weight:bolder;
    }
  
   &:active {
      color: green;
      font-weight:bold;
  }

  @media (max-width: 1024px){
      font-size:1.3rem;
      margin:3%;
  }
  @media (max-width: 768px) {
      font-size:1.1rem;
      margin:2%;
  }
`;

export const Logo = styled.img`
     width:90px;
     margin-bottom:2px;
`;

export const Back = styled.img`
    min-height:200px;
    width:100%;
`;
export const BackImg = styled.div`
    position:absolute;
    top:0;
    left:0;
    z-index:-1;
`;
