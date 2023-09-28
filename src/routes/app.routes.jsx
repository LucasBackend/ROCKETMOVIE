import { Routes, Route} from 'react-router-dom';

import {Home} from '../Pages/Home';
import {NewMovie} from '../Pages/NewMovie';
import {Details} from '../Pages/Details';
import {Profile} from '../Pages/Profile'


export function AppRoutes(){

  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/new" element={<NewMovie/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/details/:id' element={<Details/>}/>
    </Routes>
  )

}