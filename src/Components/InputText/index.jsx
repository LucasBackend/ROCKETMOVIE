import {Container} from './style'




export function InputText({title,type,value,icon:Icon,...rest}){

return (
<Container>

  {Icon && <Icon size={22}/>}
  <input 
  type={type}
  placeholder={title}
  value = {value}
  {...rest}
  />
  
</Container>
)

}