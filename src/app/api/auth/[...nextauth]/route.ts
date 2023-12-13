import NextAuth from 'next-auth'
import SlackProvider from "next-auth/providers/slack"

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    SlackProvider({
      clientId: <string>process.env.SLACK_ID,
      clientSecret: <string>process.env.SLACK_SECRET
    }),
  ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
