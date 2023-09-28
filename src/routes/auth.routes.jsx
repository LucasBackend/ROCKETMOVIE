import { Routes, Route} from 'react-router-dom';

import {LogIn} from '../Pages/LogIn';
import {SignUp} from '../Pages/SignUp';

export function AuthRoutes(){

  return(
    <Routes>
      <Route path="/" element={<LogIn/>}/>
      <Route path="/register" element={<SignUp/>}/>
    </Routes>
  )

}