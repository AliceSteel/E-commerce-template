import React, {useContext} from 'react'
import { CartContext } from '../../contexts/cart.context'

import './checkout.styles.scss'

const Ckeckout = () => {
const {cartItems, addItemToCart} = useContext(CartContext);

  return (
    <div>Ckeckout
        <div>
            { cartItems.map((item) => {
                const {id, name, qty} = item;
                return  <div key={id}>
                            <h2>{name }</h2>
                            <span>{qty}</span>
                            
                            <span>Decrement</span>
                            <br/>
                            <span onClick={()=> addItemToCart(item)}>Increment</span>
                        </div>
                
            }) }
        </div>
    </div>
  )
}

export default Ckeckout