import { NextRequest, NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const getActiveProducts = async () => {
  const checkProducts = await stripe.products.list({ active: true });
  const availableProducts = checkProducts.data.filter(
    (product: any) => product.active === true
  );
  return availableProducts;
};

export const POST = async (req: NextRequest) => {
  const { products } = await req.json();
  const data: Product[] = products;

  let activeProducts = await getActiveProducts();

  try {
    for (const product of data) {
      const stripeProduct = activeProducts?.find(
        (stripeProduct: any) =>
          stripeProduct?.name?.toLowerCase() === product?.name?.toLowerCase()
      );
      if (stripeProduct == undefined) {
        const newProduct = await stripe.products.create({
          name: product.name,
          default_price_data: {
            currency: "inr",
            unit_amount: product.price * 100,
          },
        });
      }
    }
  } catch (error) {
    console.error("Error in creating a product:", error);
    throw error;
  }

  activeProducts = await getActiveProducts();
  let stripeItems: any = [];

  for (const product of data) {
    const stripeProduct = activeProducts?.find(
      (stripeProduct: any) =>
        stripeProduct?.name?.toLowerCase() === product?.name?.toLowerCase()
    );
   
    if(stripeProduct){
        stripeItems.push({
            price_data: {
              currency: "inr",
              product: stripeProduct.id,
              unit_amount: product.price * 100,
            },
            quantity: product.quantity,
          });
    }
  }

    const session = await stripe.checkout.sessions.create({
        // payment_method_types: ["card"],
        line_items: stripeItems,
        mode: "payment",
        success_url: process.env.STRIPE_SUCCESS_URL || "http://localhost:3000/success",
        cancel_url: process.env.STRIPE_CANCEL_URL || "http://localhost:3000/cancel",
    });

  return NextResponse.json({ url: session.url});
};
