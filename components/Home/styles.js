import styled from 'styled-components'

export const Container = styled.div`
     margin:0rem 1rem;
     display:flex;
     justify-content:center;
`;
export const Card=styled.div`
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