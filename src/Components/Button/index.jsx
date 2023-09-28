import {Container} from './style'


export function Button({isDelete,title,children,...rest}){
  return(
    <Container isDelete={isDelete} {...rest}>
      {children}
      {title}
    </Container>
  )
}