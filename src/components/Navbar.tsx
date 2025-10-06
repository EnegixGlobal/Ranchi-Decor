// import { ShoppingCart, Menu, X } from "lucide-react";
// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { useState } from "react";
// import { useCart } from "@/hooks/useCart";

// export const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const { items } = useCart();
  
//   const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

//   return (
//     <nav className="sticky top-0 z-50 bg-background border-b">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2">
//             <div className="text-2xl font-bold">
//               <span className="text-primary">Ranchi</span>
//               <span className="text-foreground"> Decor</span>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
//               Home
//             </Link>
//             <Link to="/shop" className="text-sm font-medium hover:text-primary transition-colors">
//               Shop
//             </Link>
//             <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
//               About
//             </Link>
//             <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">
//               Contact
//             </Link>
//           </div>

//           {/* Cart & Mobile Menu */}
//           <div className="flex items-center space-x-4">
//             <Link to="/cart">
//               <Button variant="ghost" size="icon" className="relative">
//                 <ShoppingCart className="h-5 w-5" />
//                 {cartCount > 0 && (
//                   <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                     {cartCount}
//                   </span>
//                 )}
//               </Button>
//             </Link>

//             <button
//               className="md:hidden"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             >
//               {mobileMenuOpen ? <X /> : <Menu />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="md:hidden py-4 space-y-2">
//             <Link
//               to="/"
//               className="block py-2 text-sm font-medium hover:text-primary"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               Home
//             </Link>
//             <Link
//               to="/shop"
//               className="block py-2 text-sm font-medium hover:text-primary"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               Shop
//             </Link>
//             <Link
//               to="/about"
//               className="block py-2 text-sm font-medium hover:text-primary"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               About
//             </Link>
//             <Link
//               to="/contact"
//               className="block py-2 text-sm font-medium hover:text-primary"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               Contact
//             </Link>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

import { ShoppingCart, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useCart } from "@/hooks/useCart";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { items } = useCart();

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="sticky top-0 z-50 bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* ✅ Logo Section (Logo + Text) */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/images/logo.jpeg"
              alt="Ranchi Decor Logo"
              className="h-10 w-auto object-contain"
            />
            <div className="text-2xl font-bold leading-none">
              <span className="text-primary">Ranchi</span>
              <span className="text-foreground"> Decor</span>
            </div>
          </Link>

          {/* 🖥️ Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/shop" className="text-sm font-medium hover:text-primary transition-colors">
              Shop
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* 🛒 Cart & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>

            {/* ☰ Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* 📱 Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link
              to="/"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
