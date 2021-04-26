import CartIcon from "../CartIcon";
import React from "react";


const ShowAll = props =>{
    return(
        <div className="row menu-container">
            <table className="table">

                <tbody>
                {props.products.map((a,key)=>{
                    return(
                        <tr key={key} className='menuData'>
                        <td className='name'>{a.name}</td>
                        <td className='price'>{a.price}$</td>
                        <td className='select'>
                            <CartIcon
                                product={a}
                                onClick={props.onClick}
                            />
                        </td>
                    </tr>
                    )
                }
                )}
                </tbody>
            </table>
        </div>
    )
}
export default ShowAll;