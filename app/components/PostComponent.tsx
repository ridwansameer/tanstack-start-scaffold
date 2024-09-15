import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './ui/card'
import { ChevronUp, ChevronDown } from 'lucide-react'
import { Button } from './ui/button'
import { Link } from '@tanstack/react-router'

export function PostComponent({
  title,
  author,
  date,
  content,
  id,
  commentCount,
}: {
  title: string
  author: string
  date: string
  content: string
  id: string
  commentCount?: number
}) {
  const handleCardClick = () => {
    // This will be replaced with navigation logic in the future
  }

  return (
    <Link to="/posts/$postId" params={{ postId: id }}>
      <Card
        className="cursor-pointer hover:shadow-md transition-shadow duration-300"
        onClick={handleCardClick}
      >
        <div className="flex flex-row">
          <div>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>
                Posted by u/{author} {date}
              </CardDescription>
            </CardHeader>
            <CardContent>{content}</CardContent>
            <CardFooter>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">
                  {commentCount ? `💬 ${commentCount} comments` : ''}
                </span>
              </div>
            </CardFooter>
          </div>
        </div>
      </Card>
    </Link>
  )
}
