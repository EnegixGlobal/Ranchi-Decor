"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Product } from "@/data/products";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();
  const navigate = useNavigate();

  const discount = product.compareAt
    ? Math.round(((product.compareAt - product.price) / product.compareAt) * 100)
    : null;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      imageUrl: product.imageUrl,
    });
    toast.success("Added to cart!");
  };

  const handleBuyNow = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      imageUrl: product.imageUrl,
    });
    navigate("/checkout");
  };

  return (
    <Link to={`/product/${product.slug}`}>
      <Card
        className="
          group relative overflow-hidden rounded-2xl transition-all duration-500
          hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(183,28,28,0.25)]
          bg-white/80 backdrop-blur-xl border border-transparent
          hover:border-[2.5px] hover:border-[#B71C1C]
          hover:ring-[3px] hover:ring-[#B71C1C]/40
          w-full max-w-[280px] mx-auto
        "
      >
        {/* 🔴 Animated red glow ring */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-2xl"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(183,28,28,0.25), transparent 80%)",
          }}
        />

        {/* 🖼️ Product Image */}
        <div className="relative aspect-square overflow-hidden rounded-t-2xl">
          {discount && (
            <Badge className="absolute top-3 right-3 z-10 bg-[#B71C1C] text-white shadow-md text-xs">
              -{discount}%
            </Badge>
          )}
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* 📄 Product Info */}
        <div className="p-4 relative z-10">
          <h3
            className="font-semibold mb-2 line-clamp-1 text-gray-900 
            group-hover:text-[#B71C1C] transition-colors text-sm"
          >
            {product.title}
          </h3>

          {/* 💰 Pricing */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-gray-900">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              {product.compareAt && (
                <span className="text-xs text-gray-400 line-through">
                  ₹{product.compareAt.toLocaleString("en-IN")}
                </span>
              )}
            </div>
          </div>

          {/* 🛒 Buttons */}
          <div className="flex gap-2">
            {/* Add to Cart */}
            <Button
              className="
                flex-1 bg-[#B71C1C] hover:bg-[#A31616] text-white text-xs
                transition-all duration-300 shadow-sm hover:shadow-lg
                rounded-full py-2
              "
              onClick={handleAddToCart}
            >
              <ShoppingCart className="w-4 h-4 mr-1" />
              Add
            </Button>

            {/* Buy Now */}
            <Button
              variant="outline"
              className="
                flex-1 border-[1.5px] border-[#B71C1C] text-[#B71C1C] text-xs
                hover:bg-[#B71C1C] hover:text-white
                transition-all duration-300 shadow-sm hover:shadow-md
                rounded-full py-2
              "
              onClick={handleBuyNow}
            >
              Buy
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </div>
        </div>
      </Card>
    </Link>
  );
};
