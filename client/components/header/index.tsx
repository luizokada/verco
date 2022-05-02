import {
  Container,
  Row,
  Input,
  Link,
  Spacer,
  Grid,
  Button,
  Modal,
  Text,
} from "@nextui-org/react";
import Logo from "../../public/logo-white.svg";
import Image from "next/image";
import React, { useState } from "react";

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
      color: "$textSecondary",
      fontFamily: "$title",
      fontWeight: 500,
      fontSize: 24,
    }}
    href={href}
  >
    {children}
  </Link>
);

const NavBarButton = ({
  onClick,
  label,
  children,
}: {
  onClick?: (() => void) | undefined;
  label: string;
  children?: string | undefined;
}) => (
  <Button
    css={{
      color: "$textSecondary",
      fontFamily: "$title",
      fontWeight: 500,
      fontSize: 24,
      background: "transparent",
    }}
    onClick={onClick}
    placeholder={children}
  >
    {label}
  </Button>
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

const NavBarAnchor = ({
  src,
  width,
  height,
  alt,
  href,
  label,
  placeholder,
  button = false,
  onClick,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
  href?: string;
  label: string;
  placeholder?: string;
  button?: boolean;
  onClick?: (() => void) | undefined;
}) => (
  <Container display="flex" direction="column" alignItems="center">
    <Image src={src} width={width} height={height} alt={alt} />
    {href && <NavBarLink href={href}>{label}</NavBarLink>}
    {button && (
      <NavBarButton onClick={onClick} label={label}>
        {placeholder}
      </NavBarButton>
    )}
  </Container>
);

const OrderButton = () => {
  return (
    <NavBarAnchor
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
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };

  const MyAccountButton = () => {
    return (
      <NavBarAnchor
        label="Minha Conta"
        src="/profile.png"
        width={36}
        height={38}
        alt="Icone de Usuário"
        button
        onClick={handler}
      />
    );
  };

  const LoginModal = () => {
    return (
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text
            id="modal-title"
            css={{ fontFamily: "$title", fontSize: 36, color: "$lightBrown" }}
          >
            Login
          </Text>
        </Modal.Header>
        <Modal.Body css={{ fontFamily: "$title", color: "$lightBrown" }}>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            css={{ background: "$greenLight", border: 0 }}
            animated={false}
            shadow={false}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Senha"
            css={{ background: "$greenLight", border: 0 }}
            animated={false}
            shadow={false}
          />
          <Row justify="space-between"></Row>
        </Modal.Body>
        <Modal.Footer css={{ fontFamily: "$title" }}>
          <Container
            dir="column"
            display="flex"
            alignContent="center"
            justify="center"
          >
            <Text
              css={{
                fontFamily: "$title",
                fontSize: 14,
                color: "$lightBrown",
                fontWeight: 700,
              }}
            >
              Esqueci minha senha
            </Text>
            <Text
              css={{ fontFamily: "$title", fontSize: 14, color: "$lightBrown" }}
            >
              Não possui uma conta?{" "}
              <Link href="/cadastro" style={{ color: "#7B633F", fontWeight: 600 }}>
                Cadastre-se aqui!
              </Link>
            </Text>
            <Spacer y={3} />
            <Container dir="row" display="flex" justify="space-evenly">
              <Button
                css={{ background: "$green", fontSize: 18 }}
                auto
                onClick={closeHandler}
              >
                Entrar
              </Button>
            </Container>
          </Container>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <Container
      fluid
      display="flex"
      justify="center"
      alignContent="center"
      css={{ background: "$green", minHeight: 160, w: "100%" }}
    >
      <Grid.Container alignItems="center" justify="center">
        <Grid xs>
          <Logo width={170} height={146} alt="veg.co logo" />
        </Grid>
        <Grid xs={6} direction="column">
          <SearchBar />
          <Spacer />
          <NavBar />
        </Grid>
        <Grid xs>
          <MyAccountButton />
          <LoginModal />
        </Grid>
        <Grid xs>
          <OrderButton />
        </Grid>
      </Grid.Container>
    </Container>
  );
};
