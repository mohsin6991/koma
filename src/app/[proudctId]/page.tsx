
import React from "react";
function Product({ params }: { params: { productId: string } }) {
    return (
        <div className="product">
            <h1>
                Product {params.productId}
            </h1>
        </div>
    );
}

export default Product;