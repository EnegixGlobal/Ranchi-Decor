import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const banners = [
  {
    title: "Flooring",
    subtitle: "NEW IN",
    image: "/banners/flooring-banner.jpg", // ✅ local image path
    link: "/shop?category=flooring",
  },
  {
    title: "Wallpapers",
    subtitle: "TRENDING",
    image: "/banners/wallpaper-banner.jpg", // ✅ local image path
    link: "/shop?category=wallpaper",
  },
];

export default function CategoryBanners() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          {banners.map((banner) => (
            <Card
              key={banner.title}
              className="relative h-[300px] md:h-[400px] overflow-hidden group cursor-pointer border-0 shadow-md"
            >
              {/* Background Image */}
              <img
                src={banner.image}
                alt={banner.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />

              {/* Text Content */}
              <div className="absolute inset-0 z-20 flex flex-col justify-center px-8">
                {banner.subtitle && (
                  <p className="text-sm uppercase text-white/80 mb-2">
                    {banner.subtitle}
                  </p>
                )}
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {banner.title}
                </h3>
                <Link to={banner.link}>
                  <Button
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold"
                    variant="default"
                  >
                    Shop Now
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
