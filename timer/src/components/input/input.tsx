import { Container } from "./styles";

interface Inputprops{
type: string
placeholder: string
}

export default function Input({type, placeholder}:Inputprops){
    return(
        <Container type={type} placeholder={placeholder}/>
       
    )
}