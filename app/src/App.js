import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import ShoppingCard from './Shopping/ShoppingCard';
import Menu from "./Pages/Menu";
import Admin from "./Pages/Admin";
import Auth from "./Authentication/Auth";
import Profile from './Authentication/Profile'
import EditProduct from "./Shopping/EditProduct";
import AddProduct from "./Shopping/AddProduct";
import ProductsSearch from './search/ProductsSearch';
import Navbar from './Components/Navbar';
import Footer from "./Components/Footer";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Cookies from 'universal-cookie';


class App extends Component {
    state={
        Products:[],
        is_visible: false,
        ProductsSearch:[],
        isRegisted:false,
        isLogin:false,
        user:[]
    }

    cookies = new Cookies();
    toast=toast;
    style;
    constructor(props) {
        super(props);
        this.cookies.get('login') && this.loginHandler(this.cookies.get('login').email, this.cookies.get('login').password);
        this.componentDidMount=()=>{
             fetch('/products',{
                 method: 'GET',
                 headers: {
                     'Content-Type': 'application/json',
                     'Accept': 'application/json'
                 }
             }).then(res => res.json()).then(data => {this.setState({ Products: data })});
         }

         window.onscroll = () => {
             if (window.pageYOffset > 300)
                this.setState({is_visible: true});
            else
                this.setState({is_visible: false});
            if(!this.state.is_visible)
                this.style = {display:'none'}
            else
                this.style = {display:"block",zIndex:999,transaction:'1.5s'}
        }
        if(!this.state.is_visible)
            this.style = { display: 'none' }
        
    }

    goUpHandler = e =>{
        e.preventDefault();
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
    }
    sum=0;
    IncrementHandler = product =>{
        //clone array
        const Products=[...this.state.Products];
        // het index
        const index=Products.indexOf(product);
        //clone object
        Products[index]={...Products[index]};
        //edit
        Products[index].count++;
        //setState
        this.setState({Products});
    }

    DecrementHandler= product =>{
       const Products=[...this.state.Products];
       const index =Products.indexOf(product);
       Products[index]={...Products[index]};
       if(Products[index].count > 1){
           Products[index].count--;
           this.setState({Products});
       }
    }

    deleteHandler =p=>{
      const Products=[...this.state.Products];
      const index=Products.indexOf(p);
      Products[index]={...Products[index]};
      Products[index].isCarded=false;
      this.setState({Products});
    }

    resetHandler=()=>{
        let Products=[...this.state.Products.filter(c=>c.isCarded===true)];
        Products.map(a=>{
            a.count=1;
            return a;
        });
      this.setState({Products})
    }

    isCartChangeHandler=product=>{
       const Products=[...this.state.Products];
       const index=Products.indexOf(product);
       Products[index]={...Products[index]};
       Products[index].isCarded = !Products[index].isCarded;
       Products[index] ? Products[index].count=1 : Products[index].count = 0;
       this.setState({Products});
    }

    addProductHandler= async (name,price,type)=>{
        try{
             await fetch('/add',{
                method: 'POST',
                headers: {
                     'Content-Type': 'application/json',
                     'Accept': 'application/json'
                 },
                body: JSON.stringify({
                    "name":name,
                    "price":price,
                    "type":type
                })
             })
             fetch('/products',{
                 method: 'GET',
                 headers: {
                     'Content-Type': 'application/json',
                     'Accept': 'application/json'
                 }
         }).then(res=>res.json()).then(data=>  this.setState({Products:data}));
        } catch(err) {console.log('ERROR:  '+ err)}
    }

    deleteProductHandler= async id=>{
        try{
            const state=[...this.state.Products];
            const newState = state.filter(c=>c.id !== id);
            this.setState({Products:newState});

            await fetch('/delete',{
             method: 'DELETE',
             headers: {
                     'Content-Type': 'application/json',
                     'Accept': 'application/json'
                 },
             body: JSON.stringify({
                 "id":id
             })});
       }
       catch(err) {console.log('ERROR:  '+ err)}
    }

