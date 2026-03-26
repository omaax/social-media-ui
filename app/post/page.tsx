"use client"

import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"
import { Ellipsis, Heart, MessageCircle, Share } from "lucide-react"
import { IconBookmarkFilled } from "@tabler/icons-react"
import React, { useContext } from "react"
import PostsProvider, { PostsContext } from "../context/PostsContext"
import PostDialogMenu from "@/components/PostDialog"
import { DialogData } from "@/types"
import { Button } from "@/components/ui/button"

const data: DialogData ={
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
  const { posts, setPosts } = useContext(PostsContext)!

  const deletePost = (id: number) => {
    const updatedPosts = posts.filter((post) => post.id !== id)
    setPosts(updatedPosts)
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
                <DialogTrigger>
                  <div className="flex flex-col items-start justify-start pl-2">
                    <p className="text-lg text-gray-600 text-start pb-2">{post.description}</p>
                  </div>
                  <div className="relative object-cover aspect-3/2">
                    <Image 
                      src={post.images[0]}
                      alt="Post Image" 
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                </DialogTrigger>
                  <DialogContent>
                      <DialogHeader>
                      <div className="flex items-center justify-between">
                        <DialogTitle>{post.title}</DialogTitle>
                        <Button onClick={() => deletePost(post.id)} variant={null} className="text-red-600">Delete</Button>
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
                              <Share className="hover:scale-110 transition-all duration-300 cursor-pointer"/>
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
                    <Share className="hover:scale-110 transition-all duration-300 cursor-pointer"/>
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
    <PostsProvider>
      <Page />
    </PostsProvider>
  );
}