import type { NextPage } from "next";
import { HomeBar } from "../components/home-bar";
import  DefaultPageTemplate  from "../components/default-page-template";

function Home() {
  return (
    <DefaultPageTemplate
      tabTitle="Início | veg.co"
      contentDescription="Produtos veganos ao melhor preço!"
    >
      <HomeBar />
    </DefaultPageTemplate>
  );
}

export default Home;
