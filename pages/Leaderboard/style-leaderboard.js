import styled from 'styled-components'

export const Heading=styled.div`
    font-size:3rem; 
    color:#102E46;
    padding-bottom:2rem;
    text-align:center;
    font-weight:bold;
    font-family:san-serif;
`;

export const Heading1=styled.h6`
font-size: 1.7rem;
font-weight: bold;
align-items:left;
`;

export const DisplayFlex = styled.div`
    padding:.2rem;
    display: flex;
    margin:rem;
    width:-webkit-fill-available;
    align-items:center;
    justify-content:center;
    justify-self:center;
    align-self:center;
    overflow-x: hidden;
    flex-direction:column;
    @media (max-width: 1024px){
        
    }
    @media (max-width: 768px) {
        
    }
    @media (max-width: 576px) {
      margin:.5rem;
    }
`;

export const Container = styled.div`
  display:flex;
  width:100%;
  justify-self:center;
  align-items:center;
  justify-content:center;
`;

export const DisplayGrid = styled.div`
    padding:1rem;
    display: grid;
    width:97%;
    margin-bottom:2rem;
    overflow-x: hidden;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 2rem;
    grid-row-gap:2rem;
    @media (max-width: 1024px){
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 1rem;
    }
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        padding:.8rem;
    }
    @media (max-width: 576px) {
        grid-template-columns: 1fr;
        padding: .5rem;
        margin-bottom:3rem;
    }
`;

export const Card=styled.span`
    display:flex;
    width: 95%;
    align-items:center;
    justify-content:center;
    justify-self:center;
    height: fit-content;
    max-width:315px;
    //border: 3px solid #102E46;
    border-radius: 10px;
    background: #FFFFFF;
    box-shadow:  15px 15px 30px #bababa;
             

    
`;

export const Details=styled.div`
    font-family:"Quicksand",sans-serif;
    flex-wrap:wrap;
    color:grey;
    font-size:1.1rem;
    margin:5%;
    display:flex;
    flex-direction:column;
    align-self:left;
    width:100%;
    font-family:roboto;
    @media (max-width: 576px) {
      width:100%; 
    }
`;

export const HeaderStyled = styled.div`
    font-family:"Quicksand",sans-serif;
    flex-wrap:wrap;
    display: flex;
    margin:2% 5%;
  font-size: 2.2rem;
  -webkit-box-pack: justify;
  justify-content: space-between;
  cursor: pointer;
`;

export const TitleStyled = styled.div`
  font-size: 1.7rem;
  font-weight: bold;
`;

export const Name=styled.p`
font-weight:bold;
color: #102E46;
margin-block-start: 1em;
margin-block-end: 0em;
font-size:20px;
@media (max-width: 576px){
font-size:17px;}
`;

export const Job=styled.p`
margin-block-start: 0em;
margin-block-end: 0em;
color: #102E46;
font-size:15px;
@media (max-width: 576px){
font-size:15px;}
`;