    editProductHandler= async (id,name,price)=>{
        try{
             await fetch('/edit',{
                method: 'PATCH',
                headers: {
                     'Content-Type': 'application/json',
                     'Accept': 'application/json'
                 },
                body: JSON.stringify({
                    "id":id,
                    "name":name,
                    "price":price
                })
             })
            fetch('/products',{
                method: 'GET',
                headers: {
                     'Content-Type': 'application/json',
                     'Accept': 'application/json'
                 }
         }).then(res=>res.json()).then(data=>  this.setState({Products:data}));
        } catch(err) {console.log('ERROR:  '+ err)}
    }
    searchHandler = async search_term =>{
       try{
             await fetch(`/search/${search_term}`, {
                 method: 'GET',
                 headers: {
                     'Content-Type': 'application/json',
                     'Accept': 'application/json'
                 }
                 }).then(res=>res.json())
                 .then(data=> {
                     if(data.length===0)
                         this.setState({ProductsSearch:0})
                     else
                         this.setState({ProductsSearch:data});
                 });
       } catch(err) {console.log('ERROR:  '+ err)}
    }

     registerHandler= async (FN,LN,email,mob,pass)=> {
         try {
             await fetch(`/register/${email}`, {
                 method: 'POST',
                 headers: {
                     'Content-Type': 'application/json',
                     'Accept': 'application/json'
                 },
                 body: JSON.stringify({
                     "firstname": FN,
                     "lastname": LN,
                     "email": email,
                     "mobile": mob,
                     "password": pass
                 })
             }).then(res=>res.json()).then(data=>{
                 if(data === 0){
                     this.toast.error('This email is already exist!',{pauseOnFocusLoss: false})
                 } else {
                     this.setState({isRegisted:true});
                 }
             })
         } catch (err) {
             console.log('ERROR:  ' + err)
         }
     }

     updateUser = async (id,FN,LN,email,mob,pass)=> {
         try {
             await fetch(`/user/${id}/update`, {
                 method: 'PATCH',
                 headers: {
                     'Content-Type': 'application/json',
                     'Accept': 'application/json'
                 },
                 body: JSON.stringify({
                     "firstname": FN,
                     "lastname": LN,
                     "email": email,
                     "mobile": mob,
                     "password": pass
                 })
             }).then(res=>res.json()).then(data => {
                 this.cookies.set('register',
                         {
                             "firstname": FN,
                             "lastname": LN,
                             "email": email,
                             "mobile": mob,
                             "password": pass
                     }, { path: '/' });
                 this.toast.success(`${data}`,{pauseOnFocusLoss: false});
             })
         } catch (err) {
             console.log('ERROR:  ' + err)
         }
     }
    
    loginHandler = async (email, pass) => {
        try {
            await fetch(`/login/${email}/${pass}`, {
                method: 'GET',
                headers: {
                     'Content-Type': 'application/json',
                     'Accept': 'application/json'
                 }
            })
               .then(res=>res.json()).then(user=>{
                if(user.message){
                    this.toast.error(`${user.message}`,{pauseOnFocusLoss: false});
                } else {
                    this.cookies.set('login', {"email":`${email}`,"password":`${pass}`}, { path: '/' });
                    this.cookies.set('register',
                         {
                             "firstname": user.user.firstname,
                             "lastname": user.user.lastname,
                             "email": user.user.email,
                             "mobile": user.user.mobile,
                             "picture": user.user.picture,
                             "password": pass
                         }, { path: '/' });       
                    this.setState({ isLogin: true, user: user.user });
                }
               });
        
        } catch (err) {
            console.log('ERROR:  ' + err)
        }
    }

    logoutHandler = () => {
        const cookies = new Cookies();
        cookies.remove('login', { path: '/' });
         cookies.remove('register',{ path: '/' });
         this.setState({ user:[],isLogin: false });
    }


