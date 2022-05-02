import { Grid, Container, Image, Button } from "@nextui-org/react";
import star from "../../public/star.png";
import emptyStar from "../../public/empty_star.png";
export default function ItemCard(props) {
  const { img, starNum, title, price } = props;
  const starsDisplay = [];
  let contStar = starNum;
  for (let i = 0; i <= 4; i++) {
    if (contStar != 0) {
      starsDisplay.push(star.src);
      contStar--;
    } else {
      starsDisplay.push(emptyStar.src);
    }
  }
  return (
    <Container
      css={{
        width: "280px",
        h: "400px",
        borderRadius: "25px",
        boxShadow: "5px 5px 20px #ccc",
        position: "relative",
        cursor: "pointer",
      }}
    >
      <Image css={{ marginTop: "8px" }} w="280px" h="280px" src={img.src} />

      <p>{title}</p>
      <Container
        css={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {starsDisplay.map((star) => (
          <Image src={star} />
        ))}
        <h3
          style={{
            fontWeight: 900,
            paddingTop: " 8px",
          }}
        >
          R$ {price}
        </h3>
      </Container>
    </Container>
  );
}
