// // export default function About() {
// //   return (
// //     <div className="min-h-screen py-16">
// //       <div className="container mx-auto px-4 max-w-4xl">
// //         <h1 className="text-4xl font-bold mb-8">About Ranchi Decor</h1>
        
// //         <div className="prose prose-lg max-w-none space-y-6">
// //           <p className="text-lg">
// //             Welcome to <span className="font-semibold text-primary">Ranchi Decor</span> - your complete interior solution provider based in Ranchi, Jharkhand.
// //           </p>

// //           <h2 className="text-2xl font-bold mt-8 mb-4">Our Story</h2>
// //           <p>
// //             With years of experience in the interior design industry, Ranchi Decor has become a trusted name for premium flooring, wallpapers, carpets, window blinds, and innovative green solutions. We are committed to transforming spaces with quality products and exceptional service.
// //           </p>

// //           <h2 className="text-2xl font-bold mt-8 mb-4">What We Offer</h2>
// //           <ul className="space-y-2">
// //             <li><strong>Flooring Solutions:</strong> Hospital, Vinyl, Office, Commercial, Gym, Wooden, PVC, and SPC Flooring</li>
// //             <li><strong>Wallpapers:</strong> Standard and Customized Wallpaper options</li>
// //             <li><strong>Carpets:</strong> Wall-to-Wall Carpets and Carpet Tiles</li>
// //             <li><strong>Window Blinds:</strong> Roman, Roller, Vertical, and Zebra Blinds</li>
// //             <li><strong>Green Solutions:</strong> Artificial Grass and Vertical Grass Walls</li>
// //             <li><strong>Panels & Sheets:</strong> PVC Panels, Fluted Panels, and UV Marble Sheets</li>
// //           </ul>

// //           <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose Us</h2>
// //           <ul className="space-y-2">
// //             <li>Premium quality products from trusted manufacturers</li>
// //             <li>Expert consultation and design assistance</li>
// //             <li>Professional installation services</li>
// //             <li>Competitive pricing and flexible payment options</li>
// //             <li>30-day satisfaction guarantee</li>
// //             <li>24/7 customer support</li>
// //           </ul>

// //           <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
// //           <p>
// //             To provide complete interior solutions that enhance the beauty, comfort, and functionality of residential and commercial spaces across Jharkhand and beyond.
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import { motion } from "framer-motion";

// export default function About() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 text-foreground">
//       {/* Header Section */}
//       <motion.div
//         className="py-16 md:py-20 bg-gradient-to-r from-primary/10 via-white to-primary/10 shadow-sm mb-12"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <div className="container mx-auto px-4 md:px-8 text-center">
//           <motion.h1
//             className="text-3xl md:text-4xl font-extrabold tracking-tight text-primary mb-4"
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//           >
//             About Ranchi Decor
//           </motion.h1>
//           <motion.p
//             className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4, duration: 0.6 }}
//           >
//             Redefining interiors with premium flooring, wallpapers, carpets,
//             blinds, and modern green solutions across Jharkhand and beyond.
//           </motion.p>
//         </div>
//       </motion.div>

//       {/* Content Section */}
//       <div className="container mx-auto px-4 md:px-8 max-w-4xl pb-20">
//         <motion.div
//           className="prose prose-lg max-w-none space-y-8"
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <p className="text-lg leading-relaxed">
//             Welcome to{" "}
//             <span className="font-semibold text-primary">Ranchi Decor</span> —
//             your complete interior solution provider based in Ranchi, Jharkhand.
//             We bring a fusion of creativity, craftsmanship, and technology to
//             every space we design.
//           </p>

