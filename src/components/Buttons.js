import React from "react";

function Buttons({children, isDisabled, clickHandler}) {
    return(
        <button
            type="button"
            disabled={isDisabled}
            onClick={clickHandler}
        >
            {children}

        </button>

    )

}

export default Buttons;