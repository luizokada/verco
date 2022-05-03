import { Grid, Container, Image, Button } from "@nextui-org/react";

export const Divider = (props) => {
  const { title } = props;
  return (
    <Container
      css={{
        background: "$green",
        color: "$textSecondary",
        fontFamily: "$title",
        fontWeight: 500,
        fontSize: 36,
        height: "80px",
        textAlign: "center",
        paddingTop: "16px",
      }}
    >
      {title}
    </Container>
  );
};
