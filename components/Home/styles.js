import styled from 'styled-components'

export const Container = styled.div`
     margin:0rem 1rem;
     display:flex;
     justify-content:center;
`;

export const Card=styled.div`
    display:flex;
    width:95%;
    align-items:center;
    justify-content:space-between;
    justify-self:center;
    height: fit-content;
    flex-direction:column;
    //border: 3px solid #102E46;
    border-radius: 10px;
    background: #FFFFFF;
    box-shadow:  15px 15px 30px #bababa;
    margin: 1rem 2rem;
    
    @media screen and (max-width:1100px){
        margin:1rem 0rem;
        width:100%;
    }

    @media screen and (max-width:565px){
        margin:1rem 0rem;
        width:85%;
    }
`;

export const About = styled.div`
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    padding:2rem;

    @media screen and (max-width:565px){
        margin:0rem 0rem;
    }
`;

export const Image = styled.div`
height:500px;
@media screen and (max-width:1000px)
 {height:400px;}
@media screen and (max-width:992px)
 {height:300px;}
 @media screen and (max-width:900px)
 {display:none;}
`;

export const Content = styled.div`
text-align:left;
font-family:"Segoe UI";
font-weight:400;
font-size:1.3rem;

@media screen and (max-width:565px){
    font-size:0.9rem;
}
`;

export const Title = styled.div`
    text-align:left;
    font-family:"Segoe UI";
    font-weight:500;
    font-size:1.6rem;
    margin-bottom:0.5rem;
    @media screen and (max-width:565px){
        font-size:1.2rem;
    }
`;

export const Para = styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom:3rem;
`;

export const TitleImg = styled.div`
        width:550px;
        @media screen and (max-width:565px){
            width:350px;
        }
`;

export const DisplayFlex = styled.div`
    padding:.2rem;
    display: flex;
    margin:1rem 1rem;
    width:-webkit-fill-available;
    align-items:center;
    justify-content:center;
    justify-self:center;
    align-self:center;
    overflow-x: hidden;
    
    @media (max-width: 1200px){
        margin: 2rem;
    }
    @media (max-width: 1024px){
        margin: 2rem;
    }
    @media (max-width: 768px) {
        margin: 2rem;
    }
    @media (max-width: 576px) {
      margin:.5rem;
    }
`;

export const Imag =styled.div`
  height:auto;
  border-top-left-radius:10px;
  border-top-right-radius:10px;
  overflow:hidden;
`;

export const Details=styled.div`
    color:grey;
    font-size:1.1rem;
    display:flex;
    flex-wrap:wrap;
    margin:0.5rem 1rem;
    font-family:roboto;
    @media (max-width: 576px) {
      width:97%; 
      margin:0.5rem 0.3rem;
      font-size:1rem;
    }
`;

export const Discription=styled.div`
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
    margin:0rem 1rem;
    margin-bottom:.7rem;
    width:100%;
    @media (max-width: 767px) {
        width:95%;
    }         
`;


export const ETitle=styled.div`
    font-family:"Quicksand",sans-serif;
    flex-wrap:wrap;
    font-size:1.5rem;
    font-weight:bold;
    margin: .5rem;
    @media (max-width: 767px) {
      width:97%; 
      margin:0.5rem 0.3rem;
      font-size:1.3rem;
    }
`;

export const ECard=styled.div`
    display:flex;
    width:fit-content;
    width:90%;
    align-items:center;
    justify-content:space-between;
    justify-self:center;
    height: fit-content;
    //border: 3px solid #102E46;
    border-radius: 10px;
    background: #FFFFFF;
    box-shadow:  15px 15px 30px #bababa;
    margin: 1rem 3rem;

    @media screen and (max-width:565px){
        margin:1rem 0rem;
        width:85%
    }
`;

export const LCard=styled.div`
    display:flex;
    width:fit-content;
    width:90%;
    height:fit-content;
    width:fit-content;
    align-items:center;
    justify-content:space-between;
    justify-self:center;
    flex-direction:column;
    //border: 3px solid #102E46;
    border-radius: 10px;
    background: #FFFFFF;
    box-shadow:  15px 15px 30px #bababa;
    margin: 2rem 2rem;

    @media screen and (max-width:800px){
        margin:1rem 0rem;
        width:85%;
        display:none;
    }
`;

export const Button = styled.button`
    border:transparent;
    background:transparent;
    color:black;
    font-size:1.5rem;
    transition: font-size .35s ease-in-out;
    :hover{
       font-size:1.8rem;
        color: blue;
        border:transparent;
    }
`; 

export const Signup = styled.button`
border: transparent;
background: #4a74f5;
border-radius: 65px;
color: white;
font-family: Roboto;
margin: -6rem;
padding: 1.2rem;
font-size: 2.0rem;
font-weight: bold;
transition: font-size .45s ease-in-out;
transition: background .45s ease-in-out;
transition: border .45s ease-in-out;

    :hover{
        background: white;
        border:6px solid #4a74f5;
        color:#4a74f5;
    }

    @media screen and (max-width:800px){
        margin:-2rem;
        padding:.7rem;
        font-size:1.1rem;
        :hover{
            font-size:1.3rem;
        }
    }

    @media screen and (max-width:565px){
        margin:-1.3rem;
        padding:0.2rem;
        font-size:.8rem;
        :hover{
            font-size:1.2rem;
        }
    }
`; 

export const HeaderImg = styled.div`
    width:100%;
    padding:-1rem 3rem;
    max-height:700px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

export const Header = styled.div`
    margin-bottom:10rem;
    @media screen and (max-width:565px){
    margin-bottom:4rem;
    }
`;

export const Desktop = styled.div`
    display:flex;
    justify-content:center;
    @media screen and (max-width:767px){
        display:none;
    }
`;

export const Mobile = styled.div`
    display:flex;
    justify-content:center;
    @media screen and (min-width:767px){
        display:none;
    }
`;

export const Heading=styled.div`
    font-size:3rem; 
    color:#102E46;
    padding-bottom:2rem;
    text-align:center;
    font-weight:bold;
    font-family:san-serif;
`;
