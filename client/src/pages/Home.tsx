import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import PortfolioCard from "@/components/PortfolioCard";
import BlogCard from "@/components/BlogCard";
import ApproachStep from "@/components/ApproachStep";
import ClientLogo from "@/components/ClientLogo";
import { ArrowRight, Globe, ShoppingCart, Palette, TrendingUp, Share2, Bug } from "lucide-react";
import heroGradient from "@assets/generated_images/Hero_gradient_background_607a5597.png";
import portfolioImg1 from "@assets/generated_images/Website_development_portfolio_mockup_4346f8d4.png";
import portfolioImg2 from "@assets/generated_images/E-commerce_platform_showcase_344af99a.png";
import portfolioImg3 from "@assets/generated_images/Branding_strategy_project_b01810b0.png";
import portfolioImg4 from "@assets/generated_images/Mobile_UI/UX_project_c691a50b.png";
import blogImg1 from "@assets/generated_images/Development_workspace_blog_ddf29661.png";
import blogImg2 from "@assets/generated_images/Creative_design_blog_cdbd66a7.png";
import blogImg3 from "@assets/generated_images/Social_media_blog_3a3e2d24.png";

export default function Home() {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Custom-built websites that blend stunning design with powerful functionality to elevate your online presence.",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Development",
      description: "Scalable online stores with seamless checkout experiences and robust backend systems.",
    },
    {
      icon: Palette,
      title: "Branding & Strategy",
      description: "Comprehensive brand identity development from naming to visual systems that resonate.",
    },
    {
      icon: TrendingUp,
      title: "Paid Media",
      description: "Data-driven advertising campaigns that maximize ROI across all digital platforms.",
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Engaging content strategies and community management to grow your brand presence.",
    },
    {
      icon: Bug,
      title: "Software Testing",
      description: "Comprehensive quality assurance to ensure flawless user experiences across all touchpoints.",
    },
  ];

  const portfolioItems = [
    {
      image: portfolioImg1,
      title: "Modern SaaS Platform",
      category: "Website Development",
      description: "A cutting-edge platform revolutionizing team collaboration",
    },
    {
      image: portfolioImg2,
      title: "Premium E-commerce Store",
      category: "E-commerce",
      description: "Luxury shopping experience with seamless checkout flow",
    },
    {
      image: portfolioImg3,
      title: "Brand Identity System",
      category: "Branding",
      description: "Complete visual language for a tech-forward startup",
    },
    {
      image: portfolioImg4,
      title: "Mobile App Design",
      category: "UI/UX",
      description: "Intuitive mobile experience with delightful interactions",
    },
  ];

  const blogPosts = [
    {
      image: blogImg1,
      title: "The Future of Web Development in 2025",
      description: "Exploring emerging technologies and frameworks shaping the next generation of web experiences.",
      readTime: "5 min read",
      gradient: "bg-gradient-to-r from-purple-400 to-pink-400",
    },
    {
      image: blogImg2,
      title: "Design Systems That Scale",
      description: "Building robust design systems that grow with your product and maintain consistency.",
      readTime: "7 min read",
      gradient: "bg-gradient-to-r from-green-400 to-cyan-400",
    },
    {
      image: blogImg3,
      title: "Social Media Strategy for 2025",
      description: "Data-driven approaches to building authentic connections and driving engagement.",
      readTime: "6 min read",
      gradient: "bg-gradient-to-r from-orange-400 to-red-400",
    },
  ];

  return (
    <div className="min-h-screen" data-testid="page-home">
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroGradient})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        data-testid="section-hero"
      >
        <div className="absolute inset-0 bg-white/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center py-32">
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000"
            data-testid="text-hero-headline"
          >
            Crafting the Future of
            <br />
            Digital Experiences.
          </h1>
          <p
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150"
            data-testid="text-hero-subtext"
          >
            We turn ideas into stunning digital realities through innovative
            design and technology.
          </p>
          <Button
            size="lg"
            className="rounded-full bg-foreground text-background hover-elevate px-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300"
            data-testid="button-get-started"
            onClick={() => (window.location.href = "/contact")}
          >
            Get Started
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      <section className="py-20 bg-white" data-testid="section-trusted-brands">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-center text-sm font-medium text-muted-foreground mb-12" data-testid="text-trusted-by">
            TRUSTED BY LEADING BRANDS
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <ClientLogo name="TechCorp" logoText="TECHCORP" />
            <ClientLogo name="Innovate" logoText="INNOVATE" />
            <ClientLogo name="Digital" logoText="DIGITAL+" />
            <ClientLogo name="Future" logoText="FUTURE" />
            <ClientLogo name="Nexus" logoText="NEXUS" />
            <ClientLogo name="Vertex" logoText="VERTEX" />
          </div>
        </div>
      </section>

      <section className="py-32 bg-muted/30" data-testid="section-services">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-services-heading">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-services-subtext">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-white" data-testid="section-work">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-work-heading">
              We Are The Team — We Think Elastic.
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-work-subtext">
              Explore our portfolio of innovative digital projects
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <PortfolioCard key={index} {...item} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full hover-elevate"
              data-testid="button-view-all-work"
              onClick={() => (window.location.href = "/portfolio")}
            >
              View All Work
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-32 bg-muted/30" data-testid="section-approach">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-approach-heading">
              Our Approach
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-approach-subtext">
              A proven methodology to deliver exceptional results
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <ApproachStep
              number="01"
              title="Discovery & Strategy"
              description="We dive deep into your business goals, target audience, and competitive landscape to craft a strategic roadmap."
            />
            <ApproachStep
              number="02"
              title="Design & Creative"
              description="Our designers bring your vision to life with pixel-perfect interfaces and engaging user experiences."
            />
            <ApproachStep
              number="03"
              title="Development & Testing"
              description="Clean, scalable code meets rigorous testing to ensure your product performs flawlessly."
            />
            <ApproachStep
              number="04"
              title="Launch & Growth"
              description="We don't just launch—we optimize, analyze, and iterate to drive continuous improvement."
              isLast
            />
          </div>
        </div>
      </section>

      <section className="py-32 bg-white" data-testid="section-blog">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-blog-heading">
              Latest Insights
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-blog-subtext">
              Thoughts, ideas, and perspectives from our team
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full hover-elevate"
              data-testid="button-view-all-blogs"
              onClick={() => (window.location.href = "/blogs")}
            >
              View All Blogs
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-br from-primary/10 to-accent/10" data-testid="section-cta">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-cta-heading">
            Let's Build Something Great Together.
          </h2>
          <p className="text-xl text-muted-foreground mb-8" data-testid="text-cta-subtext">
            Ready to transform your digital presence?
          </p>
          <Button
            size="lg"
            className="rounded-full bg-foreground text-background hover-elevate px-8"
            data-testid="button-cta-lets-talk"
            onClick={() => (window.location.href = "/contact")}
          >
            Let's Talk
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
}
