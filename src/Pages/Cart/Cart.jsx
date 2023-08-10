import { useContext } from "react"
import Products from "../../Data/Products"
import Product from "../Shop/Product"
import { ShopContext } from "../../Context/ShopContext"

const Cart = () => {

    const {cartItems} = useContext(ShopContext)
    return(
        <>
        <h1>Your Cart Items</h1>
        <div className="row">
        {Products.map((p)=>{
            if(cartItems.some((i)=> i.id === p.id && i.count > 0 ))
            return <Product data={p}></Product>
       })}
        </div>
        </>
    )
}
export default Cart