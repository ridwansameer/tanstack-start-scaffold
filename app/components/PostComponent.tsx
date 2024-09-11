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

export function PostComponent({
  title,
  author,
  date,
  content,
}: {
  title: string
  author: string
  date: string
  content: string
}) {
  const handleCardClick = () => {
    // This will be replaced with navigation logic in the future
    console.log('Clicked on post:', title)
  }

  return (
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
                💬 5 comments
              </span>
            </div>
          </CardFooter>
        </div>
      </div>
    </Card>
  )
}
