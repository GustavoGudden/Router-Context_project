import { PdContainer } from "../../components/pdContainer"
import { useAuth } from "../../context/favoriteContext"
import * as C from './style'




export const PageCarrinho  = () =>{


const {favoritesArr} = useAuth()

    
    return(
        <>
        <h1 style={{'margin':'1rem'}}> seus favoritos</h1>
<C.FavoritesContainer>


{favoritesArr.map((item)=>{

    return(
     <PdContainer nome={item.nome} id={item.id} valor={item.valor} ></PdContainer>
    )
})}

</C.FavoritesContainer>
</>
    )


}