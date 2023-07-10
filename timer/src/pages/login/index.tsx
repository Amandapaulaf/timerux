import Input from "@/components/input/input";
import { Form, Header, Main, Wrapper } from "./styles";
import Button from "@/components/button";
import Separator from "@/components/separator";

export default function Login(){

return(
<Wrapper> 
    <Main> 
        <Header>
            <h1> Timer</h1>
            <p> seja o senhor do seu própio tempo</p>
        </Header>
        <Form>
            <div className="inputContainer">
             <Input type="email"  placeholder= "E-mail"/>
             <Input type="password" placeholder= "senha"/>
             </div>
             <Separator/>
            <Button/>
            
        </Form>
    </Main>
    <footer>Desenvolvido pela UX Software 💕</footer>
</Wrapper>
)
}