import { Text } from "@nextui-org/react";
import { NextPage } from "next";
import DefaultPageTemplate from "../../components/default-page-template";

export const PerfilPage: NextPage = () => {
  return (
    <DefaultPageTemplate
      tabTitle="Perfil | veg.co"
      contentDescription="Produtos veganos ao melhor preço!"
    >
      <Text>Perfil</Text>
    </DefaultPageTemplate>
  );
};
