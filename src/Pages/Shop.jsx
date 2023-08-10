import React from "react";
import Product from "./Shop/Product";
import ProductsData from "../Data/Products";

const Shop = () => {
    
    return (
        <React.Fragment>
        <h1 className="text-center mb-4">Shop</h1>
        <div className="row justify-content-center">
            {ProductsData.map((productData) => (
                <Product key={productData.id} data={productData} />
            ))}
        </div>
    </React.Fragment>
    
    );
};

export default Shop;
