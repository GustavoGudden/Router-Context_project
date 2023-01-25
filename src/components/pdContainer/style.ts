import styled from "styled-components";



export const  Container = styled.div`
width: 20%;
height: 400px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
display: flex;
flex-direction: column;
justify-content: flex-end;
flex-wrap: wrap;
border-radius:0px 0px 1rem 1rem;

>div{
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 100%;
    height: 120px;
    background-color: white;
    color:  black;
    

>h1{
    padding-top: 0px;
    padding-left: 10px;
}

>p{
    padding-top: 10px;
    padding-left: 10px;
}

}


button{
width: 40%;
height: 30px;
border: none;
border-radius: 7px;
}


.btn-group{
width: 100%;
display: flex;
gap: 1rem;
justify-content:flex-end;
padding: 1rem;
}

.btn-favorite{
    background-color: white;
    color:  red;
    border: 1px solid red;
    font-size: 12px;
    font-weight: 600;
transition:  all 3sec;
       :hover{
transform: scale(1.1);

       }
}
.btn-buy{
    background-color: white;
    color:  green;
    border: 1px solid greens;
    font-size: 12px;
    font-weight: 900;
transition: all 3sec;
    :hover{
transform: scale(1.1);

       }
}

`
