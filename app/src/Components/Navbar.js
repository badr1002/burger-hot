import React, {Component} from 'react';
import {Link, NavLink, Route, Switch} from "react-router-dom";



export  const  LoginHandler = props=>{
    if(!props.isLogin){
        return (
            <React.Fragment>
                <i className="fas fa-user"/><br/>
             <Link to="/auth" >Login/Register</Link>
             </React.Fragment>
        ) 
    }else{
        return (
            <React.Fragment>
                <Link to={`/user/${props.user.id}/settings`}>
                   <i className="fas fa-user"/>  {`${props.user.firstname}`}
                </Link>
                 <button className='btn btn-danger btn-sm ml-2' onClick={props.logout}>
                      <i className="fas fa-sign-out-alt" />
                 </button>     
            </React.Fragment>
            
        )
    }
     
  }
  export  const  AdminHandler = props=>{
      if (props.user.isadmin) {
        return(
            <li className='nav-item'>
              <NavLink className="nav-link " to="/admin">Admin</NavLink>
            </li>
        ) 
      }
    return null;
  }


class Navbar extends Component {
    state={
        searchItem:''
    }
    stateHandler = e => {
        let state = {...this.state}
        state[e.currentTarget.name]=e.currentTarget.value;
        this.setState(state);
    }
    submitHandler=()=>{
        this.props.onSearch(this.state.searchItem)
    }

  sumHandler = ()=>{
    const arr= this.props.products.filter(a => a.isCarded ===true)
    return arr.length;
  }

 

  
    render() {
        return (
            <React.Fragment>
                     <div className='head' >
                         <nav className="navbar  navbar-expand-lg navbar fixed-top  navbar navbar-dark">
                       <div className='brand'>
                         <h1 className="brand me-auto">
                            <NavLink to="/home">
                                Delicious
                            </NavLink>
                        </h1>
                       </div>
                       <div className="collapse navbar-collapse"  id="navbarSupportedContent">
                          <ul className="navbar-nav m-auto  me-auto mb-2 mb-lg-0">
                               <li className='nav-item'>
                                    <NavLink className="nav-link " to="/menu">Menu</NavLink>
                               </li>
                               <li className='nav-item'>
                                    <NavLink className="nav-link " to="/about">About Us</NavLink>
                               </li>
                              <li className='nav-item'>
                                    <NavLink className="nav-link " to="/contact">Contact</NavLink>
                               </li>
                               <Switch>
                               <Route path='/' render={props=>(
                                  <AdminHandler
                                        user={this.props.user}
                                  />
                               )}/>
                              </Switch>
                           </ul>
                            <form className="d-flex mb-1">
                                <input className="form-control me-2 mr-2"
                                       name='searchItem'
                                       value={this.state.searchItem}
                                       onChange={this.stateHandler}
                                       type="search"
                                       placeholder="Search"
                                       aria-label="Search"
                                />
                            <Link
                                to={`/products/search/${this.state.searchItem}`}
                                className="btn btn-outline-success"
                                onClick={this.submitHandler} >Search</Link>
                            </form>

                       
                            
                       <span className="nav-link Registration-icon text-center" >
                           <Switch>
                               <Route path='/' render={props=>(
                                  <LoginHandler
                                        isLogin={this.props.isLogin}
                                        user={this.props.user}
                                        logout={this.props.logout}
                                  />
                               )}/>
                           </Switch>
                         </span>
                </div>
                
                <NavLink className="nav-link Shopping-cart-icon" to="/card">
                          <i style={{color:"#424040",fontWeight:"bold"}} className="fas fa-shopping-cart"/>
                          <span style={{color:"#870505"}}>
                            {this.sumHandler()}
                          </span>
                            </NavLink>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                       </button>
                     </nav>
                     </div>
            </React.Fragment>
        );
    }
}

export default Navbar;