import {Header} from "../../components/header/index"
import {Footer} from "../../components/footer/index"
import { Input, Container, Button, Grid, Link } from '@nextui-org/react';
import { HiEye, HiEyeOff} from "react-icons/hi";
  
export default function SobreNos(){
    return (
        <>
        <Header/>
        <Container css={{display: "flex", justifyContent:"center", alignItems:"center", h: "62vh", fontFamily: "$title", color:"$brown"}}>
          <h1>Sobre Nós!</h1>
          <Container css={{justifyContent:"center", alignItems:"center", h:"50vh"}}>
            <p>O nosso objetivo não é apenas vender um produtos veganos e sim, conseguir mostrar
              para mais pessoas que é possível unir uma alimentação, sem crueldade animal com
              uma vida saudável.
            </p>
            <p>Todas as lojas disponibilizadas no nosso site foram contatadas e verificadas para que
              os produtos não tenham nenhuma origem animal ou que adote testes em animais.
              Por isso, elas têm o compromisso e seriedade na separação e entrega destes produtos.
              Porém, para qualquer denúncia, favor entrar em contato conosco para que possamos verificar
              com a empresa.
            </p>
            <p><b>Contato</b><br></br
            >E-mail: contato@vegco.com.br<br></br>
            Facebook: https://www.facebook.com/vegco.com<br></br>
            Twitter: https://www.twitter.com/vegco<br></br>
            Instagram: @VegCo - https://www.instagram.com/vegco
            </p>
          </Container>
        </Container>
        <Footer/>
        </>
    );
}