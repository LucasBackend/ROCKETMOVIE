import {Container} from './style'
import { AiOutlineStar,AiFillStar } from "react-icons/ai";


export function ListaFilmes({data,...rest}){

return(
  <Container
  {...rest}
  disabled={false}
  >
    <h1>{data.Titulo}</h1>
    <div className="rating">
      <span>{data.Rating >=1 ? <AiFillStar/>:<AiOutlineStar/>}</span>
      <span>{data.Rating >=2 ? <AiFillStar/>:<AiOutlineStar/>}</span>
      <span>{data.Rating >=3 ? <AiFillStar/>:<AiOutlineStar/>}</span>
      <span>{data.Rating >=4 ? <AiFillStar/>:<AiOutlineStar/>}</span>
      <span>{data.Rating >=5 ? <AiFillStar/>:<AiOutlineStar/>}</span>
      
    </div>
    
    <span>{data.Descricao}</span>

    <div className="TAGS">
      {data.Tags.map(tag=><span key={tag.id} >{tag.name}</span>)}
    </div>
     
    

  </Container>

)

}