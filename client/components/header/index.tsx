import {
  Container,
  Card,
  Row,
  Col,
  Input,
  Link,
  Spacer,
  Grid,
} from "@nextui-org/react";
import Logo from "../../public/logo-white.svg";
import Image from "next/image";

const SearchBar = () => {
  return (
    <Container>
      <Row>
        <Input
          placeholder="Pesquisar"
          width="100%"
          css={{
            fontFamily: "$title",
            fontWeight: 600,
            background: "$greenLight",
          }}
        />
      </Row>
    </Container>
  );
};

const NavBarLink = ({ href, children }: { href: string; children: string }) => (
  <Link
    css={{
      color: "$linkPrimary",
      fontFamily: "$title",
      fontWeight: 500,
      fontSize: 24,
    }}
    href={href}
  >
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

const NavBarButton = ({
  src,
  width,
  height,
  alt,
  href,
  label,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
  href: string;
  label: string;
}) => (
  <Container display="flex" direction="column" alignItems="center">
    <Image src={src} width={width} height={height} alt={alt} />
    <NavBarLink href={href}>{label}</NavBarLink>
  </Container>
);

const MyAccountButton = () => {
  return (
    <NavBarButton
      label="Minha Conta"
      href="/"
      src="/user.png"
      width={36}
      height={38}
      alt="Icone de Usuário"
    />
  );
};

const OrderButton = () => {
  return (
    <NavBarButton
      label="Carrinho"
      href="/"
      src="/bag.png"
      width={40}
      height={42}
      alt="Icone de Carrinho"
    />
  );
};

export const Header = () => {
  return (
    <Container fluid css={{ background: "$green" }}>
      <Grid.Container alignItems="center">
        <Grid xs>
          <Logo width={170} height={146} alt="veg.co logo" />
        </Grid>
        <Grid xs={5} direction="column">
          <SearchBar />
          <Spacer />
          <NavBar />
        </Grid>
        <Grid xs>
          <MyAccountButton />
        </Grid>
        <Grid xs>
          <OrderButton />
        </Grid>
      </Grid.Container>
    </Container>
  );
};
