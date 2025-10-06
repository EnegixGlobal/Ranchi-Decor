"use client";

import { motion, useMotionValue, useSpring, useTransform, type Variants } from "framer-motion";
import { useEffect, useState } from "react";

// --- Carousel Slides Data ---
const slides = [
  {
    image: "/images/flooring/Office_Flooring_1.jpg",
    title: "ELEVATE YOUR SPACE",
    highlight: "ELEGANTLY",
    desc: "Discover premium flooring, wallpapers, carpets, and blinds — crafted to elevate your interiors with unmatched style.",
  },
  {
    image: "/images/wallpapers/Customized_Wallpaper_4.jpg",
    title: "EXPERIENCE WALL",
    highlight: "ARTISTRY",
    desc: "Bespoke wallpapers that add warmth, depth, and personality to your walls, turning spaces into statements.",
  },
  {
    image: "/images/carpets/Customized_Carpet_5.jpg",
    title: "LUXURY UNDER EVERY",
    highlight: "STEP",
    desc: "Soft, exquisite carpets that redefine comfort and elegance, providing a truly luxurious foundation for any room.",
  },
  {
    image: "/images/blinds/Roman_Blinds_2.jpg",
    title: "SHADE YOUR WORLD",
    highlight: "BEAUTIFULLY",
    desc: "Modern blinds and panels that seamlessly merge precise light control with sophisticated, high-end design.",
  },
];

// --- Refined, Faster Animation Variants ---
const textVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.04,
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];

  // --- Framer Motion Parallax Values ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 90, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 90, damping: 15 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-4deg", "4deg"]);

  // --- Brand Colors ---
  const brandRed = "#8B0000";
  const accentRed = "#E53935";

  // --- Auto Slide ---
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // --- Mouse Handlers ---
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative flex items-center justify-center min-h-[90vh] sm:min-h-[80vh] overflow-hidden bg-white">
      {/* Background Glow (Soft and Minimal) */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#fdf9f9]" />

      <motion.div
        className="absolute right-0 top-0 w-[600px] h-[600px] rounded-full bg-[#fbecec] blur-[180px] opacity-50"
        animate={{ x: [0, 30, 0], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-0 bottom-0 w-[500px] h-[500px] rounded-full bg-[#fff3f3] blur-[180px] opacity-40"
        animate={{ y: [0, 40, 0], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative z-10 mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT TEXT */}
        <motion.div
          key={`text-${current}`}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-center md:text-left max-w-full order-last md:order-first pt-10 md:pt-0"
        >
          <motion.span
            variants={childVariants}
            className="inline-block text-xs font-medium px-4 py-1.5 rounded-full mb-5 uppercase tracking-wider border"
            style={{
              background: `rgba(231,57,53,0.05)`,
              border: `1px solid rgba(231,57,53,0.15)`,
              color: brandRed,
            }}
          >
            New Arrivals
          </motion.span>

          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-semibold leading-tight mb-3 text-neutral-900 tracking-tight">
            <motion.span variants={childVariants} className="block">
              {slide.title}
            </motion.span>
            <motion.span
              variants={childVariants}
              className="block text-transparent bg-clip-text"
              style={{
                backgroundImage: `linear-gradient(90deg, ${accentRed}, ${brandRed})`,
                fontWeight: 800,
              }}
            >
              {slide.highlight}
            </motion.span>
          </h1>

          <motion.p
            variants={childVariants}
            className="text-base text-gray-700 max-w-[340px] mx-auto md:mx-0 mt-5 mb-8 p-5 rounded-2xl border border-gray-100/70 shadow-md"
            style={{
              backgroundColor: "rgba(255,255,255,0.75)",
              backdropFilter: "blur(12px)",
              lineHeight: 1.45,
            }}
          >
            {slide.desc}
          </motion.p>

          <motion.button
            variants={childVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: `0 0 18px ${accentRed}60`,
            }}
            whileTap={{ scale: 0.96 }}
            className="text-white font-semibold rounded-xl px-10 py-3 text-base uppercase tracking-wider transition-all duration-200 shadow-sm"
            style={{
              background: `linear-gradient(135deg, ${accentRed}, ${brandRed})`,
            }}
          >
            Shop Now
          </motion.button>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          key={`image-${current}`}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative flex justify-center items-center order-first md:order-last min-h-[300px]"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ perspective: 1000 }}
        >
          <motion.div
            className="relative w-[85vw] h-[85vw] max-w-[460px] max-h-[460px] rounded-[45px] overflow-hidden border border-[#ff9999]/30 backdrop-blur-2xl"
            style={{ rotateX, rotateY }}
            transition={{ type: "spring", stiffness: 100, damping: 16 }}
          >
            <motion.img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover rounded-[45px]"
              initial={{ scale: 1.02 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
            />
          </motion.div>

          {/* Discount Badge */}
          <motion.div
            className="absolute top-5 right-5 sm:top-8 sm:right-8 w-16 h-16 sm:w-20 sm:h-20 flex flex-col items-center justify-center text-white text-base sm:text-lg font-bold rounded-full border-4 border-white/60 shadow-xl"
            style={{
              background: `linear-gradient(145deg, ${accentRed}, ${brandRed})`,
            }}
            animate={{ scale: [1, 1.07, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span>50%</span>
            <span className="text-[10px] font-semibold mt-[-3px]">OFF</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-8 h-3 bg-gradient-to-r from-[#E53935] to-[#8B0000]"
                : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
            } shadow-inner`}
          />
        ))}
      </div>
    </section>
  );
}
