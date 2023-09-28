import {Container} from './style'

export function TextArea({title,value,...rest}){

  return(

    <Container>
      <textarea name="" cols="30" rows="10" placeholder={title} value={value} {...rest}></textarea>

    </Container>
  )
}