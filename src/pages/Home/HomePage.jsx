import HomeHero from "../../components/home/HomeHero";
import QuickActions from "../../components/home/QuickActions";
import FeaturedProducts from "../../components/home/FeaturedProducts";
import PromotionSection from "../../components/home/PromotionSection";
import RecentActivity from "../../components/home/RecentActivity";

export default function HomePage() {
  return (
    <div className="page-composition">
      <HomeHero />
      <QuickActions />
      <FeaturedProducts />
      <PromotionSection />
      <RecentActivity />
    </div>
  );
}
