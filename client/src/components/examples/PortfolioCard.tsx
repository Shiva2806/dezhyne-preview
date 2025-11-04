import PortfolioCard from "../PortfolioCard";
import portfolioImg from "@assets/generated_images/Website_development_portfolio_mockup_4346f8d4.png";

export default function PortfolioCardExample() {
  return (
    <div className="p-8 max-w-md">
      <PortfolioCard
        image={portfolioImg}
        title="Modern E-commerce Platform"
        category="E-commerce"
        description="A seamless shopping experience with innovative features"
      />
    </div>
  );
}
