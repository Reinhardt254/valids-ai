import { useCart } from "@/lib/store";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const { user } = useAuth();

  const navigate = useNavigate();

  //   const totalPrice = getTotalPrice();
  //const totalQuantity = getTotalQuantity();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleClearCart = () => {
    if (!cartItems || cartItems.length === 0) {
      toast.error("Cart is empty");
      return;
    }

    try {
      clearCart();
      toast.success("Cart cleared");
      window.location.reload();
    } catch (error) {
      console.error(error);
      toast.error("Failed to clear cart");
    }
  };

  const handleRemoveFromCart = (item: CartItem) => {
    removeFromCart(item);
    toast.success("Item removed from cart");
    window.location.reload();
  };

  const handleCheckout = async () => {
    if (!user) {
      toast.error("Please login to clear cart");
      navigate("/login");
      return;
    }

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        body: JSON.stringify({ cartItems }),
      });
      if (!response.ok) {
        throw new Error("Failed to checkout");
      }
      toast.success("Checkout successful");
    } catch (error) {
      console.error(error);
      toast.error("Failed to checkout");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 flex justify-center items-center">
      <Toaster />
      <div className="flex flex-col gap-4 justify-between items-start mb-8 w-3xl">
        <h1 className="text-2xl font-bold">Cart</h1>
        <button
          onClick={handleClearCart}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Clear Cart
        </button>
        <div className="flex flex-col gap-4">
          {cartItems.map((item: CartItem) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-sm"
                />

                <div>
                  <h3 className="text-lg font-medium">{item.name}</h3>
                  <p className="text-gray-500">Quantity: {item.quantity}</p>
                  <p className="text-gray-500">Price: ${item.price}</p>
                </div>
              </div>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={() => handleRemoveFromCart(item)}
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center">
            <p className="text-gray-600">Total Price: ${totalPrice}</p>
            <p className="text-gray-600">Total Quantity: {totalQuantity}</p>
          </div>

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
