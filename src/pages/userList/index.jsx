import Acordeon from '../../components/acordeon/index.jsx'
import { useEffect , useState} from 'react'


export default function UserList(){
  
   const api = import.meta.env.VITE_API_URL;

   const [loading,setloading]=useState(false)
   const [userinfo,setuserinfo]=useState({})
   useEffect(()=>{
      async function userListe(){
         try{
            setloading(false)
           const response = await fetch(`${api}/api/admin/userListe`)
           const data = await response.json()
           if (!response.ok) {
              console.log("il ya eu une erreur")
           }
           setloading(true)
           setuserinfo(data)
         }catch(e){
           console.log(e) 
         }
      }
      userListe()
   },[])
   useEffect(()=>{
      console.log(userinfo)
   },[userinfo])
    return(
         <>
           {loading?(
            <div className="p-3 flex flex-col w-full">
            <h2 className="text-center font-extrabold mb-4">LISTE DES UTILUSATEURS </h2>
            <div className="w-full flex flex-col gap-1">
            {userinfo?.datas?.map((el, i) => (
              <Acordeon key={i} info={el} />
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