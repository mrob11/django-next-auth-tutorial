import NextAuth from "next-auth"

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    {
      id: "django",
      name: "Django",
      type: "oauth",
      wellKnown: "http://127.0.0.1:8000/o/.well-known/openid-configuration/",
      authorization: { params: { scope: "openid profile email" } },
      clientId: process.env.WEBAPP_CLIENT_ID,
      clientSecret: process.env.WEBAPP_CLIENT_SECRET,
      checks: ["pkce", "state"],
      async profile(profile) {
        console.log(profile)
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
        }
      },
    },
  ],
  // callbacks: {
  //   async session({ session, user, token }) {
  //     session.user.
  //   }
  // }
})

export { handler as GET, handler as POST }
