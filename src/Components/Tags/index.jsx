import { Container } from './style'

export function Tags ({data,...rest}){

  return(
    <Container>

      {data.map(data=><span key={String(data.id)}>{data.name}</span>)}
      
    </Container>
  )

}