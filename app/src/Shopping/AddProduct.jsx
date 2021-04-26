import React, {Component} from 'react';

class AddProduct extends Component {
    state={
     Name:'', Price:'',Type:''
    }

      stateHandler=e=>{
        let state ={...this.state};
        state[e.currentTarget.name]=e.currentTarget.value;
        this.setState(state)
    }
    handleChange(e) {
        let value = e.target.value;
        this.setState({
        Type: value
        });
    }
    submitHandler = e =>{
        e.preventDefault();
        if(this.state.Name !=='' || this.state.Price !=='' || this.state.Type !==''){
            this.props.onSubmit(this.state.Name,this.state.Price,this.state.Type);
             this.setState({Name:'',Price:'',Type:''});
            this.props.toast.success("Wow added Successfully!",{pauseOnFocusLoss: false});
        } else
            this.props.toast.error("Ops added not Successfully!",{pauseOnFocusLoss: false});
    }

    render() {
        return (
            <React.Fragment>
              <form className='form-floating  m-5 text-center' style={{padding:'27px'}} onSubmit={this.submitHandler}>

                   <h1 style={{color:'#f6be15'}}>Add Product</h1>
                   <div className="mb-3 row">
                     <label htmlFor="Name" className="col-sm-2 col-form-label">Name</label>
                     <div className="col-sm-10 mb-4" >
                       <input
                           autoFocus={true}
                           name='Name'
                           value={this.state.Name}
                           onChange={this.stateHandler}
                           type="text"
                           className="form-control"
                           id="Name"
                       />
                    </div>

                   <label htmlFor="Price" className="col-sm-2 col-form-label">Price</label>
                   <div className="col-sm-10 mb-4">
                       <input
                           name='Price'
                           value={this.state.Price}
                           onChange={this.stateHandler}
                           type="text"
                           className="form-control"
                           id="Price"
                       />
                   </div>

                  <label htmlFor="Type" className="col-sm-2 col-form-label">Type</label>
                  <div className="col-sm-10 mb-4">
                      <select
                          ref="selectOption"
                          className=" form-control"
                          onChange={(e) => this.handleChange(e)}
                      >
                          <option >Open this select type</option>
                           <option  value="foods" >Foods</option>
                           <option  value="drinks">Drinks</option>
                           <option  value="sweets">Sweets</option>
                           <option  value="salad">Salad</option>
                       </select>
                   </div>
                   </div>
                    <div className=" mb-4">
                       <input type="submit"  className='btn btn-success' value='Add' />
                   </div>
              </form>
           </React.Fragment>
        );
    }
}

export default AddProduct;