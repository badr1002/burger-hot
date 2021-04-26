import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Background from "../img/chefs-bg.jpg";



class Admin extends Component {


    render() {
        return (
            <React.Fragment>
                <div className='backgroundMenu'>
                    <img src={Background} alt='...'/>
                </div>
                <div className='container text-center admin'>
                    <div className="col">
                        <h1 style={{color:'#f6be15'}}>Admin</h1>
                    </div>
                    <div className="col row">
                        <div className="col">
                             <Link  to='/product/add'>
                                 <button className='btn btn-primary mb-3'>Add</button>
                             </Link>
                        </div>
                    </div>
                    <div className="col">
                         <h3 className='badge-secondary'>Foods</h3>
                         <table className="table  text-center ">
                             <thead className='thead-dark'>
                             <tr>
                                 <th scope="col">Name</th>
                                 <th scope="col">Price</th>
                                 <th scope="col">Edit</th>
                                 <th scope="col">Remove</th>
                             </tr>
                             </thead>
                             <tbody style={{backgroundColor:'rgba(0,0,0,0.7)'}} >
                             {this.props.products.filter(c=>c.type==='foods' ).map((a,key)=>{
                                 return(
                                     <tr key={key}>
                                         <td>
                                             <span className='badge badge-dark'>{a.name}</span>
                                         </td>
                                         <td>
                                             <span className='badge badge-secondary'> {a.price}$</span>
                                         </td>
                                         <td>
                                             <Link to={`product/edit/${a.id}`}>
                                                 <i className="fas fa-edit"/>
                                             </Link>
                                         </td>
                                         <td>
                                             <span onClick={() => this.props.onDelete(a.id)}>
                                                 <i className="fas fa-trash" style={{cursor:"pointer",color:'#ea2525'}}/>
                                             </span>
                                         </td>
                                     </tr>
                                 )
                             }
                             )}
                             </tbody>
                         </table>
                    </div>
                    <div className="col">
                         <h3 className='badge-warning'>drinks</h3>
                        <table className="table  text-center ">
                             <thead className='thead-dark'>
                             <tr>
                                 <th scope="col">Name</th>
                                 <th scope="col">Price</th>
                                 <th scope="col">Edit</th>
                                 <th scope="col">Remove</th>
                             </tr>
                             </thead>
                             <tbody style={{backgroundColor:'rgba(0,0,0,0.7)'}} >
                             {this.props.products.filter(c=>c.type==='drinks' ).map((a,key)=>{
                                 return(
                                     <tr key={key}>
                                         <td>
                                             <span className='badge badge-dark'>{a.name}</span>
                                         </td>
                                         <td>
                                             <span className='badge badge-secondary'> {a.price}$</span>
                                         </td>
                                         <td>
                                             <Link to={`product/edit/${a.id}`}>
                                                 <i className="fas fa-edit"/>
                                             </Link>
                                         </td>
                                         <td>
                                             <span onClick={() => this.props.onDelete(a.id)}>
                                                 <i className="fas fa-trash" style={{cursor:"pointer",color:'#ea2525'}}/>
                                             </span>
                                         </td>
                                     </tr>
                                 )
                             }
                             )}
                             </tbody>
                         </table>
                    </div>
                    <div className="col">
                         <h3 className='badge-danger'>Sweets</h3>
                        <table className="table  text-center ">
                             <thead className='thead-dark'>
                             <tr>
                                 <th scope="col">Name</th>
                                 <th scope="col">Price</th>
                                 <th scope="col">Edit</th>
                                 <th scope="col">Remove</th>
                             </tr>
                             </thead>
                             <tbody style={{backgroundColor:'rgba(0,0,0,0.7)'}} >
                             {this.props.products.filter(c=>c.type==='sweets' ).map((a,key)=>{
                                 return(
                                     <tr key={key}>
                                         <td>
                                             <span className='badge badge-dark'>{a.name}</span>
                                         </td>
                                         <td>
                                             <span className='badge badge-secondary'> {a.price}$</span>
                                         </td>
                                         <td>
                                             <Link to={`product/edit/${a.id}`}>
                                                 <i className="fas fa-edit"/>
                                             </Link>
                                         </td>
                                         <td>
                                             <span onClick={() => this.props.onDelete(a.id)}>
                                                 <i className="fas fa-trash" style={{cursor:"pointer",color:'#ea2525'}}/>
                                             </span>
                                         </td>
                                     </tr>
                                 )
                             }
                             )}
                             </tbody>
                         </table>
                    </div>
                    <div className="col">
                         <h3 className='badge-success'>Salad</h3>
                        <table className="table  text-center ">
                             <thead className='thead-dark'>
                             <tr>
                                 <th scope="col">Name</th>
                                 <th scope="col">Price</th>
                                 <th scope="col">Edit</th>
                                 <th scope="col">Remove</th>
                             </tr>
                             </thead>
                             <tbody style={{backgroundColor:'rgba(0,0,0,0.7)'}} >
                             {this.props.products.filter(c=>c.type === 'salad' ).map((a,key)=>{
                                 return(
                                     <tr key={key}>
                                         <td>
                                             <span className='badge badge-dark'>{a.name}</span>
                                         </td>
                                         <td>
                                             <span className='badge badge-secondary'> {a.price}$</span>
                                         </td>
                                         <td>
                                             <Link to={`product/edit/${a.id}`}>
                                                 <i className="fas fa-edit"/>
                                             </Link>
                                         </td>
                                         <td>
                                             <span onClick={() => this.props.onDelete(a.id)}>
                                                 <i className="fas fa-trash" style={{cursor:"pointer",color:'#ea2525'}}/>
                                             </span>
                                         </td>
                                     </tr>
                                 )
                             }
                             )}
                             </tbody>
                         </table>
                    </div>


                </div>
           </React.Fragment>
        );
    }
}

export default Admin;