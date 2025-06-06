import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Matches from "@/components/Matches";
import News from "@/components/News";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <Hero />
      <Matches />
      <News />
      <Footer />
    </div>
  );
};

export default Index;
