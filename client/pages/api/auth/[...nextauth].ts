import NextAuth from "next-auth";
import CredentialsProvider, {
  CredentialInput,
} from "next-auth/providers/credentials";
import api from "../../../api";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {},
      async authorize(credentials, req) {
        const { username, password } = credentials;

        const tokens = await api
          .post("/dj-rest-auth/login/", {
            username,
            password,
          })
          .then((res) => ({
            accessToken: res.data["access_token"],
            refreshToken: res.data["refresh_token"],
          }))
          .catch((error) => console.log(error));
        if (!tokens) return null;
        return tokens;
      },
    }),
  ],

  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // (used for check email message)
    newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  },

  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin";
      return token;
    },
    // async signIn({ user, account, profile, email, credentials }) {
    //   try {
    //     //the user object is wrapped in another user object so extract it
    //     if (typeof user.userId !== typeof undefined) {
    //       if (user.isActive === "1") {
    //         console.log("User is active");
    //         return user;
    //       } else {
    //         console.log("User is not active");
    //         return false;
    //       }
    //     } else {
    //       console.log("User id was undefined");
    //       return false;
    //     }
    //   } catch (err) {
    //     console.error("Signin callback error:", err);
    //   }
    // },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
});
