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
import { Bookmark, Heart, MessageCircle, Share, ThumbsDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PostsType } from "@/types"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { ButtonGroup } from "@/components/ui/button-group"
import { IconBookmarkFilled } from "@tabler/icons-react"
import React, { useContext } from "react"

const posts:PostsType = [
  {
    id:1,
    title: "Sunset over the Mountains",
    description: "A breathtaking view of the sun dipping below the jagged peaks, casting a warm golden glow across the valley.",
    images:[
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1774084930657-0492ced3ee10?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    id:2,
    title: "Coffee and Code",
    description: "Starting the morning right with a fresh brew and a blank editor. Ready to tackle the day's challenges.",
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop" 
    ]
  },
  {
    id:3,
    title: "Urban Exploration",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas ornare enim. Curabitur id magna non arcu hendrerit vehicula. Quisque dignissim ultricies dolor, sit amet tempus velit bibendum at. Praesent placerat erat vel pellentesque maximus.",
    images: [
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id:4,
    title: "Minimalist Workspace",
    description: "A clean and organized desk setup designed to maximize focus, remove clutter, and boost productivity.",
    images: [
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id:5,
    title: "Ocean Waves",
    description: "The calming sound of the tide crashing against the rocky shoreline on a peaceful, breezy afternoon.",
    images: ["https://images.unsplash.com/photo-1439405326854-014607f694d7?q=80&w=1000&auto=format&fit=crop"]
  },
  {
    id:6,
    title: "Vintage Road Trip",
    description: "Driving down the endless highway in a classic car, with nothing but the open road and good music ahead.",
    images: ["https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop"]
  },
  {
    id:7,
    title: "Culinary Delights",
    description: "A colorful and beautifully plated gourmet dish that tastes just as amazing as it looks.",
    images: ["https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000&auto=format&fit=crop"]
  },
  {
    id:8,
    title: "Autumn Canopy",
    description: "Walking through a dense forest where the crisp leaves have turned into a brilliant spectrum of red and orange.",
    images: ["https://images.unsplash.com/photo-1763646112483-3e5a3e5c9020?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
  },
  {
    id:9,
    title: "Abstract Architecture",
    description: "Looking up at the geometric glass and steel patterns of a modern skyscraper reaching into the clouds.",
    images: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"]
  },
  {
    id:10,
    title: "Starry Night Sky",
    description: "Camping far away from city lights to witness the Milky Way painted across the dark canvas above.",
    images: ["https://images.unsplash.com/photo-1465101162946-4377e57745c3?q=80&w=1000&auto=format&fit=crop"]
  }
];

const Page = () => {
  return (
    <div className='mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl'>
        {/* <FieldSet>
            <FieldGroup>
              <Field>
                <Textarea
                  id="checkout-7j9-optional-comments"
                  placeholder="Create a post"
                  className="resize-none border-none focus-visible:ring-0"
                />
              </Field>
            </FieldGroup>
          </FieldSet> */}
        {/* POST */}
        <div>
          {posts.map((post) => (
            <div key={post.id} className="rounded-xl px-5 pt-2 m-1 cursor-pointer">
              <Dialog>
                <DialogTrigger>
                  <div className="flex flex-col items-start justify-start">
                    <h1 className="text-2xl">{post.title}</h1>
                    <p className="text-lg text-gray-600 text-start pb-2">{post.description}</p>
                  </div>
                  <div className="relative aspect-3/2">
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
                      <DialogTitle>{post.title}</DialogTitle>
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

export default Page