import styled from "styled-components";

export const screen={
    xs: "576px",
    sm:"768px",
    md: "992px",
    lg: "1199px",
  };

export const Container = styled.div`
  display:block;
  justify-content:center;
  align-items:center;
`;

export const DisplayFlex = styled.div`
    padding:1rem;
    display: flex;
    flex-direction:column;
    width:97%;
    overflow-x: hidden;
    @media (max-width: 1024px){
        
    }
    @media (max-width: 768px) {
        
    }
    @media (max-width: 576px) {
        
    }
`;

export const Card=styled.span`
    display:flex;
    width: fit-content;
    height: fit-content;
    background:#fff000;
    border-radius:1rem;
    overflow:hidden;
    //border: 3px solid #102E46;
`;

export const Heading=styled.div`
    font-size:3rem; 
    color:#102E46;
    padding-bottom:2rem;
    text-align:center;
    font-weight:bold;
    font-family:san-serif;
`;

export const Details=styled.div`
    color:grey;
    font-size:1.1rem;
    display:flex;
    flex-direction:column;
    //align-self:left;
    margin-left:1rem;
    width:100%;
    font-family:roboto;
    @media (max-width: 576px) {
      width:100%; 
    }
`;

export const Img=styled.div` 
  border-radius:2rem;
`;

export const Title=styled.div`
    font-family:"Quicksand",sans-serif;
    font-size:1.5rem;
    margin-left:1rem;
`;