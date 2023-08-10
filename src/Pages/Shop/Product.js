import React from "react";

const Product = (props) => {
    const { productImage, productName, price } = props.data;

    return (
        <div className="col-3 mb-4">
            <div className="card">
                <img src={productImage} alt={productName} className="card-img-top" />
                <div className="card-body">
                    <h5 className="text-dark">{productName}</h5>
                    <p className="card-text">Price : {price}$</p>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-info btn-sm mr-2">+</button>
                        <span className="mx-1">0</span>
                        <button className="btn btn-info btn-sm ml-2">-</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
