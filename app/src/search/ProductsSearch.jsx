import React, {Component} from "react";
import Background from "../img/chefs-bg.jpg";



class ProductsSearch extends Component {
    render(){
         if(this.props.products !== 0)
         return(
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
                             <div className='col'>
                                 <table className="table text-center">
                                     <thead>
                                     <tr className='badge-primary'>
                                         <th>Products Search</th>
                                     </tr>
                                     </thead>
                                     <tbody>
                                     {this.props.products.map((a,key)=>{
                                         return(
                                             <tr key={key} className='menuData'>
                                                 <td className='name'>{a.name}</td>
                                                 <td className='price'>{a.price}$</td>
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
    )
       else{
           return (
               <React.Fragment>
                   <div className='container text-center' style={{padding:'170px'}}>
                       <div className="alert alert-danger m-3" role="alert">
                           This product not found!
                       </div>
                   </div>
               </React.Fragment>
           )
     }
    }
}
export default ProductsSearch;