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

type FooterText = {
  title: string;
  arrayText: string[];
};

const footerText: FooterText[] = [
  {
    title: "Institucional",
    arrayText: [
      "Sobre a loja",
      "Política de entrega",
      "Política de condições",
      "Política de privacidade",
    ],
  },
  {
    title: "Dúvidas",
    arrayText: ["Fale conosco", "Dúvidas Frequentes"],
  },
  {
    title: "Minha Conta",
    arrayText: ["Meus pedidos", "Endereço de entrega", "Alterar senha"],
  },
];

export const Footer = () => {
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
        {footerText.map(({ title, arrayText }, index) => (
          <TextDisplay title={title} textList={arrayText} key={index} />
        ))}
      </Grid.Container>
    </Container>
  );
};
