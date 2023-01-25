import { Outlet } from "react-router-dom"
import { Footer } from "./components/footer"
import { Header } from "./components/Header/Header"

export  const App  = () =>{




    return(
<>
<Header/>
<Outlet/>
<Footer/>
</>
)
}


