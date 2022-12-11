import React from 'react'
import { useLoaderData } from 'react-router-dom'


const Post = () => {

    const {post} = useLoaderData()
  return (
    <>
      <h1>{post.id} - {post.title}</h1>
    </>
  )
}

export default Post


export const loaderPost = async ({params}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

if(!res.ok) throw ({
    status: res.status,
    statusText: "No Encontrado"
})

    const post = await res.json()
    return {post}
}