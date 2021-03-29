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
    padding:.2rem;
    display: flex;
    margin:2rem;
    width:-webkit-fill-available;
    align-items:center;
    justify-content:center;
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

export const Card=styled.span`
    display:flex;
    width: 100%;
    justify-content:center;
    height: fit-content;
    //background:#fff000;
    border-radius:1rem;
    align-items:center;
    overflow:hidden;
    border: 3px solid #102E46;
    margin:1rem;
    @media (max-width:767px)
    {
      flex-direction:column;
      margin:0rem;
      margin-bottom:.7rem;
    }
`;

export const Cardrev=styled.span`
    display:flex;
    width: 100%;
    justify-content:center;
    height: fit-content;
    //background:#fff000;
    align-items:center;
    border-radius:1rem;
    overflow:hidden;
    border: 3px solid #102E46;
    margin:1rem;
    @media (max-width:767px)
    {
      flex-direction: column-reverse;
      margin:0rem;
      margin-bottom:.7rem;
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

export const Img=styled.div` 
  margin:1rem;
`;

export const Title=styled.div`
    font-family:"Quicksand",sans-serif;
    flex-wrap:wrap;
    font-size:1.5rem;
    font-weight:bold;
    margin: 1rem;
    @media (max-width: 576px) {
      width:97%; 
      margin:0.5rem 0.3rem;
      font-size:1.3rem;
    }
`;

export const Description=styled.div`
    display:flex;
    justify-self:center;
    flex-direction:column;
    flex-wrap:wrap;
    margin:0rem 1.5rem;
    margin-bottom:.7rem;
    width:60%;
    border-radius: 10px;
    background: #FFFFFF;
    box-shadow:  15px 15px 30px #bababa,
             -15px -15px 30px #ffffff;

    @media (max-width: 767px) {
        width:95%;
    }         
`;

export const Event=styled.div`
    display:"flex";
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:80%;
    @media (max-width: 767px) {
      width:100%; 
  }   
`;