import { create } from "zustand";
import { toast } from "sonner";
type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () =>
    set((state: { bears: number }) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears: number) => set({ bears: newBears }),
}));

export const useCart = create((set) => {
  const loadCartItems = () => {
    const storedItems = localStorage.getItem("cartItems");
    return storedItems ? JSON.parse(storedItems) : [];
  };

  const saveCartItems = (items: CartItem[]) => {
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  const initialCartItems = loadCartItems();

  return {
    cartItems: initialCartItems,
    addToCart: (item: CartItem) =>
      set((state: { cartItems: CartItem[] }) => {
        const existingItem = state.cartItems.find((i) => i.id === item.id);
        if (existingItem) {
          toast.error("Item already in cart");
          return { cartItems: state.cartItems };
        }
        const newCartItems = [...state.cartItems, item];
        saveCartItems(newCartItems);
        return { cartItems: newCartItems };
      }),

    removeFromCart: (item: CartItem) =>
      set((state: { cartItems: CartItem[] }) => {
        const newCartItems = state.cartItems.filter((i) => i !== item);
        saveCartItems(newCartItems);
        return { cartItems: newCartItems };
      }),

    clearCart: () => {
      saveCartItems([]);
      set({ cartItems: [] });
    },

    increaseQuantity: (item: CartItem) =>
      set((state: { cartItems: CartItem[] }) => {
        const newCartItems = state.cartItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
        saveCartItems(newCartItems);
        return { cartItems: newCartItems };
      }),

    decreaseQuantity: (item: CartItem) =>
      set((state: { cartItems: CartItem[] }) => {
        const newCartItems = state.cartItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
        );
        saveCartItems(newCartItems);
        return { cartItems: newCartItems };
      }),

    removeAllItems: (item: CartItem) =>
      set((state: { cartItems: CartItem[] }) => {
        const newCartItems = state.cartItems.filter((i) => i !== item);
        saveCartItems(newCartItems);
        return { cartItems: newCartItems };
      }),

    getTotalPrice: () =>
      set((state: { cartItems: CartItem[] }) => {
        const totalPrice = state.cartItems.reduce(
          (acc, i) => acc + i.price * i.quantity,
          0
        );
        return { totalPrice };
      }),

    getTotalQuantity: () =>
      set((state: { cartItems: CartItem[] }) => {
        const totalQuantity = state.cartItems.reduce(
          (acc, i) => acc + i.quantity,
          0
        );
        return { totalQuantity };
      }),
  };
});
