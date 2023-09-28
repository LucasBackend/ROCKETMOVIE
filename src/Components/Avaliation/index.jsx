import {Container} from './style'
import { AiOutlineStar,AiFillStar } from "react-icons/ai";

export function Avaliation({Rating,...rest}){

  return (

  <Container>

    <span>{Rating>=1 ? <AiFillStar/> : <AiOutlineStar/>}</span>
    <span>{Rating>=2 ? <AiFillStar/> : <AiOutlineStar/>}</span>
    <span>{Rating>=3 ? <AiFillStar/> : <AiOutlineStar/>}</span>
    <span>{Rating>=4 ? <AiFillStar/> : <AiOutlineStar/>}</span>
    <span>{Rating>=5 ? <AiFillStar/> : <AiOutlineStar/>}</span>
    
  </Container>



  )
}