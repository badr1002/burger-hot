import React from 'react';

const CartIcon = props=>{
    props.product.iscarded===false ? props.product.iscarded=true : props.product.iscarded=false;
    const style =  !props.product.isCarded ?{color:'#f6f6f6',cursor:"pointer"} :{color:'#f19409',cursor:"pointer"}
    return(
        <>
             <i
             style={style}
             onClick={() => props.onClick(props.product)}
             className="fas fa-shopping-cart"
         />
        </>
    )
}

export default CartIcon;