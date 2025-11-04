import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <Card className="p-8 hover-elevate transition-all duration-300 hover:shadow-lg cursor-pointer" data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center mb-6">
        <Icon size={28} className="text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-3" data-testid="text-service-title">{title}</h3>
      <p className="text-muted-foreground leading-relaxed" data-testid="text-service-description">{description}</p>
    </Card>
  );
}
