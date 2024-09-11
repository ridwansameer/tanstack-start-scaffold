import { createFileRoute } from '@tanstack/react-router'
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

export function Posts() {
  const renderAddPost = () => {
    return (
      <div className="mx-5 mt-5">
        <Card>
          <CardHeader>
            <CardTitle>Add Post</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea placeholder="Type your message here." />
          </CardContent>
          <CardFooter>
            <Button>Add Post</Button>
          </CardFooter>
        </Card>
      </div>
    )
  }
  const renderPosts = () => {
    return posts.map((post) => <PostComponent key={post.title} {...post} />)
  }
  return (
    <>
      {renderAddPost()}
      <div className="flex flex-col gap-4 mx-5 mt-5">{renderPosts()}</div>
    </>
  )
}
