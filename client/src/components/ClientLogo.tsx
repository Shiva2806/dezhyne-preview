import { useState } from "react";

interface ClientLogoProps {
  name: string;
  logoText: string;
}

export default function ClientLogo({ name, logoText }: ClientLogoProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex items-center justify-center p-8 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={`logo-${name.toLowerCase()}`}
    >
      <div
        className={`text-2xl font-bold transition-all duration-300 ${
          isHovered ? "text-foreground scale-110" : "text-muted-foreground/40"
        }`}
        data-testid="text-logo"
      >
        {logoText}
      </div>
    </div>
  );
}
