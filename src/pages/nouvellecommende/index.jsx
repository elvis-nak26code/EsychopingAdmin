
import Tb from '../../components/tableau/index.jsx'
import { useEffect , useState} from 'react'
export default function Commendes(){
   const [islogin,setIslogin]=useState(false)
   const [btnlogin,setBtnlogin]=useState(true)

   const validerC= async(Id,userId)=>{
      try{
         const api = import.meta.env.VITE_API_URL;
          setBtnlogin(false)
          const token = localStorage.getItem("token")
          const reponce = await fetch(`${api}/api/admin/validerCommande`,{
              method: "PUT",
              headers:{
                  "Content-Type": "application/json",
                  "Authorization":`Bearer ${token}`
              },
              body :JSON.stringify({
                  id: Id,
                  userId:userId,
              })
          })
          if(!reponce.ok){
              throw new Error("erreur l'ors de la validation")
          }
          setBtnlogin(true)
          const data = await reponce.json()
          console.log(data)
          console.log("status modifier")
          window.location.reload();
      }catch(e){
         console.log("il ya eu une erreu l'or de la validation ")
         console.log(e)
      }
  }


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
   },[btnlogin])
   useEffect(()=>{
      console.log(userinfo.datas)
   },[])
    return(
        <>
          {islogin ? (
             <div className="p-3 flex flex-col w-full">
                 <h2 className="text-center font-extrabold mb-3">NOUVELLE COMMENDES</h2>
                 <div className="w-full  flex flex-col gap-2">
                    {userinfo?.datas?.map((el, i) => (
                         el.historique.some(h => h.status === 1) ? <Tb key={i} data={el} status={1} validerC={validerC} btnlogin={btnlogin}/> : ''                
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