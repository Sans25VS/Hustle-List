import NextAuth from "next-auth"
import GoogleProviders from "next-auth/providers/google" 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProviders({
      clientId: process.env.GOOGLE_ClientId,
      clientSecret: process.env.GOOGLE_Client_Secret,
      authorization : {params: {prompt: "consent"}},
    }),
  ],
})