import React, {Component} from 'react';
import Background from "../img/chefs-bg.jpg";

class ShoppingCard extends Component {
    getClass = p =>{
        return p >0 ? 'badge badge-primary ml-3 mr-3' :  'badge badge-warning ml-3 mr-3';
    }
    total=0;
    saveHandler=()=>{
        this.props.history.replace('/menu');
    }
     sumHandler = ()=>{
        const arr= this.props.products.filter(a => a.isCarded ===true)
         return arr.length;
    }
    render() {
        if(this.sumHandler()>0)
            return (
                 <React.Fragment>
                     <div className='backgroundCart'>
                         <img src={Background} alt='...'/>
                     </div>
                     <div className='text-center cart'>
                         <h1 className=' m-3' style={{color:'#f6be15'}}>Shopping Card</h1>
                         <table className="table">
                             <thead className='thead-dark'>
                             <tr>
                                 <th scope="col">Name</th>
                                 <th scope="col">Price</th>
                                 <th scope="col">Count</th>
                                 <th scope="col">Shopping</th>
                             </tr>
                             </thead>
                             {this.props.products.map(a=>
                                 <tbody className='body-cart' key={a.id}>
                                 <tr>
                                     <td>
                                         <span className='badge badge-dark'>{a.name}</span>
                                     </td>
                                     <td>
                                         <span className='badge badge-secondary'> {a.price}$</span>
                                     </td>
                                     <td>
                                         <span className={this.getClass(a.count)}> {a.count}</span>
                                     </td>
                                         <td>
                                         <button onClick={()=>this.props.onIncrement(a)} className='btn btn-primary mr-1 btn-sm '>+</button>
                                             <button onClick={()=>this.props.onDecrement(a)} className='btn btn-danger mr-1 btn-sm '>-</button>
                                             <button onClick={()=>this.props.onDelete(a)} className='btn btn-danger   btn-sm'>
                                                 <i className="fas fa-trash"> </i>
                                             </button>    
                                     </td>
                                 </tr>
                                 </tbody>
                             )}
                         </table>
                         <button onClick={this.props.onReset} className='btn btn-warning'> Reset </button>
                         <button onClick={this.saveHandler} className='btn btn-success ml-5'> Save </button>
                     </div>
                 </React.Fragment>
             )
        else{
            return (
                 <React.Fragment>
                     <div className='container text-center' style={{padding:'170px'}}>
                         <div className="alert alert-danger m-3" role="alert">
                             Select any order!
                         </div>
                     </div>
                 </React.Fragment>
             )
         }
    }
}

export default ShoppingCard;