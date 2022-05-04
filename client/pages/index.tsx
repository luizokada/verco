import { HomeBar } from "../components/home-bar";
import DefaultPageTemplate from "../components/default-page-template";
import { Carousel } from "../components/carousel";
import { Divider } from "../components/divider";
import DisplayItems from "../components/displayItems";

function Home() {
  return (
    <DefaultPageTemplate
      tabTitle="Início | veg.co"
      contentDescription="Produtos veganos ao melhor preço!"
    >
      <>
        <HomeBar />
        <Carousel />
        <Divider title="Novidades" id="iha" />
        <DisplayItems />
        <Divider title="Mais Comprados" />
        <DisplayItems />
      </>
    </DefaultPageTemplate>
  );
}

export default Home;
