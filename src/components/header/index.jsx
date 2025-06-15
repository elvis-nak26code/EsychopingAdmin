import { useContext} from "react"
import { GlobalContext } from "../../../utils/context"

export default function Header(){
    const {setMenuIsOpen,menuIsOpen}=useContext(GlobalContext)
    return (
        <div className="sticky top-0 z-50 xl:relative">
           <div className="navbar bg-base-100 shadow-md">
              <div className="flex-none">
                <button className="btn btn-square btn-ghost xl:hidden" onClick={()=>setMenuIsOpen(!menuIsOpen)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-5 w-5 stroke-current">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
              </div>
              <div className="flex-1">
                <a className="btn btn-ghost text-2xl xl:text-3xl">EsyShop Admin  </a>
              </div>
              <div className="flex-none">
              </div>
           </div>
        </div>
    )
}