import {useState} from 'react'

import {Container,Login,Background} from './style';
import {InputText} from '../../Components/InputText';
import {Button} from '../../Components/Button';
import {ButtonText} from '../../Components/ButtonText'
import { CiMail,CiLock } from "react-icons/ci";
import {Link} from 'react-router-dom'

//para usar o contexto criado para as paginas
import {useAuth} from '../../hooks/auth.jsx'



export function LogIn(){
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const {signIn} = useAuth()

  function handleSignIn(){
    signIn({email,password})
  }
  
return (
  
<Container>
<Login>
  <div className="Header">
  <h1>
    RocketMovies
  </h1>
  <span>
    Aplicação para acompanhar tudo que assistir.
  </span>
  </div>

  <div className="Body">
    <h2>Faça seu login</h2>
    <InputText icon={CiMail} title='Email' onChange={e=>setEmail(e.target.value)}/>
    <InputText icon={CiLock} title='Senha' onChange={e=>setPassword(e.target.value)}/>
    <Button title="Entrar" onClick={handleSignIn}/>


    <Link to="/register">
    Criar conta
    </Link>

  </div>

   

</Login>

  

<Background/>



</Container>

)


}