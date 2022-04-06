import { Container, Text } from "@nextui-org/react";
import GreenLogo from "../../public/logo-green.svg";

export const Footer = ({}) => (
  <Container
    display="flex"
    alignContent="flex-end"
    css={{ background: "$brown", color: "$textSecondary" }}
  >
    <GreenLogo />
    <Text>Footer</Text>
  </Container>
);
