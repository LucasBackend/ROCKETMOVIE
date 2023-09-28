import {Container,Content} from './style'
import {Header} from '../../Components/Header'
import {ButtonText} from '../../Components/ButtonText'
import { AiOutlineArrowLeft,AiOutlineClockCircle } from "react-icons/ai";
import {Avaliation} from '../../Components/Avaliation'
import {Tags} from '../../Components/Tags'
import {Link, useParams} from 'react-router-dom'
import {useState,useEffect} from 'react'
import avatarPlaceHolder from '../../Assets/avatar_placeholder.svg' 

import {useAuth} from '../../hooks/auth.jsx'


import { api } from '../../service/api';



export function Details(){

const [data, setData] = useState(null);

const params = useParams();

const {user} = useAuth();

const avatarUrl = user.avatar  ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder

useEffect(()=>{

  async function fetchMovie(){
    
    const response = await api.get(`movie/details/${params.id}`);
    
    setData(response.data)

  }

  fetchMovie();

  

  

},[])

return(
  
  <Container>
  <Header/>

  <Content>
    {
      data &&
    <main>

    <div className="Container_Box">
      <div className="voltar">
      <Link to='/'>
      <ButtonText title="Voltar">
        <AiOutlineArrowLeft size={20}/>
      </ButtonText>
      </Link>
      </div>

      <div className="header">
        <h1>{data.movie.title}</h1>
        <Avaliation Rating={data.movie.rating}></Avaliation>
      </div>

      <div className="info">

        <div>
        <img src={avatarUrl} alt="Imagem de perfil"/>
        <span>Por {user.name}</span>
        </div>

        <div>
        <AiOutlineClockCircle/>
        <span>{data.movie.update_at}</span>
        </div>
        
      </div>
    </div>
      <Tags data={data.tags}></Tags>
    

    <span id='Descricao'>
      {data.movie.description}
      
    </span>




    </main>
  }
  </Content>


  </Container>
)


}