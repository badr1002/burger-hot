import React, {Component} from 'react';
import Joi from "joi-browser";

class Register extends Component {
     state={
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        mobile:'',
        errors:{},
    }

    schema={
        firstname:Joi.string().required(),
        lastname:Joi.string().required(),
        email:Joi.string().required(),
        password:Joi.string().required(),
        mobile:Joi.string().required(),

    }

    validateHandler = () => {
        const errors={};
        const state={...this.state};
        delete state.errors;
        const res =  Joi.validate(state,this.schema,{abortEarly:false});
        if(res.error === null)
        {
            this.setState({errors:{}});
            return null;
        }
        else {
            for(let err of res.error.details){
            errors[err.path]=err.message;
        }}
       this.setState({errors})
    }

    stateHandler = e => {
        let state ={...this.state};
        state[e.currentTarget.name]=e.currentTarget.value;
        this.setState(state)
    }
    submitHandler =async e=>{
         e.preventDefault();
         const add =async ()=>
        {
          await  this.props.onRegister(
                this.state.firstname,
                this.state.lastname,
                this.state.email,
                this.state.mobile,
                this.state.password);
           if(this.props.isRegisted) this.props.history.replace('/auth/login');
        }
        await this.validateHandler();
        this.state.firstname !== '' &&
        this.state.lastname !== '' &&
        this.state.email !== '' &&
        this.state.password !== '' &&  add();
    }

    render() {
        return (
            <React.Fragment>
              <form className ='form-floating  m-5 text-center'
                    style={{padding:'80px'}}
                    onSubmit={this.submitHandler}
              >

                   <h2 style={{color:'#f6be15'}}>Register</h2>

                   <div className="mb-3 row">

                       <label htmlFor="firstname" className="col-sm-2 col-form-label">Firstname</label>
                       <div className="col-sm-10 mb-4">
                           <input
                               autoFocus={true}
                               name='firstname'
                               value={this.state.firstname}
                               onChange={this.stateHandler}
                               type="text"
                               className="form-control"
                               id="firstname"
                           />
                           {this.state.errors.firstname &&
                           <div className='alert alert-danger'>
                               {this.state.errors.firstname}
                           </div>}
                       </div>

                       <label htmlFor="lastname" className="col-sm-2 col-form-label">Lastname</label>
                       <div className="col-sm-10 mb-4">
                           <input
                               name='lastname'
                               value={this.state.lastname}
                               onChange={this.stateHandler}
                               type="text"
                               className="form-control"
                               id="lastname"
                           />
                           {this.state.errors.lastname &&
                           <div className='alert alert-danger'>
                               {this.state.errors.lastname}
                           </div>}
                       </div>

                       <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
                       <div className="col-sm-10 mb-4">
                           <input
                               name='email'
                               value={this.state.email}
                               onChange={this.stateHandler}
                               type="email"
                               className="form-control"
                               id="email"
                           />
                           {this.state.errors.email &&
                           <div className='alert alert-danger'>
                               {this.state.errors.email}
                           </div>}
                       </div>

                       <label htmlFor="mobile" className="col-sm-2 col-form-label">Mobile</label>
                       <div className="col-sm-10 mb-4">
                           <input
                               name='mobile'
                               value={this.state.mobile}
                               onChange={this.stateHandler}
                               type="text"
                               className="form-control"
                               id="mobile"
                           />
                       </div>

                      <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                      <div className="col-sm-10 mb-4">
                          <input
                              name='password'
                              value={this.state.password}
                              onChange={this.stateHandler}
                              type="password"
                              className="form-control"
                              id="password"
                          />
                          {this.state.errors.password &&
                          <div className='alert alert-danger'>
                              {this.state.errors.password}
                          </div>
                          }
                      </div>

                 <div className="col-lg-12">
                     <div className=" mb-4">
                         <input type='submit'  className='btn btn-success' value='Register'/>
                     </div>
                 </div>

                </div>
              </form>
           </React.Fragment>
        );
    }
}

export default Register;