import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";
import { ProductCard } from "@/components/ProductCard";
import { motion } from "framer-motion";

export default function ProductDetail() {
  const { slug } = useParams();
  const { addItem } = useCart();

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">
            Product not found
          </h1>
          <Link to="/shop">
            <Button>Back to Shop</Button>
          </Link>
        </div>
      </div>
    );
  }

  const discount = product.compareAt
    ? Math.round(((product.compareAt - product.price) / product.compareAt) * 100)
    : null;

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      imageUrl: product.imageUrl,
    });
    toast.success("Added to cart!");
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen py-10 bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900 overflow-x-hidden">
      <div className="container mx-auto px-4 md:px-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link to="/shop">
            <Button
              variant="ghost"
              className="mb-6 flex items-center hover:text-red-600 transition-all hover:-translate-x-1"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Shop
            </Button>
          </Link>
        </motion.div>

        {/* Product Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Product Image */}
          <motion.div
            className="relative rounded-2xl overflow-hidden bg-gray-100 shadow-lg max-h-[480px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            {discount && (
              <Badge className="absolute top-4 right-4 bg-red-600 text-white text-sm px-3 py-1 shadow-md">
                {discount}%
              </Badge>
            )}
            <motion.img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

          {/* Product Details */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Badge className="w-fit mb-3 text-xs uppercase tracking-wide bg-gray-100 text-gray-600">
              {product.category}
            </Badge>

            <h1 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 leading-snug">
              {product.title}
            </h1>

            <div className="flex items-baseline gap-3 mb-5">
              <span className="text-3xl font-semibold text-red-600">
                ₹{product.price.toLocaleString()}
              </span>
              {product.compareAt && (
                <span className="text-lg text-gray-500 line-through">
                  ₹{product.compareAt.toLocaleString()}
                </span>
              )}
            </div>

            <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {product.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="border-gray-300 text-gray-600 hover:bg-gray-100 transition"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Add to Cart */}
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <Button
                size="lg"
                onClick={handleAddToCart}
                className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
              Related Products
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {relatedProducts.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100">
                    <ProductCard product={product} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
}
