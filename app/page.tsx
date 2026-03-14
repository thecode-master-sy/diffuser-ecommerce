import HeroSection from "./_sections/hero-section";
import DiscoverDiffusers from "./_sections/discover-diffuser";
import AboutSection from "./_sections/about-us";
import FeaturedProducts from "./_sections/featured-products";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <DiscoverDiffusers />
      <AboutSection />
      <FeaturedProducts />
    </main>
  );
}
