import ServiceCard from "../ServiceCard";
import { Globe } from "lucide-react";

export default function ServiceCardExample() {
  return (
    <div className="p-8">
      <ServiceCard
        icon={Globe}
        title="Website Development"
        description="Custom-built websites that blend stunning design with powerful functionality to elevate your online presence."
      />
    </div>
  );
}
