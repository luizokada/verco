import { Header } from "../../components/header/index";
import { Footer } from "../../components/footer/index";
import manteiga from "../../public/manteiga.png";
import amendoim from "../../public/amendoim.png";
import queijo from "../../public/queijo.png";
import DisplayProduct from "../../components/displayProduct/index";
import { Grid, Container } from "@nextui-org/react";
import { useRouter } from "next/router";
import Bar from "../../components/categoryBar/index";

function displayNumberOfItems(quantity, item) {
  const lojas = [
    "Loja Super Veganos",
    "EcoVida",
    "Veganismo.com",
    "Save The Planet",
    "Planeta Feliz",
    "Comidinhas da Terra",
  ];
  const totalItems = [];
  for (let i = 0; i <= quantity; i++) {
    let randomStarNum = Math.floor(Math.random() * 6);
    const newItem = { ...item, starNum: randomStarNum, store: lojas[i] };
    totalItems.push(newItem);
  }

  return totalItems;
}
export default function Produto() {
  const router = useRouter();
  const { id } = router.query;
  const indexDisplay = parseInt(id);

  const items = [
    {
      img: manteiga,
      title: "Manteiga de Coco Sabor Manteiga Com Sal QualiCoco 200g",
      text: "Manteiga feita de carne de coco fresco, retirado organicamente de fazendas organigas no sul da Bahia, Brasil; Forte fonte de gordura limpa pra uma alimentação vegana e saudável.",
      store: "Loja Super Veganos",
      starNum: 4,
      price: 13.99,
    },
    {
      img: amendoim,
      title: "Pasta de Amendoim e Chocolate 70% We Nutz 450g",
      text: "Pasta de amendoim e Chocolate 70% We Nutz 450g é a melhor escolha para uma refeição leve, saudavel e cheia de nutrientes paraa sua alimentação, sem machucar a mãe natureza!",
      store: "Veganismo.com",
      starNum: 5,
      price: 17.99,
    },
    {
      img: queijo,
      title: "Queijo Ralado Parmesão Vegetal Sora 50g",
      text: "Queijo Ralado Parmesão Vegetal Sora é, alem de vegano sem envolver nada de procedencia animal, não possui lactose, sendo uma ótima opção para suas refeições mais saborosas.",
      store: "EcoVida",
      starNum: 3,
      price: 8.99,
    },
  ];
  const currItem = items[indexDisplay];
  const finalItems = displayNumberOfItems(5, currItem);
  console.log(finalItems);

  return (
    <>
      <Header />
      <Container css={{ position: "relative" }}>
        {/* <Container css={{ position: "absolute", left: 0 }}>
          <Bar />
        </Container> */}
        {finalItems.map((product, index) => (
          <DisplayProduct
            img={product.img}
            title={product.title}
            about={product.text}
            store={product.store}
            price={product.price + index * 1.5}
            starNum={product.starNum}
          />
        ))}
      </Container>
      <Footer />
    </>
  );
}
