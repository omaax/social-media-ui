"use client"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Ellipsis } from "lucide-react"
import { Button } from "./ui/button"
import { DialogData } from "@/types"
import { Separator } from "./ui/separator"

interface DialogProps {
  data: DialogData
}

export function PostDialogMenu({ data }: DialogProps) {
  return (
    <Dialog>
      <DialogTrigger>
        <Ellipsis size={22}  color="#5c5c61" className="cursor-pointer"/>
      </DialogTrigger>
      <DialogContent className="rounded-2xl">
        {data.postDialogItem.map((item) => (
          <div key={item.id} className="flex flex-col">
            <Button variant={null} className={item.className}><DialogTitle>{item.title}</DialogTitle></Button>
            <Separator />
          </div>
        ))}
        <DialogClose asChild>
            <Button variant={null}>Cancel</Button>
          </DialogClose>
      </DialogContent>
    </Dialog>
  )
}

export default PostDialogMenu