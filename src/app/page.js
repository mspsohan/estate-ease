
import Navbar from "../components/navbar";
import HomePage from "@/components/pages/home";
import Footer from "@/components/footer";
import AboutUs from "@/components/pages/about";
import Features from "@/components/pages/features";
import SaleProperties from "@/components/pages/onsale";
import OurServices from "@/components/pages/service";
import Demo from "@/components/pages/demo";
import OurClients from "@/components/pages/clients";
import ContactUs from "@/components/pages/contact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <AboutUs />
      <Features />
      <SaleProperties />
      <OurServices />
      <Demo />
      <OurClients />
      <ContactUs />
      <Footer />
    </div>
  );
}
