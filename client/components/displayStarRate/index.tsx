import star from "../../public/star.png";
import emptyStar from "../../public/empty_star.png";
import { Image, Container} from "@nextui-org/react";

export default function displayStarRate({ stars }: { stars: number }){
let contStar = stars;
const displayStar = []
  for (let i = 0; i <= 4; i++) {
    if (contStar != 0) {
        displayStar.push(star.src);
        contStar--;
    } else {
        displayStar.push(emptyStar.src);
    }
  }

  return(
      <Container display="flex" >
         {displayStar.map((star) => <Image src={star} />)}
      </Container>
  )
}