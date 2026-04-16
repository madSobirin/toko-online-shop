import Header from "@/components/Home/Header";
import Hero from "@/components/Home/Hero";
import ProductGrid from "@/components/Home/ProductGrid";
import Testimonial from "@/components/Home/Testimonial";
import Newsletter from "@/components/Home/Newsletter";
import Footer from "@/components/Home/Footer";

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
