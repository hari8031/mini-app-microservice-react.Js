import React from 'react'
import CreatePost from './CreatePost'
import ListPost from './ListPost'
const Post = () => {
  return (
    <div className='flex flex-col items-center my-12'>
      <h1 className='text-6xl font-bold'>Create post</h1>
      <CreatePost />
      <ListPost />
    </div>
  )
}

export default Post