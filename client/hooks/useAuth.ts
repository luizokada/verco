import { useEffect, useState } from "react";
import { signIn, signOut } from "next-auth/react";
import api from "../api";

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);

  const handleLogin = ({
    username,
    password,
    callbackSuccess,
  }: {
    username: string;
    password: string;
    callbackSuccess?: () => any;
  }) => {
    signIn("credentials", {
      username,
      password,
      callbackUrl: `${window.location.origin}`,
      redirect: false,
    }).then((res) =>
      res.status == "200"
        ? callbackSuccess && callbackSuccess()
        : window.alert("Credenciais invalidas")
    );
  };

  const handleLogout = () => {
    signOut();
    api.post("/dj-rest-auth/logout/");
  };

  const handleRegister = async ({
    name,
    username,
    cpf,
    password,
    email,
    confirmPassword,
    callbackSuccess,
  }: {
    name: string;
    username: string;
    password: string;
    email: string;
    cpf: string;
    confirmPassword: string;
    callbackSuccess?: () => any;
  }) => {
    const response = await api
      .post("dj-rest-auth/registration/", {
        username,
        name,
        cpf,
        email,
        password1: password,
        password2: confirmPassword,
      })
      .then((res) => callbackSuccess && callbackSuccess())
      .catch((error) => window.alert("Erro no cadastro"));

    if (!response) return null;
    return response;
  };

  return { handleLogin, handleLogout, handleRegister };
};
