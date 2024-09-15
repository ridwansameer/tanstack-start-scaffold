import { createFileRoute, useLoaderData } from '@tanstack/react-router'
import { Button } from '~/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import { PostComponent } from '~/components/PostComponent'
import { Textarea } from '~/components/ui/textArea'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { createServerFn } from '@tanstack/start'
import { prisma } from '~/utils/prisma'
import { post as PostType } from '@prisma/client'
import { Input } from '~/components/ui/input'

const fetchPosts = createServerFn('GET', async () => {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })
  return posts
})

const createPost = createServerFn(
  'POST',
  async (post: Omit<PostType, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newPost = await prisma.post.create({
      data: post,
    })
    return newPost
  },
)

export const Route = createFileRoute('/posts')({
  loader: async () => {
    const posts = await fetchPosts()
    return posts
  },
  component: Posts,
})

export function Posts() {
  const loaderPosts = useLoaderData({
    from: '/posts',
  })
  const [postTitle, setPostTitle] = useState('')
  const [postText, setPostText] = useState('')
  const queryClient = useQueryClient()
  const { data, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: () => fetchPosts(),
    initialData: loaderPosts,
    refetchOnMount: false,
  })

  const { mutate: createPostMutation } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] })
      setPostTitle('')
      setPostText('')
    },
  })

  const renderAddPost = () => {
    return (
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Add Post</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Input
                value={postTitle}
                placeholder="Enter post title"
                onChange={(e) => setPostTitle(e.target.value)}
              />
              <Textarea
                value={postText}
                placeholder="Type your message here."
                onChange={(e) => setPostText(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              onClick={async () => {
                createPostMutation({
                  title: postTitle,
                  content: postText,
                  author_id: 'a2f742f1-bb01-45f6-8827-2e4909065b2a',
                })
              }}
            >
              Add Post
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }
  const renderPosts = () => {
    return data?.map((post: any) => (
      <PostComponent
        title={post.title}
        author={post.author.username}
        date={(() => {
          const now = new Date()
          const createdAt = new Date(post.createdAt as Date)
          const diffInSeconds = Math.floor(
            (now.getTime() - createdAt.getTime()) / 1000,
          )

          if (diffInSeconds < 60) return 'just now'
          if (diffInSeconds < 3600)
            return `${Math.floor(diffInSeconds / 60)} minutes ago`
          if (diffInSeconds < 86400)
            return `${Math.floor(diffInSeconds / 3600)} hours ago`
          return `${Math.floor(diffInSeconds / 86400)} days ago`
        })()}
        content={post.content}
      />
    ))
  }
  return (
    <div className="flex flex-col gap-4 mx-5 mt-5 pb-16">
      {renderAddPost()}
      {renderPosts()}
    </div>
  )
}
