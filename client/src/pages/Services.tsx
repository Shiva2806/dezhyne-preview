import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Code, TrendingUp, ArrowRight } from "lucide-react";
import portfolioImg1 from "@assets/generated_images/Website_development_portfolio_mockup_4346f8d4.png";
import portfolioImg2 from "@assets/generated_images/E-commerce_platform_showcase_344af99a.png";
import portfolioImg3 from "@assets/generated_images/Marketing_analytics_showcase_de23804b.png";

export default function Services() {
  const [activeTab, setActiveTab] = useState<"brand" | "tech" | "media">("brand");

  const brandServices = [
    {
      title: "Brand Naming & Positioning",
      description: "Creating memorable brand names and strategic positioning that resonates with your target audience.",
      image: portfolioImg1,
    },
    {
      title: "Visual Identity Design",
      description: "Comprehensive visual systems including logos, color palettes, typography, and brand guidelines.",
      image: portfolioImg2,
    },
    {
      title: "Creative Strategy",
      description: "Data-driven creative strategies that align with your business goals and market opportunities.",
      image: portfolioImg3,
    },
  ];

  const techServices = [
    {
      title: "Custom Web Applications",
      description: "Scalable web applications built with modern frameworks and best practices.",
      image: portfolioImg2,
    },
    {
      title: "E-commerce Solutions",
      description: "Full-featured online stores with payment integration, inventory management, and analytics.",
      image: portfolioImg1,
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      image: portfolioImg3,
    },
  ];

  const mediaServices = [
    {
      title: "Paid Advertising",
      description: "Performance-driven campaigns across Google, Meta, LinkedIn, and programmatic platforms.",
      image: portfolioImg3,
    },
    {
      title: "Social Media Marketing",
      description: "Organic and paid social strategies to build community and drive engagement.",
      image: portfolioImg1,
    },
    {
      title: "Growth Strategy",
      description: "Holistic growth marketing combining SEO, content, email, and conversion optimization.",
      image: portfolioImg2,
    },
  ];

  const getCurrentServices = () => {
    switch (activeTab) {
      case "brand":
        return brandServices;
      case "tech":
        return techServices;
      case "media":
        return mediaServices;
    }
  };

  return (
    <div className="min-h-screen" data-testid="page-services">
      <section className="pt-32 pb-20 bg-white" data-testid="section-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="text-hero-title">
            Digital Solutions for the
            <br />
            <span className="relative">
              Modern Brand
              <span className="absolute bottom-0 left-0 w-full h-1 bg-primary" />
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-hero-subtitle">
            From design to deployment — we create, optimize, and scale.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-b from-purple-50/50 to-blue-50/30" data-testid="section-tabs">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-center gap-4">
            <Button
              variant={activeTab === "brand" ? "default" : "outline"}
              className="rounded-full hover-elevate"
              onClick={() => setActiveTab("brand")}
              data-testid="button-tab-brand"
            >
              <Palette className="mr-2" size={18} />
              Brand Solutions
            </Button>
            <Button
              variant={activeTab === "tech" ? "default" : "outline"}
              className="rounded-full hover-elevate"
              onClick={() => setActiveTab("tech")}
              data-testid="button-tab-tech"
            >
              <Code className="mr-2" size={18} />
              Tech Solutions
            </Button>
            <Button
              variant={activeTab === "media" ? "default" : "outline"}
              className="rounded-full hover-elevate"
              onClick={() => setActiveTab("media")}
              data-testid="button-tab-media"
            >
              <TrendingUp className="mr-2" size={18} />
              Media Solutions
            </Button>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-b from-blue-50/30 to-pink-50/20" data-testid="section-services">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="space-y-20">
            {getCurrentServices().map((service, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
                data-testid={`service-${index}`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full rounded-md shadow-lg"
                    data-testid={`img-service-${index}`}
                  />
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <h3 className="text-3xl font-bold mb-4" data-testid={`text-service-title-${index}`}>
                    {service.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed" data-testid={`text-service-description-${index}`}>
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeTab === "tech" && (
        <section className="py-32 bg-gradient-to-br from-purple-50/50 to-blue-50/50" data-testid="section-tech-showcase">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-tech-heading">
              Creating scalable D2C and B2B solutions globally
            </h2>
            <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto" data-testid="text-tech-subtext">
              Trusted by businesses worldwide to deliver high-performance digital platforms
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[portfolioImg1, portfolioImg2, portfolioImg3].map((img, i) => (
                <Card key={i} className="overflow-hidden hover-elevate transition-all duration-300" data-testid={`card-template-${i}`}>
                  <img src={img} alt={`Template ${i + 1}`} className="w-full" />
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-32 bg-white" data-testid="section-cta">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-cta-heading">
            Let's Elevate Your Brand.
          </h2>
          <Button
            size="lg"
            className="rounded-full bg-accent text-accent-foreground hover-elevate px-8"
            data-testid="button-cta"
            onClick={() => (window.location.href = "/contact")}
          >
            Get Started
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
}