    contactHandler = async (name, email, sub, message) => {
         try {
             await fetch(`/contact`, {
                 method: 'POST',
                 headers: {
                     'Content-Type': 'application/json',
                     'Accept': 'application/json'
                 },
                 body: JSON.stringify({
                     "name": name,
                     "email": email,
                     "sub": sub,
                     "message": message
                 })
             }).then(res=>res.json()).then(data=>{
                 if(data.error){
                     this.toast.error(`${data.error}`,{pauseOnFocusLoss: false})
                 } else {
                     this.toast.success(`${data.success}`,{pauseOnFocusLoss: false})
                 }
             })
         } catch (err) {
             console.log('ERROR:  ' + err)
         }
        
    }
  
    
             
    render() {
         let isLogin = this.state.isLogin;
         setTimeout(() => {
             if (!isLogin) {
                    
                }
        },1000)  
        return (
            <React.Fragment>
                <ToastContainer />
              <Navbar 
                    sum={this.sum}
                    products={this.state.Products}
                    onSearch={this.searchHandler}
                    isLogin={this.state.isLogin}
                    logout={this.logoutHandler}
                    user={this.state.user}
              />

                <Switch>
                    
                    {/* Authentication  */}                  
                  <Route path={`/user/:id/settings`} render={props=>(
                      <Profile
                            user={this.state.user}
                            update={this.updateUser}
                            toast={this.toast}
                          {...props}
                          />
                  )}/>
                  <Route path='/auth' render={props=>(
                      <Auth
                          onRegister={this.registerHandler}
                          onLogin={this.loginHandler}
                          isRegisted={this.state.isRegisted}
                          isLogin={this.state.isLogin}
                          toast={this.toast}
                          {...props}
                          />
                    )} />

                  {/* not found page  */}
                  <Route path='/notFound' component={NotFound}/>

                  {/* Admin page */}
                   <Route path='/admin' render={props => (
                      <Admin
                          products={this.state.Products}
                          onDelete={this.deleteProductHandler}
                          {...props}
                      />
                  )}/>

                  {/* Shopping cart pages  */}
                  <Route path='/card' render={props => (
                      <ShoppingCard
                          {...props}
                          sum={this.sum}
                          products={this.state.Products.filter(c=>c.isCarded===true)}
                          onIncrement={this.IncrementHandler}
                          onDecrement={this.DecrementHandler}
                          onDelete={this.deleteHandler}
                          onReset={this.resetHandler}
                      />
                  )}/>
                  <Route path='/product/edit/:id/:name?' render={props => (
                      <EditProduct
                          {...props}
                          products={this.state.Products}
                          onSubmit={this.editProductHandler}
                          toast={this.toast}
                      />
                  )}/>
                  <Route path='/product/add' render={props => (
                   <AddProduct
                       {...props}
                       products={this.state.Products}
                       onSubmit={this.addProductHandler}
                       toast={this.toast}
                   />
                  )}/>
                  <Route path='/products/search/:search_term?' render={props=>(
                      <ProductsSearch
                          products={this.state.ProductsSearch}
                          onClick={this.isCartChangeHandler}
                          {...props}
                      />
                  )}/>
                  <Route path='/menu' exact render={props=>(
                      <Menu
                          products={this.state.Products}
                          onClick={this.isCartChangeHandler}
                          {...props}
                      />
                  )}/>
                  {/* About page  && Contact page */}
                  <Route path='/about' component={AboutUs}/>
                    <Route path='/contact' render={props => (
                        <Contact
                            contact={this.contactHandler}
                            {...props}
                        />
                  )}/>

                {/* Home page  */}
                <Route path='/home' component={Home}/>
                <Redirect  to='/home'/>
              </Switch>

              {/* Footer */}
              <Footer/>

               {/* Scroll up*/}
               <i id='up' style={this.style} onClick={this.goUpHandler} className="fas fa-arrow-circle-up back-to-top"/>
           </React.Fragment>
        );
        
    }
}

export default App;