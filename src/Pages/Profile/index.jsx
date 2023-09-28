import {useState} from 'react';
import { useNavigate } from "react-router-dom";

import {useAuth} from '../../hooks/auth'

import avatarPlaceHolder from '../../Assets/avatar_placeholder.svg' 

import {api} from '../../service/api'

import {Container,Header} from './style';
import {ButtonText} from '../../Components/ButtonText';
import { AiOutlineArrowLeft,AiOutlineClockCircle } from "react-icons/ai";
import {InputText} from '../../Components/InputText';
import { FiUser,FiCamera,FiLock } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { GiPadlock } from "react-icons/gi";
import {Button} from '../../Components/Button'
import {Link} from 'react-router-dom'

export function Profile(){
  const {user, updateProfile} = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld,setPasswordOld] = useState();
  const [passwordNew,setPasswordNew] = useState();

  const avatarUrl = user.avatar  ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate(){
    const user = {
      name,
      email,
      password: passwordNew,
      oldpassword: passwordOld,
      
      
    }

 
    

    await updateProfile({user,navigate,avatarFile});

    
  }

  function handleChangeAvatar(event){
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
    

  }
    

  return (
    <Container>
      <Header>
        
    <Link to='/'>
    <ButtonText title="Voltar">
    <AiOutlineArrowLeft size={20}/>
    </ButtonText>
    </Link>
    </Header>

    <main>
      <div className="Img">
      <img src={avatar} alt="" />
      
      <label htmlFor="avatar">
      
      <FiCamera size={22}/>
      <input id="avatar" type="file" onChange={handleChangeAvatar}/>
      </label>
     
           
      </div>
      <div className="BoxName">
      <InputText type="text" value={name} icon={FiUser} onChange={e=>setName(e.target.value)}/>
      <InputText type="email" value={email} icon={AiOutlineMail} onChange={e=>setEmail(e.target.value)}/>
      </div>

      <div className="BoxPassword">
      <InputText type="password" title="Senha atual" icon={GiPadlock} onChange={e=>setPasswordOld(e.target.value)}/>
      <InputText type="password" title="Nova senha" icon={GiPadlock} onChange={e=>setPasswordNew(e.target.value)}/>
      </div>

      <Button title="Salvar" onClick={handleUpdate}></Button>
    </main>
    </Container>
  )
}