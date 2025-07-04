import { motion } from "framer-motion"
import propTypes from "prop-types";
import { useEffect } from "react"

export default function Alerte({visible,setVisible}){
     useEffect(()=>{
        const timer=setTimeout(()=>{
            setVisible(false);
        },1000)
        return ()=> clearTimeout(timer);
     },[visible])  
     
    return (
        visible && (
          <motion.div
          initial={{ opacity: 0, y: 50 }}
           animate={{ opacity:1 , y:0 }}
           exit={{ opacity:0 , y:-20 }}
           transition={{duration : 0.4}}
           role="alert"
           className="z-50 alert alert-success fixed bottom-[750px] lg:bottom-[800px] w-60  lg:w-80 right-2 bg-green-400 alerte-animation">
             <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-6 w-6 shrink-0 stroke-current"
               fill="none"
               viewBox="0 0 24 24">
               <path
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 strokeWidth="2"
                 d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
             </svg>
             <span>produit ajouter</span>
          </motion.div>
          )
    )
}

Alerte.propTypes={
    visible: propTypes.boolean,
    setVisible :propTypes.func.isRequired
}