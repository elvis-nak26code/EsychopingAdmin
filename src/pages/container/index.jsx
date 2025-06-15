import Header from "../../components/header/index.jsx"
import Menue from '../../components/menue/index.jsx'
import { Outlet } from "react-router-dom"

export default function Container(){
    return(
        <div>
            <Header/>
            <div className=" w-full  relative flex ">
                <Menue/>
                <Outlet/>
            </div>
        </div>
    )
}