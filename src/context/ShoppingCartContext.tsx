import { createContext } from "react"
import { CartItemType } from "./provider/ShoppingCartProvider";

interface ShoppingCartContextType  {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuntity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFormCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItemType[];

}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType);