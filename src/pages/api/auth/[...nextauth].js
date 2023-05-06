import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    process.env.NEXTAUTH_SECRET],
}

export default NextAuth(authOptions)
// import NextAuth from "next-auth"
// import GoogleProvider from "next-auth/providers/google"

// export default NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//     secret: process.env.NEXTAUTH_SECRET
//   ],
// })