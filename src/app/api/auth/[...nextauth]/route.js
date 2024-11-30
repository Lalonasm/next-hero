import connectDb from "@/lib/connectDB";
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {
                    label: 'Email',
                    type: "text",
                    required: true,
                    placeholder: 'Your Email'
                },
                password: {
                    label: 'Password',
                    type: "password",
                    required: true,
                    placeholder: 'Enter Password'
                },

            },


            async authorize(credentials) {
                const { email, password } = credentials;
                if (!credentials) {
                    return null
                }
                if (email) {
                    const db = await connectDb();
                    const currentUser = await db.collection('users').findOne({ email });
                    console.log(currentUser);
                    // const currentUser = users.find((user) => user.email === email);
                    if (currentUser) {
                        if (currentUser.password === password) {
                            return currentUser;
                        }
                    }
                }
                return null;

            },
        }),
    ],

    callbacks: {
        async jwt({ token, account, user }) {
            // Persist the OAuth access_token and or the user id to the token right after signin
            if (account) {
                token.type = user.type

            }
            return token
        },
        async session({ session, token }) {
            session.user.type = token.type
            return session
        },

    }

}

const handler = NextAuth(authOptions)

const users = [
    {
        id: 1,
        name: "Mehedi",
        email: "m@gmail.com",
        type: "admin",
        password: "password",
        image: 'https://picsum.photos/200/300'

    },
    {
        id: 2,
        name: "Shakil",
        email: "s@gmail.com",
        type: "moderator",
        password: "password",
        image: 'https://picsum.photos/200/300'
    },
    {
        id: 3,
        name: "Zihad",
        email: "z@gmail.com",
        type: "member",
        password: "password",
        image: 'https://picsum.photos/200/300'
    },
    {
        id: 4,
        name: "Jaman",
        email: "j@gmail.com",
        type: "member",
        password: "password",
        image: 'https://picsum.photos/200/300'
    },
]

export { handler as GET, handler as POST }