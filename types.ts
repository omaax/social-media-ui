export type PostType = {
    id: number;
    title: string;
    description: string;
    images: string[];
}

export type PostsType = PostType[]

export interface PostContextType {
  posts: PostType[];
  setPosts: React.Dispatch<React.SetStateAction<PostType[]>>;
  addPost: (post: PostType) => void;
  deletePost: (id: number) => void;
  editPost: (id:number, updatePost: Partial<PostType>) => void;
}


import type { ElementType } from "react";

export interface NavItem {
  id: string;
  title: string;
  icon: ElementType;
  url?: string;
  isActive?: boolean;
}

export interface User {
  name: string;
  email: string;
  avatar: string;
}

export interface SidebarData {
  user: User;
  navMain: NavItem[];
}

export interface DialogData {
  postDialogItem: PostDialogItem[]
}

export interface PostDialogItem {
  id: string;
  title: string;
  className: string;
}