import { Header } from "../../components/header/index";
import { Footer } from "../../components/footer/index";
import manteiga from "../../public/manteiga.png";
import DisplayStar from "../../components/displayStarRate/index";
import CutomButton from "../../components/cutomButton/index";
import amendoim from "../../public/amendoim.png";
import queijo from "../../public/queijo.png";
import { Grid, Container, Image, Button, Text} from "@nextui-org/react";
import Downshift from 'downshift'
import axios from "axios"
import dotenv from 'dotenv/config'
import { useState } from "react";

export default function Produto() {
  // const options = [
  //   {value: 'apple'},
  //   {value: 'pear'},
  //   {value: 'orange'},
  //   {value: 'grape'},
  //   {value: 'banana'},
  // ]
  // const defaultOption = options[0];
  // const register = ( { payload }: Payload ) => {
  //   axios.post(process.env.API_URL, payload, headers)
  //   }
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
      text: "Manteiga feita de carne de coco fresco, retirado organicamente de fazendas organigas no sul da Bahia, Brasil; Forte fonte de gordura limpa pra uma alimentação vegana e saudável.",
      store: "Veganismo.com",
      starNum: 5,
      price: 17.99,
    },
    {
      img: queijo,
      title: "Queijo Ralado Parmesão Vegetal Sora 50g",
      text: "Manteiga feita de carne de coco fresco, retirado organicamente de fazendas organigas no sul da Bahia, Brasil; Forte fonte de gordura limpa pra uma alimentação vegana e saudável.",
      store: "EcoVida",
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
      <h3>{items[0].store}</h3> 
    </Grid>
   <Grid xs={6}>
      <DisplayStar stars={items[0].starNum}/>
   
   </Grid>
   <Grid xs={6}>
    <Text b size={32}> R$ {items[0].price}</Text> 
   </Grid>
   <Grid xs={6}>
   {/* <Downshift
    onChange={selection =>
      alert(selection ? `You selected ${selection.value}` : 'Selection Cleared')
    }
    itemToString={item => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
      getRootProps,
    }) => (
      <div>
        <label {...getLabelProps()}>Enter a fruit</label>
        <div
          style={{display: 'inline-block'}}
          {...getRootProps({}, {suppressRefError: true})}
        >
          <input {...getInputProps()} />
        </div>
        <ul {...getMenuProps()}>
          {isOpen
            ? options
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
  </Downshift> */}
   </Grid>
   <Grid xs={12}>
    <CutomButton text="Ir para loja" /> 
   </Grid>
<Grid>

</Grid>

    </Grid.Container>
    
  </Container>
  <Footer/>
  </>
  );
}
