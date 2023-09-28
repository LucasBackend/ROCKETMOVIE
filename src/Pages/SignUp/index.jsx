//Usado para criar estado e capturar os campos para enviar pro backend
import {useState} from "react";
import {api} from "../../service/api"

import {Container,Login,Background} from './style';
import {InputText} from '../../Components/InputText';
import {Button} from '../../Components/Button';
import {ButtonText} from '../../Components/ButtonText'
import { CiMail,CiLock } from "react-icons/ci";
import { IoMdArrowBack } from "react-icons/io";
import { RiUser3Line } from "react-icons/ri";

import {Link,useNavigate} from 'react-router-dom'




export function SignUp(){
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const navigate = useNavigate();

function handleSignUp(){
  if(!name || !email || !password){
    return alert('Preencha todos os campos')
  }

  api.post("/users/create",{name,email,password}).then(()=>{
    alert("Usuário cadastrado com sucesso");
    setName('');
    setEmail('');
    setPassword('');
    return navigate("/");
  }).catch(error=>{
    if(error.response){
      return alert(error.response.data.message);
    }else{
      return alert('Não foi possível cadastrar!');
    }
  })
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
    <h2>Crie sua conta</h2>
    <InputText icon={RiUser3Line} title='Nome' type="text" onChange={e => setName(e.target.value)} value={name}/>
    <InputText icon={CiMail} title='Email' type="text" onChange={e => setEmail(e.target.value)} value={email}/>
    <InputText icon={CiLock} title='Senha' type="password" onChange={e => setPassword(e.target.value)} value={password}/>
    <Button title="Cadastrar" onClick={handleSignUp}/>
    
    <Link to="/">
      <IoMdArrowBack size={20}/>
      Voltar para o login
    </Link>

  </div>

   

</Login>

  

<Background/>



</Container>

)


}