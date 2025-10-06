"use client";
import { motion } from "framer-motion";
import { categories } from "../data/categories";
import { products } from "../data/products";
import { Link } from "react-router-dom";

export default function ShopByCategory() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-[#fff8f8] to-white overflow-hidden">
      {/* Subtle Background Blur Light */}
      <motion.div
        className="absolute inset-0 bg-[#b71c1c08] blur-[100px]"
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative container mx-auto px-4 md:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            <span className="text-[#B71C1C]">Popular Categories</span>
          </h2>
          <p className="text-gray-600 mt-3 text-sm md:text-base max-w-xl mx-auto">
            Discover our top product categories designed to make your interiors shine.
          </p>
        </motion.div>

        {/* Category Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {categories.map((cat, i) => {
            const productCount = products.filter(
              (p) => p.category === cat.id
            ).length;

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <Link
                  to={`/shop?category=${cat.id}`}
                  className="group flex flex-col items-center text-center transition-all duration-300"
                >
                  {/* Category Circle */}
                  <div
                    className="
                      relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden
                      border-[3px] border-[#e5e5e5] shadow-sm
                      transition-all duration-500 ease-out
                      group-hover:border-[#B71C1C] group-hover:scale-105
                      bg-white
                    "
                  >
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Category Name */}
                  <h3 className="mt-5 font-semibold text-base sm:text-lg text-gray-900 group-hover:text-[#B71C1C] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-gray-500">{productCount} Products</p>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