//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-2xl md:text-3xl font-bold text-primary mt-8 mb-4">
//               Our Story
//             </h2>
//             <p className="text-muted-foreground">
//               With years of experience in the interior design industry, Ranchi
//               Decor has become a trusted name for premium flooring, wallpapers,
//               carpets, window blinds, and innovative green solutions. We are
//               committed to transforming spaces with quality products and
//               exceptional service.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//           >
//             <h2 className="text-2xl md:text-3xl font-bold text-primary mt-8 mb-4">
//               What We Offer
//             </h2>
//             <ul className="space-y-2 text-muted-foreground">
//               <li>
//                 <strong>Flooring Solutions:</strong> Hospital, Vinyl, Office,
//                 Commercial, Gym, Wooden, PVC, and SPC Flooring
//               </li>
//               <li>
//                 <strong>Wallpapers:</strong> Standard and Customized Wallpaper
//                 options
//               </li>
//               <li>
//                 <strong>Carpets:</strong> Wall-to-Wall Carpets and Carpet Tiles
//               </li>
//               <li>
//                 <strong>Window Blinds:</strong> Roman, Roller, Vertical, and
//                 Zebra Blinds
//               </li>
//               <li>
//                 <strong>Green Solutions:</strong> Artificial Grass and Vertical
//                 Grass Walls
//               </li>
//               <li>
//                 <strong>Panels & Sheets:</strong> PVC Panels, Fluted Panels, and
//                 UV Marble Sheets
//               </li>
//             </ul>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.15 }}
//           >
//             <h2 className="text-2xl md:text-3xl font-bold text-primary mt-8 mb-4">
//               Why Choose Us
//             </h2>
//             <ul className="space-y-2 text-muted-foreground">
//               <li>Premium quality products from trusted manufacturers</li>
//               <li>Expert consultation and design assistance</li>
//               <li>Professional installation services</li>
//               <li>Competitive pricing and flexible payment options</li>
//               <li>30-day satisfaction guarantee</li>
//               <li>24/7 customer support</li>
//             </ul>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <h2 className="text-2xl md:text-3xl font-bold text-primary mt-8 mb-4">
//               Our Mission
//             </h2>
//             <p className="text-muted-foreground">
//               To provide complete interior solutions that enhance the beauty,
//               comfort, and functionality of residential and commercial spaces
//               across Jharkhand and beyond. We believe every space deserves
//               sophistication — and we make it happen through design excellence
//               and attention to detail.
//             </p>
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }


import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 text-foreground overflow-x-hidden">
      {/* ✅ Hero Section */}
      <motion.section
        className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="public/images/Luxury_img_1.jpg"
          alt="Elegant Interior Design"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>

        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            About Ranchi Decor
          </motion.h1>
          <motion.p
            className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Transforming spaces with elegance, creativity, and quality craftsmanship.
          </motion.p>
        </div>
      </motion.section>

      {/* ✅ Our Story Section */}
      <section className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Our Story
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Founded in Ranchi, Jharkhand — Ranchi Decor is your trusted partner
              for complete interior design solutions. With years of expertise, we
              bring high-quality flooring, wallpapers, carpets, blinds, and
              eco-friendly green decor to life.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Every space we create is crafted with precision, functionality, and
              modern aesthetics — making your home or office stand out with style.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/about/story.jpg" // 👉 elegant image of flooring, blinds, etc.
              alt="Our Story"
              className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </section>

      {/* ✅ What We Offer Section */}
      <section className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="/images/about/products.jpg"
              alt="Our Offerings"
              className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              What We Offer
            </h2>
            <ul className="space-y-3 text-muted-foreground text-lg">
              <li>✅ Flooring: Vinyl, Wooden, PVC, SPC, and Gym Flooring</li>
              <li>✅ Wallpapers: Standard & Custom Designs</li>
              <li>✅ Carpets: Wall-to-Wall & Carpet Tiles</li>
              <li>✅ Window Blinds: Roller, Roman, Vertical & Zebra</li>
              <li>✅ Green Solutions: Artificial Grass & Vertical Walls</li>
              <li>✅ Panels: PVC, Fluted & UV Marble Sheets</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ✅ Why Choose Us Section */}
      <section className="container mx-auto px-4 md:px-8 py-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-primary mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why Choose Ranchi Decor
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              img: "/images/about/quality.jpg",
              title: "Premium Quality",
              desc: "Top-grade materials sourced from trusted manufacturers.",
            },
            {
              img: "/images/about/service.jpg",
              title: "Expert Consultation",
              desc: "Our design experts guide you to achieve your perfect space.",
            },
            {
              img: "/images/about/installation.jpg",
              title: "Professional Installation",
              desc: "Our trained team ensures seamless and durable installation.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500"
            >
              <img
                src={item.img}
                alt={item.title}
                className="rounded-xl mb-4 h-48 w-full object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ Mission Section */}
      <section className="bg-gradient-to-r from-primary/5 via-white to-primary/5 py-16">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-primary mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Mission
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            To provide complete interior solutions that enhance the beauty,
            comfort, and functionality of every space — blending style, quality,
            and affordability for homes and businesses alike.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
