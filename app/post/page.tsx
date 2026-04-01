"use client"

import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"
import { Ellipsis, Heart, MessageCircle, Pencil, Share } from "lucide-react"
import { IconBookmarkFilled } from "@tabler/icons-react"
import React, { useContext } from "react"
import PostsProvider, { PostsContext } from "../../context/PostsContext"
import PostDialogMenu from "@/components/PostDialog"
import { DialogData, PostType } from "@/types"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

const data: DialogData = {
  postDialogItem: [
    {
      id: "report",
      title: "Report",
      className: "text-red-600",
    },
    {
      id: "share",
      title: "Share to",
      className: "text-red-600",
    },
    {
      id: "copy",
      title: "Copy link",
      className: "text-black",
    },
  ]
}

const Page = ({ ...props }: React.ComponentProps<typeof Dialog>) => {
  const { posts, setPosts, editPost } = useContext(PostsContext)!

  const deletePost = (id: number) => {
    const updatedPosts = posts.filter((post) => post.id !== id)
    setPosts(updatedPosts)
  }

  const [title, setTitle] = React.useState("")
  const [image, setImage] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [postId, setPostId] = React.useState<number | null>(null)

  const router = useRouter()

  const EditAPost = (postId: number) => {
    const post = posts.filter((post) => post.id === postId)[0]
    setTitle(post.title)
    setDescription(post.description)
    setImage(post.images[0] || "")
    setPostId(postId)
  }

  const handleEditPost = (e: React.MouseEvent<HTMLButtonElement>) => {
    // e.preventDefault()
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
    <div className='mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl'>
      {/* POST */}
      <div>
        {posts.map((post) => (
          <div key={post.id} className="rounded-xl px-5 pt-2 m-1">
            <Dialog {...props}>
              <div className="flex items-center justify-between px-2">
                <h1 className="text-2xl">{post.title}</h1>
                <PostDialogMenu data={data} />
              </div>
              <DialogTrigger className="flex items-center justify-center flex-col">
                <div className="pl-2">
                  <p className="text-lg text-gray-600 text-start pb-2">{post.description}</p>
                </div>
                <div className="">
                  <Image
                    src={post.images[0]}
                    alt="Post Image"
                    width={480}
                    height={450}
                    className="rounded-lg h-[450px]"
                  />
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <div className="flex items-center justify-between">
                    <DialogTitle>{post.title}</DialogTitle>
                    <div className="flex items-center justify-center">
                      <Button onClick={() => deletePost(post.id)} variant={null} className="text-red-600">Delete</Button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="bg-transparent" onClick={() => EditAPost(post.id)}><Pencil color="#000000" /></Button>
                        </DialogTrigger>
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
            </Dialog>

            {/* INTERACTIONS */}
            <div className="flex items-center justify-between px-2">
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
              <IconBookmarkFilled className="hover:scale-110 transition-all duration-300 cursor-pointer" />
            </div>
            <Separator />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function PageWrapper() {
  return (
      <Page />
  );
}