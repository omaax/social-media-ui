import UsersProvider from "@/context/UsersContext"
import PostsProvider from "../context/PostsContext"
import "./globals.css"

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <UsersProvider>
                    <PostsProvider>
                        {children}
                    </PostsProvider>
                </UsersProvider>
            </body>
        </html>
    )
}