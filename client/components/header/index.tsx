import {
  Container,
  Card,
  Row,
  Col,
  Input,
  Link,
  Spacer,
} from "@nextui-org/react";
import Logo from "../../public/logo-white.svg";
import User from "../../public/user.svg";
import Bag from "../../public/bag.svg";

const SearchBar = () => {
  return (
    <Container>
      <Row>
        <Input placeholder="Pesquisar" width="100%" />
      </Row>
    </Container>
  );
};

const NavBarLink = ({ href, children }) => (
  <Link css={{ color: "$linkPrimary" }} href={href}>
    {children}
  </Link>
);

const NavBar = () => {
  return (
    <Container>
      <Row justify="space-evenly">
        <NavBarLink href="/">Home</NavBarLink>
        <NavBarLink href="/">Categorias</NavBarLink>
        <NavBarLink href="/">Sobre nós</NavBarLink>
      </Row>
    </Container>
  );
};

const MyAccountButton = () => {
  return (
    <Container display="flex" direction="column" alignItems="center">
      <User width={40} alt="Icone de Usuário" />
      <NavBarLink href="/">Minha Conta</NavBarLink>
    </Container>
  );
};

const OrderButton = () => {
  return (
    <Container display="flex" direction="column" alignItems="center">
      <Bag width={40} alt="Icone de Usuário" />
      <NavBarLink href="/">Carrinho</NavBarLink>
    </Container>
  );
};

export const Header = () => {
  return (
    <Container fluid>
      <Card css={{ background: "$green" }}>
        <Row align="center">
          <Col>
            <Logo width={170} height={146} alt="veg.co logo" />
          </Col>
          <Col>
            <SearchBar />
            <Spacer />
            <NavBar />
          </Col>
          <Col>
            <MyAccountButton />
          </Col>
          <Col>
            <OrderButton />
          </Col>
        </Row>
      </Card>
    </Container>
  );
};
