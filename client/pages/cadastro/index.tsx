import {Header} from "../../components/header/index"
import { Input, Container, Button, Grid, Link } from '@nextui-org/react';
import { HiEye, HiEyeOff} from "react-icons/hi";
// import Link from 'next/link'


function CustomButton({
    // onClick,
    text,
  }: {
    // onClick: Function;
    text: String;
  }) {
    const redirectLink = text == "Continuar" ? "endereco" : ""
    return (
      <Button
        css={{
          background: "$brown",
          color: "white",
          fontSize: "$title",
          "&:hover": {
            background: "$brown",
            color: "white",
          },
        }}
        auto
        light
        // onClick={onClick(text)}
      >
        <Link css={{color:"white"}} href={`/${redirectLink}`}>{text}</Link>
      </Button>
    );
  }
  
export default function Cadastro(){
    // const handleClick = ({goTo} : {goTo: String}) => {
    //     const redirectLink = goTo == "Continuar" ? "endereco" : "home"
    //     console.log(redirectLink)
    //     return(
    //         <Link href={`/${redirectLink}`}/>
    //     )
    // }
    return (
        <>
        <Header/>
        <Container css={{display: "flex", justifyContent:"center", alignItems:"center", h: "70vh", fontFamily: "$title", color:"$brown"}}>
            <h1>Cadastro</h1>
            <Grid.Container gap={3} >
                <Grid xs={6}>
                    <Input  labelPlaceholder="Nome Completo" width="360px" />
                </Grid>
                <Grid xs={6}>
                    <Input labelPlaceholder="E-mail" width="360px"/>
                </Grid>
                <Grid xs={6}>
                    <Input.Password
                        labelPlaceholder="Senha"
                        width="360px"
                        visibleIcon={<HiEye fill="currentColor" />}
                        hiddenIcon={<HiEyeOff fill="currentColor" />}
                    />
                </Grid>
                <Grid xs={6}>
                <Input.Password
                        labelPlaceholder="Confirmar Senha"
                        width="360px"
                        visibleIcon={<HiEye fill="currentColor" />}
                        hiddenIcon={<HiEyeOff fill="currentColor" />}
                    />
                </Grid>
            </Grid.Container>
            <Container display="flex" justify="space-around" css={{maxWidth: "480px", marginTop: "32px"}}>
                <CustomButton text="Continuar" />
                <CustomButton text="Voltar" />
            </Container>
        </Container>
        </>
    );
}