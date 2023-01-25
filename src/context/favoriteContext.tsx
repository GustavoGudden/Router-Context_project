import React from "react"
import { useState } from "react"



type IfavoritesArray ={
  nome:string;
  id:number;
  valor:number;
}

interface PropsUserContext {
  favoritesArr:IfavoritesArray[]
 
}

const DEFAULT_VALUE = {
  favoritesArr:[{nome: '',id:0, valor:0},]
}

export const authContext = React.createContext<PropsUserContext>(DEFAULT_VALUE)

export const AutoProvider = (props: any) => {

  const favoritesArr:IfavoritesArray[] =[];
  
 
  return (
    <authContext.Provider
      value={{ favoritesArr }}
    >
      {props.children}
    </authContext.Provider>
  )
}

export const useAuth = () => React.useContext(authContext)