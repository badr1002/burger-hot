import CartIcon from "../CartIcon";
import React from "react";


const Foods = () =>{
    return(
        <tbody>
        {this.props.products.filter(c=>c.type = 'foods').map((a,key)=>{
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
export default Foods;