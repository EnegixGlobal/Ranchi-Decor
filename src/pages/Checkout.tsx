"use client";

import { useCart } from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { toast } from "sonner";

export default function Checkout() {
  const { items, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  // 🧾 If cart is empty
  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <ShoppingBag className="w-20 h-20 mx-auto mb-4 text-gray-400" />
          <h1 className="text-2xl font-bold mb-4 text-gray-800">
            Your cart is empty
          </h1>
          <Link to="/shop">
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // 💰 Handle Cashfree Payment
  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      const totalAmount = getTotalPrice();

      // ✅ Call your backend to get Cashfree payment session ID
      const res = await fetch("/api/cashfree", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: totalAmount,
          customer_name: "Test User",
          customer_email: "test@example.com",
          customer_phone: "9876543210",
        }),
      });

      const data = await res.json();

      if (!data?.payment_session_id) {
        toast.error("Failed to initiate payment. Try again.");
        return;
      }

      // ✅ Load Cashfree SDK
      const script = document.createElement("script");
      script.src = "https://sdk.cashfree.com/js/v3/cashfree.js";
      script.async = true;
      script.onload = async () => {
        const cashfree = await (window as any).Cashfree({
          mode: "sandbox", // Change to "production" after go-live
        });

        cashfree.checkout({
          paymentSessionId: data.payment_session_id,
          redirectTarget: "_self",
        });
      };
      document.body.appendChild(script);
    } catch (error) {
      console.error("Payment Error:", error);
      toast.error("Something went wrong during payment!");
    }
  };

  return (
    <div className="min-h-screen py-10 bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
          Checkout
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* 🧾 Checkout Form */}
          <div className="lg:col-span-2">
            <Card className="p-6 rounded-2xl border border-gray-100 shadow-sm bg-white">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Shipping Information
              </h2>

              <form onSubmit={handlePayment} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" required className="mt-1" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="address1">Address Line 1</Label>
                  <Input id="address1" required className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="address2">Address Line 2 (Optional)</Label>
                  <Input id="address2" className="mt-1" />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input id="state" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="pincode">Pincode</Label>
                    <Input id="pincode" required className="mt-1" />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all"
                  size="lg"
                >
                  Pay Now
                </Button>
              </form>
            </Card>
          </div>

          {/* 🧾 Order Summary */}
          <div>
            <Card className="p-6 sticky top-20 rounded-2xl border border-gray-100 shadow-sm bg-white">
              <h2 className="text-xl font-bold mb-4 text-gray-900">
                Order Summary
              </h2>

              <div className="space-y-3 mb-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between text-sm text-gray-800"
                  >
                    <span className="text-gray-500">
                      {item.title} × {item.quantity}
                    </span>
                    <span className="font-semibold">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))}

                <div className="border-t pt-3">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Subtotal</span>
                    <span className="font-semibold text-gray-800">
                      ₹{getTotalPrice().toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-gray-500">Shipping</span>
                    <span className="font-semibold text-gray-800">Free</span>
                  </div>
                </div>

                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg">
                    <span className="font-bold text-gray-900">Total</span>
                    <span className="font-bold text-red-600">
                      ₹{getTotalPrice().toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
