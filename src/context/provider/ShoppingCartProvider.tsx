import { ReactNode, useState } from "react";
import { ShoppingCartContext } from "../ShoppingCartContext";
import { ShoppingCart } from "../../components/ShoppingCart";

type ShoppingCardProviderProps = {
  children: ReactNode
}

export type CartItemType = {
  id: number;
  quantity: number
}

export function ShoppingCartProvider( { children }: ShoppingCardProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const cartQuantity = cartItems.reduce(
    ( prevVal, item) => item.quantity +  prevVal,
     0
  )

  const getItemQuantity = (id: number) => {
    // если значение соответствует, то вернуть найденное количество или вернуть 0
    console.log(id);
    
    return cartItems.find(item => item.id === id)?.quantity || 0
  }
  // добавление элементов в корзину
  const increaseCartQuntity  = (id: number) => {
    setCartItems(currentItems => {
      // если товара еще нет, добавить его в корзину
      if (currentItems.find(item => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1}]
      } else {
        return currentItems.map(item => {
          // если товар уже есть, то увеличить на один
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1}
          } else {
            return item
          }
        })
      }
    })
  }
  // уменьшение элементов в карзине
  const decreaseCartQuantity = (id: number) => {
    setCartItems(currentItems => {
      // если товара уже есть, то удалить его
      if (currentItems.find(item => item.id === id)?.quantity === 1) {
        return currentItems.filter(item => item.id !== id)
      } else {
        return currentItems.map(item => {
          // если товар уже есть, то уменьшить на один
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1}
          } else {
            return item
          }
        })
      }
    })
  }
  // удаление элементов из карзины
  const removeFormCart = (id: number) => {
    setCartItems(currentItems => {
      return currentItems.filter(item => item.id !== id)
    })
  }
  const openCart = () => {
    setIsOpen(true)
  }
  const closeCart = () => {
    setIsOpen(false)
  }

  return (
    <ShoppingCartContext.Provider value={{
      openCart,
      closeCart,
      getItemQuantity,
      increaseCartQuntity,
      decreaseCartQuantity,
      removeFormCart,
      cartItems, 
      cartQuantity
      }}>
      {children}
      <ShoppingCart isOpen={isOpen}/>
    </ShoppingCartContext.Provider>
  )
}