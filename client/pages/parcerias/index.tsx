import { Grid} from "@nextui-org/react";
import PlanCard from "../../components/planCard/index"
import {Header} from "../../components/header/index"
import {Footer} from "../../components/footer/index"


export default function Parcerias() {
    const planos = [{
        title: "Mensal",
        about: "Você tem o direito a fazer propaganda em até todas as categorias existentes no nosso site, para saber quais são, basta clicar no borão 'Categorias' no cabeçalho",
        price: "59,99"
    }, 
    {
        title: "Semestral",
        about: "Você tem o direito a fazer propaganda em até todas as categorias existentes no nosso site, para saber quais são, basta clicar no borão 'Categorias' no cabeçalho",
        price: "149,99"
    },
    {
        title: "Anual",
        about: "Você tem o direito a fazer propaganda em até todas as categorias existentes no nosso site, para saber quais são, basta clicar no borão 'Categorias' no cabeçalho",
        price: "249,99"
    }]
    

  return (
      <>
      <Header/>
      <Grid.Container gap={5} justify="center" css={{marginTop: "20px", marginBottom: "20px"}}>
        {planos.map((plan) => <PlanCard title={plan.title} about={plan.about} price={plan.price}/>)}
      </Grid.Container>
    <Footer/>
    </>
  );
}