import {useContext} from "react"
import Products from "../../Data/Products"
import Product from "../Shop/Product"
import { ShopContext } from "../../Components/ShopContxet"

const Cart = () => {

    const {cartItems,Reset} = useContext(ShopContext)
    return (
        <>
            <h1>Your Cart Items</h1>
            <div className="row">
                {Products.map((p)=>{
                    if (cartItems?.some((i) => i.id ===p.id && i.count > 0))
                        return <Product data={p}></Product>
                })}
            </div>
            <button className="btn btn-warning m-3 center" onClick={Reset}>Reset </button>
        </>
    )
}
export default Cart