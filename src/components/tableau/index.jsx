
import PropTypes from "prop-types"


export default function Tb({data,status,validerC,btnlogin}){
  
    return(
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title font-semibold">{data.nom + ' ' + data.prenom}</div>
              <div className="collapse-content text-sm">
                 {/* <ul> */}
                    {data.historique.map((el,i)=>(
                        // {el.status===1 ? (''):('')}
                        <>
                          {el.status===status ? (
                             <div key={i + el._id} style={{ borderColor: `${el.color}` }} className="bg-slate-50/60 border-2 mb-3 flex flex-col p-1 rounded-lg">
                             <div className="xl:text-lg"> <span className="font-bold">Produit : </span> {el.nom}</div>
                             <div className="xl:text-lg"> <span className="font-bold">Destination  : </span> {el.Destination_Ville}</div>
                             <div className="xl:text-lg"> <span className="font-bold">Compagnie  : </span> {el.compagnie}</div>
                             <div className="xl:text-lg"> <span className="font-bold ">Couleur : </span> <span style={{ backgroundColor: `${el.color}` }} className="w-10 rounded-lg h-2 inline-block"></span> </div>
                             <div className="xl:text-lg"> <span className="font-bold">Quantite : </span> {el.stock}</div>
                             <div className="xl:text-lg"> <span className="font-bold">Whatzapp : </span> {el.numero_w}</div>
                             <div className="xl:text-lg"> <span className="font-bold">Numero  : </span> {el.numero_D}</div>
                             <button 
                              onClick={()=>validerC(el._id,data._id)}
                              className={` ${status===2 ?'hidden':''} cursor-pointer btn bg-green-600 mt-5 text-white `}>{btnlogin ? 'valider la commande':(<span className="loading loading-spinner loading-md"></span>)}</button>
                         </div>
                           ):('')}
                         
                       </>
                    ))} 
                 {/* </ul> */}
                  
              </div>
          </div>
    )
}

Tb.propTypes = {
   data: PropTypes.shape({
     _id:PropTypes.object,
     nom: PropTypes.string.isRequired,
     prenom: PropTypes.string.isRequired,
     historique: PropTypes.arrayOf(
       PropTypes.shape({
         _id: PropTypes.string.isRequired,
         Destination_Ville: PropTypes.string.isRequired,
         nom: PropTypes.string.isRequired,
       })
     ).isRequired,
   }).isRequired,
   status:PropTypes.number,
   validerC:PropTypes.func,
   btnlogin:PropTypes.bool
 };