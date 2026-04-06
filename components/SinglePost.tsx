import React, { useCallback, useContext } from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { Label } from './ui/label'
import Image from 'next/image'
import { Heart, MessageCircle, Pencil, Share } from 'lucide-react'
import { PostsContext } from '@/context/PostsContext'
import { useRouter } from 'next/navigation'
import { PostType } from '@/types'

const SinglePost = ({ post }: { post: PostType }) => {
    const { posts, setPosts, editPost } = useContext(PostsContext)!

    const deletePost = useCallback((id: number) => {
        const updatedPosts = posts.filter((post) => post.id !== id)
        setPosts(updatedPosts)
    }, [posts])

    const [title, setTitle] = React.useState("")
    const [image, setImage] = React.useState("")
    const [description, setDescription] = React.useState("")
    const [postId, setPostId] = React.useState<number | null>(null)

    const router = useRouter()

    const EditAPost = useCallback((postId: number) => {
        const post = posts.filter((post) => post.id === postId)[0]
        setTitle(post.title)
        setDescription(post.description)
        setImage(post.images[0] || "")
        setPostId(postId)
    }, [posts])

    const handleEditPost = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (!title && !description) return
        if (postId === null) return
        const updatedPost = {
            id: postId,
            title,
            description,
            images: [image]
        }

        editPost(updatedPost.id, updatedPost)
        router.push("/post")
    }
    return (
        <DialogContent key={post.id}>
            <DialogHeader>
                <div className="flex items-center justify-between">
                    <DialogTitle>{post.title}</DialogTitle>
                    <div className="flex items-center justify-center">
                        <Button onClick={() => deletePost(post.id)} variant={null} className="text-red-600">Delete</Button>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button className="bg-transparent" onClick={() => EditAPost(post.id)}><Pencil color="#000000" /></Button>
                            </DialogTrigger>
                            {/* EDIt POST */}
                            <DialogContent className="sm:max-w-md">
                                <DialogHeader>
                                    <DialogTitle>Edit Post</DialogTitle>
                                </DialogHeader>
                                <div className="flex items-center gap-2">
                                    <div className="grid flex-1 gap-2">
                                        <input
                                            type="text"
                                            className=""
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                        />
                                        <textarea
                                            value={description}
                                            className=""
                                            onChange={(e) => setDescription(e.target.value)}
                                        ></textarea>
                                        <input
                                            type="text"
                                            className=""
                                            value={image}
                                            onChange={(e) => setImage(e.target.value)}
                                        />
                                        <Label htmlFor="link" className="sr-only">
                                            Link
                                        </Label>
                                    </div>
                                </div>
                                <DialogFooter className="sm:justify-start">
                                    <DialogClose asChild>
                                        <Button type="button">Close</Button>
                                    </DialogClose>
                                    <Button type="submit" form="form-rhf-demo" onClick={handleEditPost}>
                                        Submit
                                    </Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
                <DialogDescription>
                    {post.description}
                    <div className="relative aspect-3/2">
                        <Image
                            src={post.images[0]}
                            alt="Post Image"
                            fill
                            className="rounded-lg object-cover"
                        />
                    </div>
                    {/* INTERACTIONS */}
                    <div className="flex items-center justify-start gap-2 pl-2 py-3">
                        <div className="flex gap-2">
                            <Heart className="hover:scale-110 transition-all duration-300 cursor-pointer" />
                            <h2>5</h2>
                        </div>
                        <div className="flex gap-2">
                            <MessageCircle className="hover:scale-110 transition-all duration-300 cursor-pointer" />
                            <h2>2</h2>
                        </div>
                        <div className="flex gap-2">
                            <Share className="hover:scale-110 transition-all duration-300 cursor-pointer" />
                        </div>
                    </div>
                </DialogDescription>
            </DialogHeader>
        </DialogContent>
    )
}

export default SinglePost