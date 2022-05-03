import { Header } from "../../components/header/index";
import { Footer } from "../../components/footer/index";
import manteiga from "../../public/manteiga.png";
import DisplayStar from "../../components/displayStarRate/index";
import CutomButton from "../../components/cutomButton/index";
import amendoim from "../../public/amendoim.png";
import queijo from "../../public/queijo.png";
import { Grid, Container, Image, Button, Text} from "@nextui-org/react";
import Dropdown from 'react-dropdown';

export default function Produto() {
  const options = [
    'one', 'two', 'three'
  ];
  const defaultOption = options[0];
 
  const items = [
    {
      img: manteiga,
      title: "Manteiga de Coco Sabor Manteiga Com Sal QualiCoco 200g",
      text: "Manteiga feita de carne de coco fresco, retirado organicamente de fazendas organigas no sul da Bahia, Brasil; Forte fonte de gordura limpa pra uma alimentação vegana e saudável.",
      starNum: 4,
      price: 13.99,
    },
    {
      img: amendoim,
      title: "Pasta de Amendoim e Chocolate 70% We Nutz 450g",
      text: "Manteiga feita de carne de coco fresco, retirado organicamente de fazendas organigas no sul da Bahia, Brasil; Forte fonte de gordura limpa pra uma alimentação vegana e saudável.",
      starNum: 5,
      price: 17.99,
    },
    {
      img: queijo,
      title: "Queijo Ralado Parmesão Vegetal Sora 50g",
      text: "Manteiga feita de carne de coco fresco, retirado organicamente de fazendas organigas no sul da Bahia, Brasil; Forte fonte de gordura limpa pra uma alimentação vegana e saudável.",
      starNum: 3,
      price: 8.99,
    },
  ];
  return (
  <>
  <Header />
  <Container display="flex" justify="center" css={{alignItems:"center", flexDirection:"row"}}>
   <Container css={{width:"20vw"}}>
    <Image src={items[0].img.src} width="200px"/>
   </Container>
    <Grid.Container  gap={2} css={{margin: "64px", fontFamily:"$title", color:"$brown", width:"50vw"}} justify="center">
   <Grid xs={12}>
    <h3> {items[0].title}</h3>
   </Grid>
   <Grid xs={12}>
    <Text>{items[0].text}</Text>
   </Grid>
   <Grid xs={6}>
    <DisplayStar stars={items[0].starNum}/>
   </Grid>
   <Grid xs={6}>
   </Grid>
   <Grid xs={6}>
    <Text b size={32}> R$ {items[0].price}</Text> 
   </Grid>
   <Grid xs={6}>
    <Text>  <Dropdown options={options}value={defaultOption} placeholder="Select an option" /></Text> 
   </Grid>
   <Grid xs={12}>
    <CutomButton text="Adicionat ao carrinho" /> 
   </Grid>
<Grid>

</Grid>

    </Grid.Container>
    
  </Container>
  <Footer/>
  </>
  );
}
