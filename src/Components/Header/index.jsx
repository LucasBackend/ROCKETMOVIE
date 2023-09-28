import {Container,Profile} from './style'
import {Search} from '../Search'
import {Link} from 'react-router-dom'

import { useNavigate } from 'react-router-dom'

import {useAuth} from '../../hooks/auth.jsx'

import {api} from '../../service/api'

import avatarPlaceHolder from '../../Assets/avatar_placeholder.svg'

export function Header({search}){

const {signOut,user} = useAuth();

const userAvatar = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}`: avatarPlaceHolder

const navigate = useNavigate();


return (
 <Container>
  <h1>RocketMovies</h1>
  <Search type="text" PlaceHolder="Pesquise pelo título" onChange={(e)=>{search(e.target.value)}}/>
  <Profile>
  <div>
    <h2>{user.name}</h2>
    <button onClick={()=>{signOut(navigate);}}>sair</button>
  </div>

  <Link to="/profile">
  <img src={userAvatar} alt="Imagem de perfil" />
  </Link>
  </Profile>
 </Container>

)


}