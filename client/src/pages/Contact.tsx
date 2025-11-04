import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 2 business days.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen" data-testid="page-contact">
      <section className="pt-32 pb-20 bg-white" data-testid="section-hero">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="text-hero-title">
            Drop Us a Message.
          </h1>
          <p className="text-xl text-muted-foreground" data-testid="text-hero-subtitle">
            We're excited to work with you. Please share your details and we'll
            respond within 2 business days.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-blue-50/30 to-purple-50/30" data-testid="section-form">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <form onSubmit={handleSubmit} className="space-y-10">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="border-0 border-b-2 border-border rounded-none px-0 py-3 text-lg focus-visible:ring-0 focus-visible:border-foreground bg-transparent transition-all"
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="border-0 border-b-2 border-border rounded-none px-0 py-3 text-lg focus-visible:ring-0 focus-visible:border-foreground bg-transparent transition-all"
                    data-testid="input-email"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="border-0 border-b-2 border-border rounded-none px-0 py-3 text-lg focus-visible:ring-0 focus-visible:border-foreground bg-transparent transition-all"
                    data-testid="input-phone"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Tell us about your project"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={6}
                    className="border-0 border-b-2 border-border rounded-none px-0 py-3 text-lg focus-visible:ring-0 focus-visible:border-foreground resize-none bg-transparent transition-all"
                    data-testid="input-message"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-foreground to-foreground/80 text-background hover-elevate px-12 hover:shadow-xl transition-all"
                  data-testid="button-send-message"
                >
                  Send Message
                </Button>
              </form>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-md p-8 space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2">Address</h3>
                <p className="text-muted-foreground">
                  123 Creative Street<br />
                  San Francisco, CA 94103
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Hours</h3>
                <p className="text-muted-foreground">
                  Mon - Fri: 9AM - 6PM<br />
                  Sat - Sun: Closed
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Phone</h3>
                <p className="text-muted-foreground">
                  +1 (555) 123-4567<br />
                  +1 (555) 987-6543
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <p className="text-muted-foreground">
                  hello@dezhyne.com<br />
                  info@dezhyne.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white" data-testid="section-contact-info">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline inline-flex items-center gap-2"
            data-testid="link-google-maps"
          >
            <MapPin size={20} />
            View on Google Maps
          </a>
        </div>
      </section>
    </div>
  );
}
