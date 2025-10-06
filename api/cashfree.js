export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  const { amount, customer_name, customer_email, customer_phone } = req.body;

  try {
    const response = await fetch("https://sandbox.cashfree.com/pg/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-client-id": process.env.VITE_CASHFREE_APP_ID,
        "x-client-secret": process.env.VITE_CASHFREE_SECRET_KEY,
        "x-api-version": "2022-09-01",
      },
      body: JSON.stringify({
        order_amount: amount,
        order_currency: "INR",
        order_id: "order_" + Date.now(),
        customer_details: {
          customer_id: "cust_" + Date.now(),
          customer_name,
          customer_email,
          customer_phone,
        },
      }),
    });

    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    console.error("Cashfree API error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
