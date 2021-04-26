import React, {Component} from 'react';
import {Route, Switch, Redirect, Link} from 'react-router-dom';
import Login from "./Login";
import Register from "./Register";

class Auth extends Component {
    render() {
        return (
            <React.Fragment>
               <section className="container text-center">
                   <Link  to='/auth/login'>Login/</Link>
                   <Link  to='/auth/register'>Register</Link>
                   <hr/>

                   <Switch>
                    {/* Authentication  */}

                    <Route path='/auth/login' render={props=>(
                            <Login
                                onLogin={this.props.onLogin}
                                isLogin={this.props.isLogin}
                                toast={this.props.toast}                               
                                {...props}
                        />
                    )}/>
                    <Route path='/auth/register' render={props=>(
                        <Register
                            onRegister={this.props.onRegister}
                            isRegisted={this.props.isRegisted}
                            isLogin={this.props.isLogin}
                            toast={this.props.toast}
                            {...props}
                            />
                    )}/>
                        <Redirect to='/auth/login'/>
                   </Switch>
               </section>
            </React.Fragment>
        );
    }
}

export default Auth;