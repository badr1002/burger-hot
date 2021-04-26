import CartIcon from "../CartIcon";
import React from "react";


const Drinks = () =>{
    return(
        <tbody>
        {this.props.products.filter(c=>c.type = 'drinks').map((a,key)=>{
            return(
                <tr key={key} className='menuData'>
                    <td className='name'>{a.name}</td>
                    <td className='price'>{a.price}$</td>
                    <td className='select'>
                        <CartIcon
                            product={a}
                            onClick={this.props.onClick}
                        />
                    </td>
                </tr>
           )
        }
        )}
        </tbody>
    )
}
export default Drinks;