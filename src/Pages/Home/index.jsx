import { useState,useEffect } from 'react';
import {Container} from './style'
import {Header} from '../../Components/Header'
import { Button } from '../../Components/Button'
import { AiOutlinePlus } from "react-icons/ai";
import { ListaFilmes } from '../../Components/ListaFilmes';
import {Link, useNavigate} from 'react-router-dom'

import { api } from '../../service/api';

export function Home(){
  
  const [searchmovie, setSearchMovie] = useState("");
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  async function handleFilterSearch(search){

    setSearchMovie(search)

    

  }

  function handleDetails(id){
    
    navigate(`/details/${id}`)

    
  }

  useEffect(()=>{
    
    async function loadingMovies(){ 
      
      
      const response = await api.post('/movie/show',{"title":searchmovie,"tags":""});

      setMovies(response.data)

      

    }

    loadingMovies()
    

  },[searchmovie])

return (

<Container>
<Header search={handleFilterSearch}/>

<div className="Content">
<main>
  <div className="Container">
    <h1>Meus filmes</h1>
    <div>
      <Link to="/new">
        {<AiOutlinePlus size={20}/>}
        Adicionar filme
      </Link>
    </div>

  </div>

  <div className="Lista">
    <ul>
      

  {
    movies.map(movie=>(
      <li key={String(movie.id)}>
       <ListaFilmes onClick={()=>handleDetails(movie.id)} data={{Titulo:movie.title,Rating:movie.rating,ID:movie.id,Tags:movie.tags,Descricao:movie.description}}></ListaFilmes>
      </li>

    ))
  }
     
     
    </ul>

    
    
  </div>
</main>
</div>
</Container>

)


}