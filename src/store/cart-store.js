import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],
  cartItemQuantity: {},
  totalAmount: 0,
  addToCart: (product) =>
    set((state) => {
      const updatedTotalCartCost = state.totalAmount + product.price;
      const exists = state.cart.some((cartItem) => cartItem.id === product.id);
      if (!exists) {
        return {
          cart: [...state.cart, { ...product, quantity: 1 }],
          cartItemQuantity: { ...state.cartItemQuantity, [product.id]: 1 },
          totalAmount: updatedTotalCartCost,
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
          totalAmount: updatedTotalCartCost,
        };
      }
    }),
  removeFromCart: (product) =>
    set((state) => {
      const updatedTotalCartCost = state.totalAmount - product.price;
      const productsInCart = [...state.cart];
      const cartItemQuantity =
        state.cart.length === 0
          ? 0
          : productsInCart.find((cartItem) => cartItem.id === product.id)
              .quantity;
      if (cartItemQuantity === 0) {
        return state;
      } else if (cartItemQuantity === 1) {
        const modifiedCart = productsInCart.filter(
          (cartItem) => cartItem.id !== product.id
        );
        return {
          cart: [...modifiedCart],
          cartItemQuantity: { ...state.cartItemQuantity, [product.id]: 0 },
          totalAmount: updatedTotalCartCost,
        };
      } else {
        const existingProduct = productsInCart?.find(
          (cartItem) => cartItem.id === product.id
        );
        const modifiedExistingProduct = {
          ...existingProduct,
          quantity: existingProduct.quantity - 1,
        };
        const modifiedCart = productsInCart.filter(
          (cartItem) => cartItem.id !== product.id
        );
        modifiedCart.push(modifiedExistingProduct);
        return {
          cart: [...modifiedCart],
          cartItemQuantity: {
            ...state.cartItemQuantity,
            [product.id]: state.cartItemQuantity[product.id] - 1,
          },
          totalAmount: updatedTotalCartCost,
        };
      }
    }),
  clearCart: () => set({ cart: [], cartItemQuantity: {}, totalAmount: 0 }),
}));
