import { useContext,useState } from "react";

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const cartctx = useContext(CartContext);

  const totalAmount = `₹${cartctx.totalAmount.toFixed(2)}`;
  const hasItems = cartctx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartctx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartctx.addItem({ ...item, amount:1});
  };

  const orderHandler = () => {
    setIsClicked(true);
  }

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions =
    <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button} onClick={orderHandler} >Order</button>}
      </div>

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      { isClicked && <Checkout onCancel={props.onClose}/>}
      { !isClicked && modalActions}
      
    </Modal>
  );
};

export default Cart;
