import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const exists = state.cart.some((cartItem) => cartItem.id === product.id);
      if (!exists) {
        return { cart: [...state.cart, { ...product, quantity: 1 }] };
      } else {
        const productsInCart = [...state.cart];
        const existingProduct = productsInCart.find(
          (cartItem) => cartItem.id === product.id
        );
        const modifiedExistingProduct = {
          ...existingProduct,
          quantity: existingProduct.quantity + 1,
        };
        const modifiedCart = productsInCart.filter(
          (cartItem) => cartItem.id !== product.id
        );
        modifiedCart.push(modifiedExistingProduct);
        return { cart: [...modifiedCart] };
      }
    }),
  removeFromCart: (productId) =>
    set((state) => {
      const productsInCart = [...state.cart];
      const cartItemQuanity =
        productsInCart.find((cartItem) => cartItem.id === productId).quantity ??
        0;
      if (cartItemQuanity === 0) {
        return { cart: [...productsInCart] };
      } else if (cartItemQuanity === 1) {
        const modifiedCart = productsInCart.filter(
          (cartItem) => cartItem.id !== productId
        );
        return { cart: [...modifiedCart] };
      } else {
        const existingProduct = productsInCart?.find(
          (cartItem) => cartItem.id === productId
        );
        const modifiedExistingProduct = {
          ...existingProduct,
          quantity: existingProduct.quantity - 1,
        };
        const modifiedCart = productsInCart.filter(
          (cartItem) => cartItem.id !== productId
        );
        modifiedCart.push(modifiedExistingProduct);
        return { cart: [...modifiedCart] };
      }
    }),
  clearCart: () => set({ cart: [] }),
}));
