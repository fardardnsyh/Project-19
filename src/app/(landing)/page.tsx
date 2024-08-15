import Features from './_components/features';
import Footer from './_components/footer';
import Hero from './_components/hero';
import MoreFeatures from './_components/more-features';
import Testimonials from './_components/testimonials';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <MoreFeatures />
      <Testimonials />
      <Footer />
    </>
  );
}
