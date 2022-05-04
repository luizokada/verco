import { Input, Container, Button, Grid, Link } from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { useCallback, useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import DefaultPageTemplate from "../../components/default-page-template";
import { useAuth } from "../../hooks/useAuth";

export default function Cadastro() {
  const { handleLogin, handleRegister } = useAuth();
  const { data: session, status } = useSession();

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (
        e.currentTarget.username.value != "" &&
        e.currentTarget.password.value != ""
      ) {
        const username = e.currentTarget.username.value;
        const name = e.currentTarget.name.value;
        const cpf = e.currentTarget.cpf.value;
        const password = e.currentTarget.password.value;
        const confirmPassword = e.currentTarget.confirmPassword.value;

        handleRegister({
          name,
          username,
          cpf,
          password,
          confirmPassword,
          callbackSuccess: () => handleLogin({ username, password }),
        });
      }
    },
    [handleLogin, handleRegister]
  );

  return (
    <DefaultPageTemplate tabTitle="Cadastro" contentDescription="Cadastro">
      {!session ? (
        <Container
          css={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column",
            h: "70vh",
            fontFamily: "$title",
            color: "$brown",
          }}
        >
          <h1>Cadastro</h1>
          <form action="" onSubmit={handleSubmit}>
            <Grid.Container
              gap={3}
              justify="center"
              css={{
                maxWidth: "880px",
              }}
            >
              <Grid>
                <Input label="Nome Completo" name="name" width="360px" />
              </Grid>
              <Grid>
                <Input label="E-mail" name="email" width="360px" />
              </Grid>
              <Grid>
                <Input label="Nome de usuário" name="username" width="360px" />
              </Grid>
              <Grid>
                <Input label="CPF" name="cpf" width="360px" />
              </Grid>
              <Grid>
                <Input.Password
                  label="Senha"
                  name="password"
                  width="360px"
                  visibleIcon={<HiEye fill="currentColor" />}
                  hiddenIcon={<HiEyeOff fill="currentColor" />}
                />
              </Grid>
              <Grid>
                <Input.Password
                  label="Confirmar Senha"
                  name="confirmePassword"
                  width="360px"
                  visibleIcon={<HiEye fill="currentColor" />}
                  hiddenIcon={<HiEyeOff fill="currentColor" />}
                />
              </Grid>
            </Grid.Container>
            <Container
              display="flex"
              justify="space-around"
              css={{ maxWidth: "480px", marginTop: "32px" }}
            >
              <Button
                css={{
                  background: "$brown",
                  color: "white",
                  fontSize: "$title",
                  "&:hover": {
                    background: "$brown",
                    color: "white",
                  },
                }}
                auto
                light
                type="submit"
              >
                Enviar
              </Button>
            </Container>
          </form>
        </Container>
      ) : (
        <div>Pagina de User</div>
      )}
    </DefaultPageTemplate>
  );
}
