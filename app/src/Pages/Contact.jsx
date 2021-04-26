import React, {Component} from 'react';
import Joi from "joi-browser";

class Contact extends Component {
    state={
        name:'',
        email:'',
        sub:'',
        message:'',
        errors:{},
    }

    schema={
        name:Joi.string().required(),
        email:Joi.string().required(),
        sub:Joi.string().required(),
        message:Joi.string().required(),

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
        await this.validateHandler();
        this.state.name !== '' &&
        this.state.email !== '' &&
        this.state.sub !== '' &&
        this.state.message !== '' &&
        this.props.contact(
            this.state.name,
            this.state.email, 
            this.state.sub,
            this.state.message
        );
    }
    render() {
        return (
            <React.Fragment>
                <section id="contact" className="contact">
                    <div className="container">

                        <div className="section-title">
                            <h2><span>Contact</span> Us</h2>
                            <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at
                                voluptas atque vitae autem.</p>
                        </div>
                    </div>

                    <div className="map">
                        <iframe
                            style={{border:0, width: '100%', height: '350px'}}
                            title='contact'
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                            frameBorder="0"
                            allowFullScreen
                        />
                    </div>

                    <div className="container mt-5">

                        <div className="info-wrap">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 info">
                                    <i className="bi bi-geo-alt"/>
                                    <h4>Location:</h4>
                                    <p>A108 Adam Street<br/>New York, NY 535022</p>
                                </div>

                                <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                                    <i className="bi bi-clock"/>
                                    <h4>Open Hours:</h4>
                                    <p>Monday-Saturday:<br/>11:00 AM - 2300 PM</p>
                                </div>

                                <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                                    <i className="bi bi-envelope"/>
                                    <h4>Email:</h4>
                                    <p>info@example.com<br/>contact@example.com</p>
                                </div>

                                <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
                                    <i className="bi bi-phone"/>
                                    <h4>Call:</h4>
                                    <p>+1 5589 55488 51<br/>+1 5589 22475 14</p>
                                </div>
                            </div>
                        </div>

                        <form  onSubmit={this.submitHandler}  className="php-email-form">
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.stateHandler}
                                        className="form-control"
                                        id="name"
                                        placeholder="Your Name"
                                        required />
                                </div>
                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                    <input
                                        type="text"
                                        name="email"
                                        className="form-control"
                                        id="email"
                                        value={this.state.email}
                                        onChange={this.stateHandler}
                                        placeholder="E-mail"
                                        required />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                               <input
                                        type="text"
                                        name="sub"
                                        value={this.state.sub}
                                        onChange={this.stateHandler}
                                        className="form-control"
                                        id="sub"
                                        placeholder="Subject"
                                        required />
                            </div>
                            <div className="form-group mt-3">
                                <textarea
                                    className="form-control"
                                    name="message"
                                    rows="5"
                                    value={this.state.message}
                                    onChange={this.stateHandler}
                                    placeholder="Message"
                                    required/>
                            </div>
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"/>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center">
                                <button type="submit">Send Message</button>
                            </div>
                        </form>

                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Contact;