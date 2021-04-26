import React, { Component } from 'react'
import Joi from "joi-browser";
import Cookies from 'universal-cookie';

export default class Profile extends Component {

    state={
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        mobile: '',
        errors:{},
    }

    schema={
        firstname:Joi.string().required(),
        lastname:Joi.string().required(),
        email:Joi.string().required(),
        password:Joi.string().required(),
        mobile:Joi.string().required(),

    }
 cookies = new Cookies();
  componentDidMount(){
        this.cookies.get('register') && this.setState(  
             this.cookies.get('register')
        )
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
    submitHandler =e=>{
         e.preventDefault();
        this.props.update(
                this.props.match.params.id,
                this.state.firstname,
                this.state.lastname,
                this.state.email,
                this.state.mobile,
                this.state.password);       
    }

    render() {
        return (
            <React.Fragment>
                <div className='container text-center'>
                    <h1 style={{ color: '#f6be15' }}>Welcome {this.props.user.firstname + " " + this.props.user.lastname}</h1>
                    <form className='form-floating  m-5 text-center'
                    style={{padding:'80px'}}
                    onSubmit={this.submitHandler}
                    >
                        <h2 style={{ color: '#f6be15' }}>Profile</h2>

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
                                readOnly
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
                         <input type='submit'  className='btn btn-success' value='Update'/>
                     </div>
                 </div>

                </div>
              </form>
                </div>
            </React.Fragment>
        )
    }
}
