import React, {Component} from 'react';
import CartIcon from "../Shopping/CartIcon";
import Background from '../img/chefs-bg.jpg';


class Menu extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='backgroundMenu'>
                    <img src={Background} alt='...'/>
                </div>
                <section id="menu" className="menu">
                    <div className="container">
                        <div className="section-title" >
                            <h1 style={{color:'#f6be15'}}>Check our tasty Menu</h1>
                        </div>

                       <div className='row'>
                            <div className='col-lg-6'>
                            <table className="table text-center">
                                <thead>
                                 <tr className='badge-primary'><th>Foods</th></tr>
                                </thead>
                                <tbody>
                                {this.props.products.filter(c=>c.type==='foods' && c.name!=='Salad').map((a,key)=>{
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
                            </table>
                        </div>

                        <div className='col-lg-6'>
                            <table className="table text-center">
                                <thead>
                                     <tr className='badge-warning'><th>Drinks</th></tr>
                                </thead>
                                <tbody>
                                {this.props.products.filter(c=>c.type==='drinks').map((a,key)=>{
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
                            </table>
                        </div>


                         <div className='col-lg-6'>
                            <table className="table text-center">
                                <thead>
                                 <tr className='badge-success'><th>Salad</th></tr>
                                </thead>
                                <tbody>
                                {this.props.products.filter(c=>c.type=== 'salad').map((a,key)=>{
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
                            </table>
                        </div>

                         <div className='col-lg-6'>
                            <table className="table text-center">
                                <thead>
                                <tr className='badge-danger'><th>Sweets</th></tr>
                                </thead>
                                <tbody>
                                {this.props.products.filter(c=>c.type==='sweets').map((a,key)=>{
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
                            </table>
                        </div>
                       </div>
                    </div>
                </section>
           </React.Fragment>
        );
    }
}

export default Menu;