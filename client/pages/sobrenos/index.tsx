import { Container, Text } from "@nextui-org/react";
import DefaultPageTemplate from "../../components/default-page-template";

export default function SobreNos() {
  return (
    <DefaultPageTemplate tabTitle="Sobre nós" contentDescription="Sobre nós">
      <Container
        css={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          h: "72vh",
          fontFamily: "$title",
          color: "$brown",
        }}
      >
        <h1>Sobre Nós!</h1>
        <Container
          css={{
            h: "50vh",
            w: "60vw",
            textAlign: "left",
          }}
        >
          <Text css={{ marginBottom: "16px" }}>
            O nosso objetivo não é apenas vender um produtos veganos e sim,
            conseguir mostrar para mais pessoas que é possível unir uma
            alimentação, sem crueldade animal com uma vida saudável.
          </Text>
          <Text css={{ marginBottom: "16px" }}>
            Todas as lojas disponibilizadas no nosso site foram contatadas e
            verificadas para que os produtos não tenham nenhuma origem animal ou
            que adote testes em animais. Por isso, elas têm o compromisso e
            seriedade na separação e entrega destes produtos. Porém, para
            qualquer denúncia, favor entrar em contato conosco para que possamos
            verificar com a empresa.
          </Text>
          <Text b>Contato</Text>
          <Text>
            <span style={{ fontWeight: "600" }}>E-mail: </span>{" "}
            contato@vegco.com.br
          </Text>
          <Text>
            <span style={{ fontWeight: "600" }}>Facebook: </span>{" "}
            https://www.facebook.com/vegco.com
          </Text>
          <Text>
            {" "}
            <span style={{ fontWeight: "600" }}>Twitter: </span>{" "}
            https://www.twitter.com/vegco
          </Text>
          <Text>
            <span style={{ fontWeight: "600" }}>Instagram: </span> @VegCo -
            https://www.instagram.com/vegco
          </Text>
        </Container>
      </Container>
    </DefaultPageTemplate>
  );
}
