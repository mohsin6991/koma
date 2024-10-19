import React from "react";
function revewDetiles(params:{
    revewId: number;
    productId: string;
}){
    return(
        <h1>revew Id {params.revewId} with product Named {params.productId}</h1>
    )
}
export default revewDetiles;