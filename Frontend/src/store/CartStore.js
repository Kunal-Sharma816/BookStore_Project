import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [],
  totalPrice: 0,
  
  addToCart: (id, name, price, image, category, title) => set((state) => {
    const existingItem = state.cart.find((item) => item.id === id);
    if (existingItem) {
      return {
        cart: state.cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ),
        totalPrice: state.totalPrice + price,
      };
    } else {
      return {
        cart: [...state.cart, { id, name, price, image, category, title, quantity: 1 }],
        totalPrice: state.totalPrice + price,
      };
    }
  }),

  removeFromCart: (id) => set((state) => {
    const itemToRemove = state.cart.find((item) => item.id === id);
    if (!itemToRemove) return state;

    if (itemToRemove.quantity === 1) {
      return {
        cart: state.cart.filter((item) => item.id !== id),
        totalPrice: state.totalPrice - itemToRemove.price,
      };
    } else {
      return {
        cart: state.cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        ),
        totalPrice: state.totalPrice - itemToRemove.price,
      };
    }
  }),
}));

export default useCartStore;
