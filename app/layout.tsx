import PostsProvider from "../context/PostsContext"
import "./globals.css"

export default function RootLayout({children}){
    return (
        <html lang="en">
            <body>
                <PostsProvider>
                    {children}
                </PostsProvider>
            </body>
        </html>
    )
}