import {Container} from './style'
import { RiAddFill,RiCloseFill } from "react-icons/ri";

export function Marcadores({isActivate,OnClick,title="Novo Marcador",value,...rest}){
return (

  <Container
  isActivate={isActivate}
  {...rest}
  >
    <input type="text" 
    placeholder={title}
    readOnly={!isActivate}
    value={value}
    isactivate={isActivate?'true':'false'}
    {...rest}
    />
    <button
    type='button'
    className={isActivate?"button-add":"button-delete"}
    onClick={OnClick}
    >
    {isActivate?<RiAddFill size={25}/>:<RiCloseFill size={25}/>}
    </button>
  </Container>
)
}