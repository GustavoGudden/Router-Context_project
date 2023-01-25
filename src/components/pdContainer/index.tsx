import { useContext } from "react";
import { useAuth } from "../../context/favoriteContext";

import *  as C from "./style"

type propsPd = {
nome:string;
id:number;
valor:number;


}




export const PdContainer  = (props:propsPd) =>{


const {favoritesArr} = useAuth()

//adicionando um novo item
const handleFavorite = (item:propsPd)=>{
   favoritesArr.push({ nome: item.nome,
   id:item.id,valor:item.valor,})
   console.log(favoritesArr)
   console.log(  'teste')

}




return (
<C.Container >
<div>
<h1>{props.nome}</h1>
<p>{props.valor}</p>
<div className="btn-group">
<button className="btn-favorite" onClick={()=>{
handleFavorite(props)
}}> favoritar</button>
<button className="btn-buy"> comprar</button>
</div>

</div>
</C.Container>

)


}