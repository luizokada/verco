import { Text } from "@nextui-org/react";
import DefaultPageTemplate from "../../components/default-page-template";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import api from "../../api";

export default function PerfilPage() {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const [content, setContent] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.post("user/me");
      if (res.data) {
        setContent(res.data);
      }
    };

    fetchData();
  }, [session]);

  if (typeof window !== "undefined" && loading) return null;

  if (!session) {
    return <Text>Necessita de autenticação.</Text>;
  }

  return (
    <DefaultPageTemplate
      tabTitle="Perfil | veg.co"
      contentDescription="Produtos veganos ao melhor preço!"
    >
      <div>{content ? content : <Text> Buscando perfil...</Text>}</div>
    </DefaultPageTemplate>
  );
}
