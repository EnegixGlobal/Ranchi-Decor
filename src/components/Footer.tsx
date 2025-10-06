import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-primary">Ranchi</span> Decor
            </h3>
            <p className="text-sm text-background/80">
              A Complete Interior Solution
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/shop" className="block text-sm text-background/80 hover:text-primary">
                Shop
              </Link>
              <Link to="/about" className="block text-sm text-background/80 hover:text-primary">
                About Us
              </Link>
              <Link to="/contact" className="block text-sm text-background/80 hover:text-primary">
                Contact
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <div className="space-y-2">
              <Link to="/shop?category=flooring" className="block text-sm text-background/80 hover:text-primary">
                Flooring
              </Link>
              <Link to="/shop?category=wallpaper" className="block text-sm text-background/80 hover:text-primary">
                Wallpaper
              </Link>
              <Link to="/shop?category=carpet" className="block text-sm text-background/80 hover:text-primary">
                Carpets
              </Link>
              <Link to="/shop?category=blind" className="block text-sm text-background/80 hover:text-primary">
                Window Blinds
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-background/80">
                <Phone className="h-4 w-4" />
                <span>+91 12345 67890</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-background/80">
                <Mail className="h-4 w-4" />
                <span>info@ranchidecor.in</span>
              </div>
              <div className="flex items-start space-x-2 text-sm text-background/80">
                <MapPin className="h-4 w-4 mt-1" />
                <span>Ranchi, Jharkhand, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} Ranchi Decor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
