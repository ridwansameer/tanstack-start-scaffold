import { json } from '@tanstack/start'
import { createAPIFileRoute } from '@tanstack/start/api'
import { prisma } from '~/utils/prisma'

export const Route = createAPIFileRoute('/api/posts')({
  GET: async ({ request, params }) => {
    const posts = await prisma.post.findMany({
      include: {
        author: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })
    return json(posts)
  },
})
