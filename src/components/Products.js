import React from "react";

function Products({commentLabel, productImage, alternativeText, nameProduct, priceProduct}) {
    return(
        <article>
            <span>
                {commentLabel}
            </span>

            <img
                src={productImage}
                alt={alternativeText}
            />

            <p>
                {nameProduct}
            </p>

            <h4>
                {priceProduct}
            </h4>
        </article>

    )
}

export default Products;