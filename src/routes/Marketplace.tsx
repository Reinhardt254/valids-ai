import { useNavigate } from "react-router-dom";
import { products } from "../lib/dummyData";
import { useCart } from "@/lib/store";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export function Marketplace() {
  const navigate = useNavigate();

  const { addToCart, cartItems } = useCart();

  const handleAddToCart = (product: Product) => {
   try {
    const existingItem = cartItems.find((i) => i.id === product.id);
    if (existingItem) {
      toast.error("Item already in cart");
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,   
      quantity: 1,
      image: product.image,
    });
    toast.success("Product added to cart");
   } catch (error) {
    toast.error("Failed to add product to cart");
    console.error(error);
   }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Toaster />
      <h1 className="text-2xl font-bold mb-4">Marketplace</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg p-4 cursor-pointer"
            >
            <div onClick={() => navigate(`/product/${product.id}`)} className="flex flex-col gap-1">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2">${product.price}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  Rating: {product.rating}
                </span>
              </div>
            </div>

            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
