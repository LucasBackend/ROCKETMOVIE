import {useState} from 'react'

import {Container,Content,Main} from './style';
import {Header} from '../../Components/Header';
import {ButtonText} from '../../Components/ButtonText';
import { AiOutlineArrowLeft } from "react-icons/ai";
import {InputText} from '../../Components/InputText'
import { TextArea } from '../../Components/TextArea';
import{Marcadores} from '../../Components/Marcadores'
import {Button} from '../../Components/Button'
import {Link} from 'react-router-dom'

import {api} from '../../service/api'
import { useNavigate } from 'react-router-dom';

export function NewMovie(){
  const navigate = useNavigate();

  const [links, setLinks] = useState([]);
  const [newLink,setNewLink] = useState("");
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  function handleAddLink(){
    if(!newLink){
      return alert("O campo link não pode ser vazio")
    }


    setLinks(prevState=>[...prevState, newLink]);
    setNewLink("")

    
  }

  function handleRemoveLink(deleted){

    setLinks(prevState => prevState.filter(link=> link!==deleted));

  }

  async function handleCreateMovie(){
    if(!title || !rating || !description || !links){
      return alert("O preenchimento de todos os campos são obrigatórios!")
    }


   const data = {title,rating,description,links}
    try{
    await api.post("/movie/create",data);
    alert("Filme cadastrado com sucesso!");
    navigate(-1)

    }catch(error){
      if(error.response){
      alert(error.response.data.message)
      }else{
        alert("Não foi possível cadastrar o filme!")
      }
    }
  
  }

  function handleClearData(){
    setTitle("");
    setLinks([]);
    setNewLink("");
    setRating("");
    setDescription("");
  }

  return(


    <Container>
      <Header/>

      <Content>


      <Main>
      <div className="ContainerBox">
      <div className="HeaderBox">
      <div>
      <Link to="/">
        <AiOutlineArrowLeft size={20}/>
        Voltar
      </Link>
      </div>
      <h1>
        Novo Filme
      </h1>
      </div>

      <div>
        <InputText title="Título" type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
        <InputText title="Sua nota (de 0 a 5)" type="text" value={rating} onChange={(e)=>setRating(e.target.value)}/>
      </div>
      <TextArea title="Observações" onChange={(e)=>setDescription(e.target.value)} value={description}/>

      <div className="Marcadores">
        <h2>Marcadores</h2>

        <div className="CaixaMarcadores">
          <Marcadores isActivate={true}
          value={newLink}
          onChange={e=> setNewLink(e.target.value)}
          OnClick={handleAddLink}
          />

          {
            links.map((link,index)=>(
              <Marcadores
              key={String(index)}
              value={link}
              OnClick={()=>handleRemoveLink(link)}
              />

              
            ))

          }

        </div>
        
      </div>

      <div className="Buttons">
      <Button title="Excluir Alterações" isDelete={true} onClick={handleClearData}></Button>
      <Button title="Salvar alterações" onClick={handleCreateMovie}></Button>
      </div>

      </div>

      </Main>

    


      </Content>




    </Container>

  )


}