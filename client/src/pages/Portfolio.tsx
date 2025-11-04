import { useState } from "react";
import { Button } from "@/components/ui/button";
import PortfolioCard from "@/components/PortfolioCard";
import portfolioImg1 from "@assets/generated_images/Website_development_portfolio_mockup_4346f8d4.png";
import portfolioImg2 from "@assets/generated_images/E-commerce_platform_showcase_344af99a.png";
import portfolioImg3 from "@assets/generated_images/Branding_strategy_project_b01810b0.png";
import portfolioImg4 from "@assets/generated_images/Mobile_UI/UX_project_c691a50b.png";
import portfolioImg5 from "@assets/generated_images/Marketing_analytics_showcase_de23804b.png";
import portfolioImg6 from "@assets/generated_images/Agency_office_environment_669024ec.png";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Branding", "E-commerce", "Tech", "UI/UX"];

  const portfolioItems = [
    {
      image: portfolioImg1,
      title: "Modern SaaS Platform",
      category: "Tech",
      description: "A cutting-edge platform revolutionizing team collaboration with AI-powered features",
    },
    {
      image: portfolioImg2,
      title: "Premium E-commerce Store",
      category: "E-commerce",
      description: "Luxury shopping experience with seamless checkout and personalized recommendations",
    },
    {
      image: portfolioImg3,
      title: "Brand Identity System",
      category: "Branding",
      description: "Complete visual language for a tech-forward startup entering the market",
    },
    {
      image: portfolioImg4,
      title: "Mobile Banking App",
      category: "UI/UX",
      description: "Intuitive mobile experience making finance management delightful and accessible",
    },
    {
      image: portfolioImg5,
      title: "Analytics Dashboard",
      category: "Tech",
      description: "Real-time data visualization platform for enterprise decision-making",
    },
    {
      image: portfolioImg6,
      title: "Creative Agency Rebrand",
      category: "Branding",
      description: "Bold new identity positioning a creative studio for global expansion",
    },
  ];

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen" data-testid="page-portfolio">
      <section className="pt-32 pb-20 bg-white" data-testid="section-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="text-hero-title">
            Our Work — Creative Strategy
            <br />
            Meets Real Impact.
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-hero-subtitle">
            Explore our portfolio of transformative digital projects
          </p>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-b from-purple-50/30 to-blue-50/20" data-testid="section-filters">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                className="rounded-full hover-elevate"
                onClick={() => setActiveFilter(filter)}
                data-testid={`button-filter-${filter.toLowerCase()}`}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-white" data-testid="section-grid">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="animate-in fade-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <PortfolioCard {...item} />
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20" data-testid="text-no-results">
              <p className="text-xl text-muted-foreground">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
