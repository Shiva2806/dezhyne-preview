import ClientLogo from "../ClientLogo";
import { Boxes } from "lucide-react";

export default function ClientLogoExample() {
  return (
    <div className="p-8">
      <ClientLogo name="TechCorp" icon={Boxes} color="#3B82F6" />
    </div>
  );
}
