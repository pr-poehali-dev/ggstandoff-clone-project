import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Cases from "@/components/Cases";
import Inventory from "@/components/Inventory";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <Hero />
      <Cases />
      <Inventory />
      <Footer />
    </div>
  );
};

export default Index;
