import { Container, Text, Grid } from "@nextui-org/react";
import GreenLogo from "../../public/logo-green.svg";

function TextDisplay({
  title,
  textList,
}: {
  title: string;
  textList: string[];
}) {
  return (
    <Grid
      xs={2}
      css={{ display: "flex", flexDirection: "column", color: "$textPrimary" }}
    >
      <Text css={{ fontSize: 24, color: "$textPrimary", fontFamily: "$title" }}>
        {title}
      </Text>
      {textList.map((text) => (
        <Text
          css={{
            fontSize: 14,
            color: "$textSecondary",
            fontFamily: "$text",
          }}
        >
          {text}
        </Text>
      ))}
    </Grid>
  );
}

export const Footer = () => {
  const institucional = [
    "Sobre a loja",
    "Política de entrega",
    "Política de condições",
    "Política de privacidade",
  ];
  const duvidas = ["Fale conosco", "Dúvidas Frequentes"];
  const minhaConta = ["Meus pedidos", "Endereço de entrega", "Alterar senha"];
  return (
    <Container
      display="flex"
      alignContent="flex-end"
      css={{ background: "$brown", color: "$textSecondary", padding: "30px" }}
    >
      <Grid.Container gap={1} justify="center">
        <Grid xs={4}>
          <GreenLogo />
        </Grid>
        <TextDisplay title="Institucional" textList={institucional} />
        <TextDisplay title="Dúvidas" textList={duvidas} />
        <TextDisplay title="Minha Conta" textList={minhaConta} />
      </Grid.Container>
    </Container>
  );
};
