
import React from "react";
function ProductDetiles({ params }: { params: { productId: string } }) {
    return (
        <div className="product">
            <h1>
                Product {params.productId}
            </h1>
        </div>
    );
}

export default ProductDetiles;