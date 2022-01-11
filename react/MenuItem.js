import React from "react";

const MenuItem = (props) => {
console.log({...props});
    return (
        <div>
            {props.children}           
        </div>
    )
}

export default MenuItem;