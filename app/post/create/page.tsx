import PostsProvider from "@/app/context/PostsContext"
import {PostReportForm } from "./PostReportForm"

const Page = () => {
  return (
    <div className='m-5 p-5'>
      <PostsProvider>
        <PostReportForm/>
      </PostsProvider>
    </div>
  )
}

export default Page