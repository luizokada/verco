import { Grid, Container, Image, Text } from "@nextui-org/react";
import DisplayStar from "../../components/displayStarRate/index";
import CutomButton from "../../components/cutomButton/index";

export default function DisplayProduct(props) {
  const { img, title, about, store, price, starNum } = props;

  return (
    <Container
      display="flex"
      justify="center"
      css={{
        alignItems: "center",
        flexDirection: "row",
        maxHeight: "400px",
        maxWidth: "1400px",
        marginTop: "128px",
        marginBottom: "128px",
        position: "relative",
      }}
    >
      <Container css={{ width: "20vw" }}>
        <Image src={img.src} width="200px" />
      </Container>
      <Grid.Container
        gap={2}
        css={{
          fontFamily: "$title",
          color: "$brown",
          width: "50vw",
        }}
        justify="center"
      >
        <Grid xs={12}>
          <h3> {title}</h3>
        </Grid>
        <Grid xs={12}>
          <Text>{about}</Text>
        </Grid>
        <Grid xs={6}>
          <h3>{store}</h3>
        </Grid>
        <Grid xs={6}>
          <DisplayStar stars={starNum} />
        </Grid>
        <Grid xs={6}>
          <Text b size={32}>
            {" "}
            R$ {price.toFixed(2)}
          </Text>
        </Grid>
        <Grid xs={6}></Grid>
        <Grid xs={12}>
          <CutomButton text="Ir para loja" />
        </Grid>
        <Grid></Grid>
      </Grid.Container>
    </Container>
  );
}
