import { createFileRoute } from '@tanstack/react-router'
import { BellRing, Check } from 'lucide-react'

import { cn } from '~/utils/ui'
import { Button } from '~/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import { PostComponent } from '~/components/PostComponent'

export const Route = createFileRoute('/posts')({
  component: Posts,
})

const posts = [
  {
    title: 'TIL: Octopuses have three hearts',
    author: 'OctoFacts',
    date: '5 hours ago',
    content:
      'Two of the hearts work exclusively to move blood beyond the gills, while the third keeps circulation flowing for the organs.',
  },
  {
    title: 'TIL: Octopuses have three hearts',
    author: 'OctoFacts',
    date: '5 hours ago',
    content:
      'Two of the hearts work exclusively to move blood beyond the gills, while the third keeps circulation flowing for the organs.',
  },
  {
    title: 'TIL: Octopuses have three hearts',
    author: 'OctoFacts',
    date: '5 hours ago',
    content:
      'Two of the hearts work exclusively to move blood beyond the gills, while the third keeps circulation flowing for the organs.',
  },
]

type CardProps = React.ComponentProps<typeof Card>

export function Posts({ className, ...props }: CardProps) {
  const renderPosts = () => {
    return posts.map((post) => <PostComponent key={post.title} {...post} />)
  }
  return (
    <>
      <div className="flex flex-col gap-4 mx-5 pt-5">{renderPosts()}</div>
    </>
  )
}
