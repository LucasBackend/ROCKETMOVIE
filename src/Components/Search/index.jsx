import {Container} from './style'

export function Search({PlaceHolder,...rest}){


return (
<Container

>
  <input placeholder={PlaceHolder} {...rest} type="text"></input>
</Container>

)


}