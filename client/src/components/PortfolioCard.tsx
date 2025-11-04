import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface PortfolioCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
}

export default function PortfolioCard({ image, title, category, description }: PortfolioCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="group overflow-hidden cursor-pointer hover-elevate transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={`card-portfolio-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          data-testid="img-portfolio"
        />
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-center text-white px-6">
            <h3 className="text-2xl font-bold mb-2" data-testid="text-portfolio-title">{title}</h3>
            <p className="text-sm mb-4 opacity-90" data-testid="text-portfolio-description">{description}</p>
            <span className="text-sm font-medium underline" data-testid="text-view-case-study">View Case Study</span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <Badge variant="secondary" className="text-xs" data-testid="badge-category">{category}</Badge>
      </div>
    </Card>
  );
}
