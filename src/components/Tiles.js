import React from "react";

function Tiles({visuals, alternativeText, title, description}) {
    return(
        <section>
            <img
                src={visuals}
                alt={alternativeText}
            />

            <h2>
                {title}
            </h2>

            <p>
                {description}
            </p>
        </section>


    )
}

export default Tiles;