// components/ui/testimonial-card.tsx
import Image from "next/image"

export interface TestimonialAuthor {
  name: string
  handle?: string
  avatar?: string
}

interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
}

export function TestimonialCard({ author, text, href }: TestimonialCardProps) {
  return (
    <div className="max-w-sm rounded-2xl border p-6 bg-card text-card-foreground shadow-md">
      <blockquote className="text-sm sm:text-base mb-4">{text}</blockquote>
      <div className="flex items-center gap-4">
        {author.avatar && (
          <Image
            src={author.avatar}
            alt={author.name}
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
        )}
        <div>
          <div className="text-sm font-medium">{author.name}</div>
          {author.handle && (
            <div className="text-muted-foreground text-xs">{author.handle}</div>
          )}
        </div>
      </div>
    </div>
  )
}
