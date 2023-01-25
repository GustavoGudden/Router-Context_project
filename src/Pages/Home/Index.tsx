import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header"
import { PdContainer } from "../../components/pdContainer";
import { useAuth } from "../../context/favoriteContext";

import * as C from './style'


export const Home  = () =>{
    
    const {favoritesArr} = useAuth()
    console.log(favoritesArr)




const staticProdutos = [
{
    nome:"camisa",
    id:1,
    valor:112

},
{   
    nome:"shorts",
id:1,
valor:112},
{   
    nome:"bone",
id:1,
valor:112},
{   
    nome:"lidificador",
id:1,
valor:112}

]



return(
<>
<C.Main>
    <section> 
   <C.DestaqueContainer>
    <div className="img">imagen</div>
    <div className="destaque_info">  
        <h1>nome produto</h1>
        <p>subtitulo ou slogan</p>
        <p>texto com uma breve descriçao do produto entre outras observaçoes</p>
        <button>Comprar</button>
    </div>
</C.DestaqueContainer>
<C.CarroselDestaque>
{staticProdutos.map((i)=>{

    return(
            <PdContainer nome={i.nome} id={i.id} valor={i.valor}/>
    )
})}
</C.CarroselDestaque>
<C.CarroselDestaque>
{staticProdutos.map((i)=>{

    return(
            <PdContainer nome={i.nome} id={i.id} valor={i.valor}/>
    )
})}
</C.CarroselDestaque>
    </section>
  
</C.Main>

</>

)

}