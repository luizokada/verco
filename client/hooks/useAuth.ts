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
    callbackSuccess: () => any;
  }) => {
    signIn("credentials", {
      username,
      password,
      callbackUrl: `${window.location.origin}`,
      redirect: false,
    }).then((res) =>
      res.status == "200"
        ? callbackSuccess()
        : window.alert("Credenciais invalidas")
    );
  };

  const handleLogout = () => {
    signOut();
    api.post("/dj-rest-auth/logout/");
  };

  return { handleLogin, handleLogout };
};
