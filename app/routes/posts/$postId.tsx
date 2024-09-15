import { createFileRoute, useLoaderData } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/start'
import { prisma } from '~/utils/prisma'

const fetchPost = createServerFn('GET', async (params: { postId: string }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: params.postId,
    },
  })
  return post
})
export const Route = createFileRoute('/posts/$postId')({
  loader: async ({ params: { postId } }) => {
    const post = await fetchPost({ postId })
    return post
  },
  component: PostDetails,
})

function PostDetails() {
  const post = useLoaderData({
    from: '/posts/$postId',
  })
  return <div>{post?.title}</div>
}
