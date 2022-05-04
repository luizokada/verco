import { Grid, Container } from "@nextui-org/react";
import PlanCard from "../../components/planCard/index";
import DefaultPageTemplate from "../../components/default-page-template";

export default function Parcerias() {
  const planos = [
    {
      title: "Mensal",
      about:
        "Você tem o direito a fazer propaganda em até todas as categorias existentes no nosso site, para saber quais são, basta clicar no borão 'Categorias' no cabeçalho",
      price: "59,99",
    },
    {
      title: "Semestral",
      about:
        "Você tem o direito a fazer propaganda em até todas as categorias existentes no nosso site, para saber quais são, basta clicar no borão 'Categorias' no cabeçalho",
      price: "149,99",
    },
    {
      title: "Anual",
      about:
        "Você tem o direito a fazer propaganda em até todas as categorias existentes no nosso site, para saber quais são, basta clicar no borão 'Categorias' no cabeçalho",
      price: "249,99",
    },
  ];

  return (
    <DefaultPageTemplate
      tabTitle="Parceria"
      contentDescription="Seja um parceiro"
    >
      <Container
        css={{
          color: "$brown",
          textAlign: "center",
          marginTop: "32px",
          fontFamily: "$title",
        }}
      >
        <h1>Tenha seus produtos anunciados!</h1>
        <Grid.Container
          gap={5}
          justify="center"
          css={{ marginTop: "20px", marginBottom: "20px" }}
        >
          {planos.map((plan, index) => (
            <PlanCard
              title={plan.title}
              about={plan.about}
              price={plan.price}
              key={index}
            />
          ))}
        </Grid.Container>
      </Container>
    </DefaultPageTemplate>
  );
}
