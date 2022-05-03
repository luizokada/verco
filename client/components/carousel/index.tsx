import { useState } from "react";
import { Grid, Container, Image, Button } from "@nextui-org/react";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
function CustomButtom({
  onClick,
  displayButtonImage,
}: {
  onClick: (() => void) | undefined;
  displayButtonImage: Function;
}) {
  return (
    <Button
      css={{
        background: "transparent",
        color: "$brown",
        scale: 1.8,
        fontSize: "$title",
        "&:hover": {
          background: "$brown",
          color: "white",
        },
      }}
      auto
      light
      onClick={onClick}
    >
      {displayButtonImage()}
    </Button>
  );
}

function CircleButtom({ id, onClick }: { id: number; onClick: Function }) {
  return (
    <Button
      css={{
        backgroundColor: "$brownLight",
        borderRadius: 100,
        scale: 0.3,
        "&:focus": {
          background: "$brown",
        },
      }}
      onClick={() => onClick({ id })}
      auto
    />
  );
}

const items = [
  {
    src: "./supervegan.png",
    altText: "Slide 1",
    key: 0,
  },
  {
    src: "./kitkat.png",
    altText: "Slide 2",
    key: 1,
  },
  {
    src: "./modavegana.png",
    altText: "Slide 3",
    key: 2,
  },
];

export const Carousel = () => {
  const [currImage, setCurrImage] = useState(items[0]);

  const handleClickNext = () => {
    const index = currImage.key == items.length - 1 ? 0 : currImage.key + 1;
    setCurrImage(items[index]);
  };

  const handleClickPrev = () => {
    const index = currImage.key == 0 ? items.length - 1 : currImage.key - 1;
    setCurrImage(items[index]);
  };

  const handleClickCircle = ({ id }: { id: number }) => {
    setCurrImage(items[id]);
  };

  return (
    <Container
      css={{
        display: "flex",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: "120px",
        paddingBottom: 25,
        maxWidth: "80vw",
      }}
    >
      <CustomButtom
        onClick={handleClickPrev}
        displayButtonImage={() => <BiChevronLeft />}
      />
      <Image
        css={{
          maxWidth: "800px",
        }}
        src={currImage.src}
        alt="Default Image"
        objectFit="cover"
      />
      <CustomButtom
        onClick={handleClickNext}
        displayButtonImage={() => <BiChevronRight />}
      />
      <Container
        css={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <CircleButtom id={0} onClick={handleClickCircle} />
        <CircleButtom id={1} onClick={handleClickCircle} />
        <CircleButtom id={2} onClick={handleClickCircle} />
      </Container>
    </Container>
  );
};
