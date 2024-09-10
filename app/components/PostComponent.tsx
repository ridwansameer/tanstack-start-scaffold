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
  return (
    <Card>
      <div className="flex flex-row">
        <div className="flex flex-col bg-secondary px-5 items-center justify-center gap-2">
          <ChevronUp className="cursor-not-allowed" />
          <p>42</p>
          <ChevronDown className="cursor-not-allowed" />
        </div>
        <div>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>
              Posted by u/{author} {date}
            </CardDescription>
          </CardHeader>
          <CardContent>{content}</CardContent>
        </div>
      </div>
    </Card>
  )
}
