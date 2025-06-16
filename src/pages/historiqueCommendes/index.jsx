
import Tb from '../../components/tableau/index.jsx'
import { useEffect , useState} from 'react'
export default function Historique(){
   const [islogin,setIslogin]=useState(false)
   
   const [userinfo,setuserinfo]=useState({})
   useEffect(()=>{
      async function userListe(){
         try{
           const api = import.meta.env.VITE_API_URL;
           const response = await fetch(`${api}/api/admin/userListe`)
           const data = await response.json()
           if (!response.ok) {
              console.log("il ya eu une erreur")
           }
           setIslogin(true)
           setuserinfo(data)
         }catch(e){
           console.log(e) 
         }
      }
      userListe()
   },[])
   useEffect(()=>{
      console.log(userinfo.datas)
   },[userinfo])
    return(
       <>
       {islogin?(
         <div className="p-3 flex flex-col w-full">
           <h2 className="text-center font-extrabold mb-3">HISTORIQUE DES COMMENDES</h2>
           <div className="w-full  flex flex-col gap-2">
              {userinfo?.datas?.map((el, i) => (
                   el.historique.some(h => h.status === 2) ? <Tb key={i} data={el} status={2} /> : ''                
               ))}
           </div>
        </div>
       ):(
         <div className='flex items-center justify-center w-full h-32'>
                <span className="loading loading-spinner loading-md"></span>
            </div>
       )}
        
       </> 
    )
}