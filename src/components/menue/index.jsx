import { useContext } from "react"
import { GlobalContext } from "../../../utils/context"
import { Link } from "react-router-dom"



export default function Container(){
    const {menuIsOpen,setMenuIsOpen,menuBtnActiv , setMenuBtnActiv}=useContext(GlobalContext)

    return(
        <div className={`z-10 absolute xl:sticky xl:top-0 shadow-xl bg-white w-80 xl:h-screen xl:min-w-[450px] h- flex flex-col gap-1 p-2 duration-300 xl:translate-x-0 ${menuIsOpen? "translate-x-[0]":"translate-x-[-100%]" } `}>
            <Link onClick={() => {setMenuIsOpen(false) ; setMenuBtnActiv(1)}} to="ajout" className={`btn xl:btn-lg ${menuBtnActiv===1 && "btn-primary"} `}>Ajouter un produit</Link>
            <Link onClick={() => {setMenuIsOpen(false) ; setMenuBtnActiv(2)}} to="userList" className={`btn xl:btn-lg ${menuBtnActiv===2 && "btn-primary"} `}> Liste des utilusateurs</Link>
            <Link onClick={() => {setMenuIsOpen(false) ; setMenuBtnActiv(3)}} to="productList" className={`btn xl:btn-lg ${menuBtnActiv===3 && "btn-primary"} `}>Liste des produit</Link>
            <Link onClick={() => {setMenuIsOpen(false) ; setMenuBtnActiv(4)}} to="commendes" className={`btn xl:btn-lg ${menuBtnActiv===4 && "btn-primary"} `}>Nouvelle commandes</Link>
            <Link onClick={() => {setMenuIsOpen(false) ; setMenuBtnActiv(5)}} to="historiques" className={`btn xl:btn-lg ${menuBtnActiv===5 && "btn-primary"} `}>Historique des commendes</Link>
            <Link onClick={() => {setMenuIsOpen(false) ; setMenuBtnActiv(6)}} to="pub" className={`btn xl:btn-lg ${menuBtnActiv===6 && "btn-primary"} `}>Pub</Link>
            <Link onClick={() => {setMenuIsOpen(false) ; setMenuBtnActiv(7)}} to="fond" className={`btn xl:btn-lg ${menuBtnActiv===7 && "btn-primary"} `}>Fond d'ecrant</Link>
        </div>
    )
}