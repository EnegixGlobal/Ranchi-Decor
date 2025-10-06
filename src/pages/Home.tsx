"use client";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { Truck, RotateCcw, Shield, Headphones } from "lucide-react";
import { motion } from "framer-motion";

import HeroSection from "../components/HeroSection";
import ShopByCategory from "../components/ShopByCategory";
import CategoryBanners from "../components/CategoryBanners";

function getFeaturedProducts() {
  const categories = ["flooring", "wallpaper", "carpet", "blind", "green", "panel"];
  let featured: any[] = [];

  categories.forEach((cat) => {
    const catProducts = products.filter((p) => p.category === cat);
    featured.push(...catProducts.slice(0, 2));
  });

  return featured.slice(0, 12);
}

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  const brandRed = "#B71C1C";
  const accentRed = "#E53935";

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#fff9f9] to-white text-foreground overflow-x-hidden">
      {/* 🟥 Hero Section */}
      <HeroSection />

      {/* ✅ Guarantees Section */}
      <motion.section
        className="relative py-16 md:py-20 bg-white overflow-hidden"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Red blur background */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[90%] h-[120%] bg-gradient-to-r from-[#b71c1c1a] to-[#e5393520] rounded-[100px] blur-[100px] -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 text-center">
            {[
              { Icon: Truck, title: "Free Delivery", desc: "On orders above ₹10,000" },
              { Icon: RotateCcw, title: "Easy Returns", desc: "30 days return policy" },
              { Icon: Shield, title: "Quality Guarantee", desc: "Premium quality assured" },
              { Icon: Headphones, title: "24/7 Support", desc: "Always here to help" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white/70 border border-white/40 rounded-3xl backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-8 transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_10px_30px_rgba(231,57,53,0.15)]"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#fff5f5] to-white mb-4 shadow-md group-hover:shadow-lg transition-all duration-300">
                  <item.Icon className="w-9 h-9 text-[#B71C1C] group-hover:text-[#E53935] transition-colors" />
                </div>
                <motion.h3
                  className="font-semibold mb-2 text-lg text-gray-900 group-hover:text-[#B71C1C]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  {item.title}
                </motion.h3>
                <p className="text-sm text-gray-500 max-w-[200px] mx-auto leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ✅ Shop by Category (heading removed) */}
      <motion.section
        className="py-16 md:py-20 bg-gradient-to-b from-white to-[#fff8f8]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <ShopByCategory />
        </div>
      </motion.section>

      {/* ✅ Category Banners */}
      <motion.section
        className="py-16 md:py-20 bg-white/90 backdrop-blur-md border-t border-gray-100"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <CategoryBanners />
        </div>
      </motion.section>

      {/* ✅ Featured Products */}
      <motion.section
        className="py-16 md:py-24 bg-gradient-to-t from-[#fff0f0] via-white to-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-14 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="bg-gradient-to-r from-[#B71C1C] to-[#E53935] bg-clip-text text-transparent">
              Our Premium Collection
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-500 mb-12 max-w-[650px] mx-auto leading-relaxed text-base"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Explore our most loved flooring, wallpapers, and decor products — crafted for elegance, comfort, and timeless style.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="transform transition-transform duration-300 hover:scale-[1.03]"
              >
                <div className="rounded-3xl overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgba(231,57,53,0.1)] transition-shadow duration-300">
                  <ProductCard product={product} />
                </div>
              </motion.div>
            ))}
          </div>

          <Link to="/shop">
            <motion.div
              className="mt-12 flex justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                className="border-[#B71C1C] text-[#B71C1C] hover:bg-[#B71C1C] hover:text-white transition-all duration-300 font-medium px-8 py-3 rounded-full shadow-sm"
              >
                Explore More
              </Button>
            </motion.div>
          </Link>
        </div>
      </motion.section>

      {/* ✅ Soft Gradient Footer Base */}
      <div className="h-[80px] bg-gradient-to-t from-[#fff5f5] to-transparent" />
    </div>
  );
}
