import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Categories from "../../components/Categories";
import FeaturedProducts from "../../components/FeaturedProducts";
import Footer from "../../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Footer />
    </>
  );
}
