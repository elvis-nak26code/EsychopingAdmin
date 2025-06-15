export default function Acordeon({info}){
    return(
        <div className="collapse collapse-plus bg-emerald-100/50 border border-base-300">
           <input type="radio" name="my-accordion-3" defaultChecked />
           <div className="collapse-title font-semibold">{info.nom + ' ' +info.prenom}</div>
           <div className="collapse-content text-sm">
               <ul className="flex flex-col gap-2">
                   <li> <span className="font-bold">Ville: </span>{info.ville} </li>
                   <li> <span className="font-bold">Numero: </span> {info.numero}</li>
                   <li> <span className="font-bold">E-mail: </span> {info.email}</li>
               </ul>
           </div>
        </div>
    )
}