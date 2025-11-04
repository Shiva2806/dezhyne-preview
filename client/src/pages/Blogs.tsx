import BlogCard from "@/components/BlogCard";
import blogImg1 from "@assets/generated_images/Development_workspace_blog_ddf29661.png";
import blogImg2 from "@assets/generated_images/Creative_design_blog_cdbd66a7.png";
import blogImg3 from "@assets/generated_images/Social_media_blog_3a3e2d24.png";
import portfolioImg1 from "@assets/generated_images/Website_development_portfolio_mockup_4346f8d4.png";
import portfolioImg2 from "@assets/generated_images/E-commerce_platform_showcase_344af99a.png";
import portfolioImg3 from "@assets/generated_images/Marketing_analytics_showcase_de23804b.png";

export default function Blogs() {
  const blogPosts = [
    {
      image: blogImg1,
      title: "The Future of Web Development in 2025",
      description: "Exploring emerging technologies and frameworks that are shaping the next generation of web experiences and developer workflows.",
      readTime: "5 min read",
      gradient: "bg-gradient-to-r from-purple-400 to-pink-400",
      link: "/blogs/1",
    },
    {
      image: blogImg2,
      title: "Design Systems That Scale",
      description: "Building robust design systems that grow with your product while maintaining consistency across all touchpoints.",
      readTime: "7 min read",
      gradient: "bg-gradient-to-r from-green-400 to-cyan-400",
      link: "/blogs/2",
    },
    {
      image: blogImg3,
      title: "Social Media Strategy for Modern Brands",
      description: "Data-driven approaches to building authentic connections and driving meaningful engagement in the digital age.",
      readTime: "6 min read",
      gradient: "bg-gradient-to-r from-orange-400 to-red-400",
      link: "/blogs/3",
    },
    {
      image: portfolioImg1,
      title: "E-commerce UX Best Practices",
      description: "Creating seamless shopping experiences that convert browsers into buyers through thoughtful design and optimization.",
      readTime: "8 min read",
      gradient: "bg-gradient-to-r from-blue-400 to-indigo-400",
      link: "/blogs/4",
    },
    {
      image: portfolioImg2,
      title: "Brand Identity in the Digital Age",
      description: "Crafting memorable brand experiences that resonate across digital and physical touchpoints in today's market.",
      readTime: "6 min read",
      gradient: "bg-gradient-to-r from-pink-400 to-rose-400",
      link: "/blogs/5",
    },
    {
      image: portfolioImg3,
      title: "Performance Marketing Strategies",
      description: "Maximizing ROI through data-driven campaigns and continuous optimization across all digital channels.",
      readTime: "9 min read",
      gradient: "bg-gradient-to-r from-yellow-400 to-orange-400",
      link: "/blogs/6",
    },
  ];

  return (
    <div className="min-h-screen" data-testid="page-blogs">
      <section className="pt-32 pb-20 bg-white" data-testid="section-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="text-hero-title">
            Insights & Ideas That
            <br />
            Drive Change.
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-hero-subtitle">
            Discover the latest in design, marketing, and technology
          </p>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-b from-purple-50/30 to-pink-50/20" data-testid="section-blog-grid">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="animate-in fade-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <BlogCard {...post} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
