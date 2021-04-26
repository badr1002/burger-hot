import React, {Component} from 'react';
import Joi from 'joi-browser';

class Login extends Component {
    state={
        Username:'',
        Password:'',
        errors:{}
    }
    schema={
        Username:Joi.string().required(),
        Password:Joi.string().required()
    }


    validateHandler=()=>{
        const errors={};
        const state={...this.state};
        delete state.errors;
        const res =  Joi.validate(state,this.schema,{abortEarly:false});
        if(res.error === null)
        {
            this.setState({errors:{}});
            return true;
        }
        else {
            for(let err of res.error.details){
            errors[err.path]=err.message;
        }}
       this.setState({errors});
       return false;
    }

    stateHandler = e => {
        let state ={...this.state};
        state[e.currentTarget.name]=e.currentTarget.value;
        this.setState(state)
    }
    submitHandler = async e =>{
        e.preventDefault();
        await this.validateHandler();
         if(!this.validateHandler()){
            this.props.toast.error("Can't be empty!",{pauseOnFocusLoss: false});
         }else{
             await this.props.onLogin(this.state.Username, this.state.Password)
             
        }
        if(this.props.isLogin)this.props.history.replace('/home');
    }
    render() {
        return (
           <React.Fragment>
              <form className='form-floating  m-5 text-center' style={{padding:'80px'}} onSubmit={this.submitHandler}>
                   <h2 style={{color:'#f6be15'}}>Login</h2>
                     <i className="fas fa-user fa-3x mb-3"/>
                   <div className="mb-3 row">
                     <label htmlFor="username" className="col-sm-2 col-form-label">Email</label>
                     <div className="col-sm-10 mb-4">
                       <input
                           autoFocus={true}
                           name='Username'
                           value={this.state.Username}
                           onChange={this.stateHandler}
                           type="email"
                           className="form-control"
                           id="username"
                       />
                         {this.state.errors.Username &&
                         <div className='alert alert-danger'>
                             {this.state.errors.Username}
                         </div>}
                    </div>
                   <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                   <div className="col-sm-10 mb-4">
                       <input
                           name='Password'
                           value={this.state.Password}
                           onChange={this.stateHandler}
                           type="password"
                           className="form-control"
                           id="password"
                       />
                       {this.state.errors.Password &&
                       <div className='alert alert-danger'>
                           {this.state.errors.Password}
                       </div>
                       }
                   </div>
                </div>
                    <div className=" mb-4">
                       <input type="submit"  className='btn btn-success' value='Login' />
                   </div>
              </form>
           </React.Fragment>
        );
    }
}

export default Login;