import NextAuth from "next-auth";
import CredentialsProvider, {
  CredentialInput,
} from "next-auth/providers/credentials";
import api from "../../../api";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { username, password } = credentials;

        const response = await api
          .post("/dj-rest-auth/login/", {
            username,
            password,
          })
          .then((res) => ({
            accessToken: res.data["access_token"],
            refreshToken: res.data["refresh_token"],
          }))
          .catch((error) => console.log(error));
        if (!response) return null;
        return response;
      },
    }),
  ],

  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error",
    verifyRequest: "/auth/verify-request",
  },

  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin";
      return token;
    },

    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
});
