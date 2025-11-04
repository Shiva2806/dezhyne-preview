import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-[#F5F1EB] border-t" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-footer-heading">
              Let's start something great together.
            </h2>
            <Button
              className="rounded-full bg-accent text-accent-foreground hover-elevate px-8"
              data-testid="button-footer-cta"
              onClick={() => (window.location.href = "/contact")}
            >
              Let's Talk
            </Button>
          </div>

          <div className="space-y-8">
            <div>
              <label className="block text-sm font-medium mb-2" data-testid="label-newsletter">
                Subscribe to our newsletter
              </label>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                  data-testid="input-newsletter"
                />
                <Button
                  className="rounded-full bg-foreground text-background hover-elevate"
                  data-testid="button-subscribe"
                >
                  Subscribe
                </Button>
              </div>
            </div>

            <div className="flex gap-6" data-testid="social-icons">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover-elevate bg-white"
                data-testid="link-instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover-elevate bg-white"
                data-testid="link-linkedin"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:hello@dezhyne.com"
                className="p-2 rounded-full hover-elevate bg-white"
                data-testid="link-mail"
              >
                <Mail size={20} />
              </a>
              <a
                href="tel:+1234567890"
                className="p-2 rounded-full hover-elevate bg-white"
                data-testid="link-phone"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-8 border-t border-border">
          <Link href="/privacy">
            <span className="text-sm text-muted-foreground cursor-pointer hover:text-foreground" data-testid="link-privacy">
              Privacy Policy
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
