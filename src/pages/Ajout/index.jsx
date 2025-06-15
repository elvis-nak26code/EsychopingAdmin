import { useState } from "react"
import Loading from "../../components/loading"
import Success from '../../components/success/index.jsx'
import Error from '../../components/Error/index.jsx'

export default function Ajout(){
        const [Ninput,setNinput] = useState([1])
        const [Ncolor,setNcolor] = useState([1])

        // pour le chargement 
        const [isLoad,setIsload]=useState(false)

        // notification de succet
        const [visible,setVisible]=useState(false)
        // notification d'erreur
        const [err,seterr]=useState(false)
        
        // pour afficher des inpute conditionnellement
        const [newCategories,setNewCategories] = useState(0)

        const [data,setData] = useState({
             categorie:"electronique",
             nom:"",
             description:"",
             prix:"",
             stock:"",
             couleurs:[],
             image:[],
             recommander:null
        })

        const inputChane = (e)=>{
            setData({...data, [e.target.name]:e.target.type === "file" ? e.target.files[0] : e.target.value })
        }

        const inputChangeTable = (e)=>{
            setData({
                ...data, 
                [e.target.name]: [...(data[e.target.name] || []), e.target.type === "file" ? e.target.files[0] : e.target.value]
              });
        }
        
        const tcheckboxChange = (e)=>{
            setData({...data, [e.target.name]:e.target.checked })
        }

        const Submite= async (e)=>{
            console.log(data)
            e.preventDefault()

            let datas = new FormData() 

            // Object.entries(data).forEach(([key, value]) => {
            //     if (value) datas.append(key, value);
            // });

            Object.entries(data).forEach(([key, value]) => {
                if (Array.isArray(value)) {
                    value.forEach((file, index) => {
                        datas.append(`${key}`, file); // [] pour indiquer plusieurs fichiers
                    });
                } else if (value !== undefined && value !== null) {
                    datas.append(key, value);
                }
            });

            datas.forEach((value, key) => {
                console.log(key, value);
            });

            
            try{
                const api = import.meta.env.VITE_API_URL;
                setIsload(true)
                const response = await fetch(`${api}/api/admin/newproduit`,{
                    method: 'POST',
                    body: datas,
                });
                const data = await response.json()

                if (response.ok) {
                    console.log('Succès:', data);
                    setVisible(true)
                    setTimeout(()=>{
                        window.location.reload();
                    },800)
                  } else {
                    console.error('Erreur:', data);
                    seterr(true)
                  }
            }catch (error) {
               console.error('Erreur lors de l\'envoi des images', error);
               seterr(true)
            }finally{
                setIsload(false)
            }
        }

    return(
        <div className="p-3 flex flex-col w-full">
           <form action=""  onSubmit={Submite} encType="multipart/form-data">
             <h2 className="text-center font-extrabold mb-3 xl:text-2xl">AJOUTER UN PRODUIT</h2>
             <div className="w-full flex flex-col gap-4  p-2 rounded-lg shadow-md">

                     <select className={`select xl:select-lg select-bordered validator  ${newCategories===1 && "hidden"}`} name="categorie" onChange={inputChane} onFocus={()=> setNewCategories(2)}>
                           <option disabled value="">Choisir une categorie (facultatif)</option>
                           <option value="electronique">Électronique</option>
                           <option value="vetements">Vêtements</option>
                           <option value="accessoires">Accessoires</option>
                           <option value="maison">Maison</option>
                           <option value="beaute">Beauté</option>
                           <option value="sports">Sports</option>
                           <option value="meubles-decoration">Meubles & Décoration</option>
                           <option value="jouets">Jouets</option>
                           <option value="outils">Outils</option>
                           <option value="automobile">Automobile</option>
                           <option value="sante">Santé</option>
                           <option value="informatique">Informatique</option>
                           <option value="high-tech">High-Tech</option>
                     </select>

                     <div className={`flex flex-col gap-1  bg-slate-200 p-1 rounded-lg ${newCategories===2 && "hidden"}`} onFocus={()=> setNewCategories(1)}>
                         <input type="text" placeholder="Nouvelle categorie" className="input input-bordered w-full xl:input-lg"  onChange={inputChane} name="categorie"/>
                     </div>
                    
                     
                     <input type="text" placeholder="Nom du produit" className="input input-bordered w-full xl:input-lg" onChange={inputChane} name="nom" />
                     <textarea type="text" placeholder="Description du produit" className="textarea textarea-bordered w-full" onChange={inputChane} name="description"></textarea>
                     <input type="number" placeholder="Prix du produit" className="input input-bordered w-full xl:input-lg" onChange={inputChane} name="prix"/>
                     <input type="number" placeholder="Stock" className="input input-bordered w-full xl:input-lg" onChange={inputChane} name="stock" />

                     <div className="flex flex-col gap-1 bg-slate-200 p-1 rounded-lg ">
                          <p className="font-bold ">Insere les images du produit : </p>

                          {Ninput.map((el,i)=>(<input key={i} type="file" className="file-input file-input-primary " onChange={inputChangeTable} name="image"/>))}

                          <div className="btn btn-square mt-2" onClick={()=>{setNinput([...Ninput,1])}}>
                               <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em"> <path fill="currentColor"d="M13.2 1.2h-2.4v9.6H1.2v2.4h9.6v9.6h2.4v-9.6h9.6v-2.4h-9.6z"></path> </svg>
                          </div>
                     </div>
                   
                     <div>
                        <p className="font-bold text-black">Choisir les couleur disponibles : </p>
                        <div className="flex items-center gap-3">

                            {Ncolor.map((el,i)=>( <input key={i} type="color" className=" rounded-lg h-10 xl:h-12" onBlur={inputChangeTable} name="couleurs"/>))}
    
                            <div  className="btn btn-xs bg-blue-300 h-9 w-9"   onClick={()=>{setNcolor([...Ncolor,1])}}>
                                  <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em"> <path fill="currentColor"d="M13.2 1.2h-2.4v9.6H1.2v2.4h9.6v9.6h2.4v-9.6h9.6v-2.4h-9.6z"></path> </svg>
                            </div >
                        </div>
                    </div> 

                    <div>
                        <p className="font-bold text-black">Recommender : </p>
                        <input type="checkbox" className="checkbox checkbox-primary " name="recommander"  onChange={tcheckboxChange}/>
                    </div> 
             </div>

             <input type="submit" className="btn btn-primary mt-3 w-full"  value="PUBLIER LE PRODUIT"/>
            </form>  
            {isLoad ? <Loading/> : ''} 
            <Success visible={visible} setVisible={setVisible}/>
            <Error visible={err} setVisible={seterr}/>
        </div>
    )
}


