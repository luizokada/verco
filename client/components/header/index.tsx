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
import handler from "../../pages/api/hello";

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
      color: "$linkPrimary",
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
        src="/user.png"
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
            size={18}
            css={{ fontFamily: "$title", fontSize: 36, color: "$brown" }}
          >
            Login
          </Text>
        </Modal.Header>
        <Modal.Body css={{ fontFamily: "$title", color: "$brown" }}>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            css={{ background: "$greenLight" }}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Senha"
            css={{ background: "$greenLight" }}
          />
          <Row justify="space-between"></Row>
        </Modal.Body>
        <Modal.Footer css={{ fontFamily: "$title" }}>
          <Button
            css={{ background: "$greenLight" }}
            auto
            onClick={closeHandler}
          >
            Fechar
          </Button>
          <Button css={{ background: "$green" }} auto onClick={closeHandler}>
            Entrar
          </Button>
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
      css={{ background: "$green", minHeight: 160 }}
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
