import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../utils/formatCurrency";
import { storeItmes } from "../data/storeItem";

type ShoppingCartProps = {
  isOpen: boolean
}
export function ShoppingCart({isOpen} : ShoppingCartProps) {
  const {closeCart , cartItems} = useShoppingCart();


  return ( 
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((elem) => (
            <CartItem key={elem.id} {...elem}/>
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total: {' '} { formatCurrency(cartItems.reduce((prevVal, cartItem) => {
              const item = storeItmes.find( el => el.id === cartItem.id)
              return prevVal + (item?.price || 0) * cartItem.quantity
            }, 0))}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
   );
}
