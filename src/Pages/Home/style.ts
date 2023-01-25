import { style } from "@mui/system";
import styled from "styled-components";

export const Container = styled.div<{color : string}>`
height: 100px;
width:50%;
border:  1px solid black;
 background-color:${props => props.color};

`;

export const Main  = styled.main`
width: 100%;
display: flex;
justify-content: center;
margin: 1rem;

>section{
    width: 100%;
}

`;


export const DestaqueContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 1rem;
width: 100%;
.img{
width:50%;
height: 400px;
border-radius: 5px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.destaque_info{
    display: flex;
    flex-direction: column;
padding: 1rem;
gap: 1rem;
}


button{
width: 40%;
height: 30px;
border: none;
border-radius: 7px;    
}

`;


export const CarroselDestaque = styled.div`
display: flex;
justify-content: center;
width: 100%;
gap: 1rem;
margin: 1rem;



`;



