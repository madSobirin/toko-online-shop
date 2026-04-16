import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import ProductGrid from "@/components/home/ProductGrid";
import Testimonial from "@/components/home/Testimonial";
import Newsletter from "@/components/home/Newsletter";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow">
        <Hero />
        <ProductGrid />
        <Testimonial />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
