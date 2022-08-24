import React from 'react'
import {ConsumerContext} from './context'
import CartItem from './cartItem'

const Cartlist = ({value})=> {
    
    
    const {cart} = value
    console.log(cart)
        // console.log(cart)
        return (
            cart.map(item=>{
                return (
                    <div className=''>
                    <CartItem key = {item.id} items = {item} value = {value}/>
                   
                    </div>
                    )
                })
                )
            
        
  
}
export default Cartlist