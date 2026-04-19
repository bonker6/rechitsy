import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET,
  providers: [ Credentials({
    async authorize(credentials) {
      const res = await fetch(`${process.env.BACKEND_URL}/auth`, { 
          method: "POST",
          body: JSON.stringify({
            login: credentials.login,
            password: credentials.password
          }),
          headers: { "Content-Type": "application/json" }
      })
      const data = await res.json()

      if (res.ok && data.access_token) {
        // Возвращаем объект пользователя + токен
        return {
          id: "1", // NextAuth требует id в виде строки
          accessToken: data.access_token,
          refreshToken: data.refresh_token
        }
      }
      return null
    },
  }),
  ],
callbacks: {
  async jwt({ token, user }) {
    // Сохраняем access_token в JWT-токен NextAuth
    if (user) {
      token.accessToken = (user as any).accessToken
    }
    return token
  },
  async session({ session, token }) {
    // Пробрасываем из JWT в сессию, чтобы клиент её видел
    (session as any).accessToken = token.accessToken
    return session
  },
}
})