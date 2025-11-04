import { Card } from "@/components/ui/card";
import { Clock } from "lucide-react";
import { useState } from "react";

interface BlogCardProps {
  image: string;
  title: string;
  description: string;
  readTime: string;
  gradient: string;
  link?: string;
}

export default function BlogCard({ image, title, description, readTime, gradient, link }: BlogCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="group overflow-hidden cursor-pointer hover-elevate transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => link && (window.location.href = link)}
      data-testid={`card-blog-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className={`h-3 ${gradient}`} data-testid="gradient-banner"></div>
      <div className="relative overflow-hidden aspect-[16/9]">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
          data-testid="img-blog"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3" data-testid="text-read-time">
          <Clock size={16} />
          <span>{readTime}</span>
        </div>
        <h3
          className={`text-xl font-bold mb-3 transition-transform duration-300 ${
            isHovered ? "translate-x-1" : ""
          }`}
          data-testid="text-blog-title"
        >
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed" data-testid="text-blog-description">{description}</p>
      </div>
    </Card>
  );
}
