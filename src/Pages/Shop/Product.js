import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
const Product = (props) => {
    const {id , productImage, productName, price } = props.data;

    const {cartItems,addToCart,removeFromCart} = useContext(ShopContext)
    const isInCart = cartItems.some((item) =>item.id === id )
    return (
        <div className="col-3 mb-4">
            <div className="card">
                <img src={productImage} alt={productName} className="card-img-top" />
                <div className="card-body">
                    <h5 className="text-dark">{productName}</h5>
                    <p className="card-text">Price : {price}$</p>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-info btn-sm mr-2" onClick={() => addToCart(id)} >+</button>
                        <span className="mx-1">{cartItems?.filter((row)=>row.id ===id)[0]?.count}</span>
                        {isInCart && <button className="btn btn-info btn-sm ml-2" onClick={() => removeFromCart(id)}>-</button>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
