import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Container from './pages/container/index.jsx'
import {GlobaProvider} from '../utils/context/index.jsx'

import { BrowserRouter, Route,Routes } from 'react-router-dom'

import AjoutProduit from './pages/Ajout/index.jsx'
import UserList from './pages/userList/index.jsx'
import ProductList from './pages/productListe/inde.jsx'
import Commendes from './pages/nouvellecommende/index.jsx'
import Historique from './pages/historiqueCommendes/index.jsx'
import Pub from './pages/pub/index.jsx'
import Font from './pages/fondDecrant/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <BrowserRouter>
            <GlobaProvider>
               <Routes>
                     <Route path='/' element={ <Container />}>
                         <Route path='ajout' element={<AjoutProduit/>} />
                         <Route path='userList' element={<UserList />}/>
                         <Route path='productList' element={<ProductList />}/>
                         <Route path='commendes' element={<Commendes/>} />
                         <Route path='historiques' element={<Historique/>} />
                         <Route path='pub' element={<Pub/>} />
                         <Route path='fond' element={<Font/>} />
                     </Route>
               </Routes>
            </GlobaProvider>
       </BrowserRouter> 
  </StrictMode>,
)
