import { useState } from "react";

interface ClientLogoProps {
  name: string;
  icon: React.ComponentType<any>;
  color?: string;
}

export default function ClientLogo({ name, icon: Icon, color = "#3B82F6" }: ClientLogoProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex items-center justify-center p-8 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={`logo-${name.toLowerCase()}`}
    >
      <Icon
        size={48}
        className={`transition-all duration-300 ${
          isHovered ? "scale-110" : ""
        }`}
        style={{
          color: isHovered ? color : "#9CA3AF",
        }}
      />
    </div>
  );
}
