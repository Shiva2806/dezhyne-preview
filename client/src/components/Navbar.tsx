import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import dezhyneLogo from "@assets/image_1762277165819.png";

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Blogs", path: "/blogs" },
    { label: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link href="/" data-testid="link-home">
            <img
              src={dezhyneLogo}
              alt="DEZHYNE"
              className="h-8 w-auto cursor-pointer"
              data-testid="img-logo"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                data-testid={`link-${item.label.toLowerCase()}`}
              >
                <span
                  className={`text-sm font-medium relative cursor-pointer transition-colors hover:text-foreground group ${
                    location === item.path
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-foreground transition-all duration-300 ${
                      location === item.path
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button
              className="hidden md:inline-flex rounded-full bg-primary text-primary-foreground hover-elevate"
              data-testid="button-lets-talk"
              onClick={() => (window.location.href = "/contact")}
            >
              Let's Talk
            </Button>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 pt-2" data-testid="mobile-menu">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`mobile-link-${item.label.toLowerCase()}`}
                >
                  <span
                    className={`text-sm font-medium cursor-pointer ${
                      location === item.path
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
              <Button
                className="rounded-full bg-primary text-primary-foreground w-full"
                data-testid="button-mobile-lets-talk"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.location.href = "/contact";
                }}
              >
                Let's Talk
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
