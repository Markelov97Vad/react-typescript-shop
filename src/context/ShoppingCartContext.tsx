import { createContext } from "react"

interface ShoppingCartContextType  {
  getItemQuantity: (id: number) => number;
  increaseCartQuntity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFormCart: (id: number) => void;
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType);