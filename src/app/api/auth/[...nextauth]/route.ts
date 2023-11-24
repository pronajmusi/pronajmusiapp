import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/firebase";

const handler = NextAuth({
    pages: {
        signIn: "/profil/prihlasit-se"
    },
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: {
                    label: 'Username',
                    type: 'text',
                    placeholder: 'somebody@gmail.com'
                },
                password: {
                    label: 'Password',
                    type: 'password'
                }
            },
            async authorize(credentials) {
                return signInWithEmailAndPassword(auth, credentials?.email || '', credentials?.password || '')
                    .then(async userCredential => {
                        return userCredential.user
                    })
                    .catch(error => null) as any
            },
        })
    ],
    callbacks: {
        async jwt ({user, token}) {
            if(user){
                let copyUser = user as any;

                token.id = copyUser.uid;
            }
            return token;
        },
        async session({session, token, user}) {
            if(token && session.user){
                session.user.uid = token.id;
            }
            return session;
        },
    }
})

export { handler as GET, handler as POST }