import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],
  cartItemQuantity: {},
  addToCart: (product) =>
    set((state) => {
      const exists = state.cart.some((cartItem) => cartItem.id === product.id);
      if (!exists) {
        return {
          cart: [...state.cart, { ...product, quantity: 1 }],
          cartItemQuantity: { ...state.cartItemQuantity, [product.id]: 1 },
        };
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
        return {
          cart: [...modifiedCart],
          cartItemQuantity: {
            ...state.cartItemQuantity,
            [product.id]: state.cartItemQuantity[product.id] + 1,
          },
        };
      }
    }),
  removeFromCart: (productId) =>
    set((state) => {
      const productsInCart = [...state.cart];
      const cartItemQuantity = productsInCart.find(
        (cartItem) => cartItem.id === productId
      ).quantity;

      if (cartItemQuantity === 1) {
        const modifiedCart = productsInCart.filter(
          (cartItem) => cartItem.id !== productId
        );
        return {
          cart: [...modifiedCart],
          cartItemQuantity: { ...state.cartItemQuantity, [productId]: 0 },
        };
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
        return {
          cart: [...modifiedCart],
          cartItemQuantity: {
            ...state.cartItemQuantity,
            [productId]: state.cartItemQuantity[productId] - 1,
          },
        };
      }
    }),
  clearCart: () => set({ cart: [], cartItemQuantity: {} }),
}));
