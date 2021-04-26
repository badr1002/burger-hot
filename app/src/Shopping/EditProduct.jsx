import React, {Component} from 'react';


class EditProduct extends Component {

    state={
      Name:'', Price:''
    }
    componentDidMount=()=>{
            fetch('/products',{
                method: 'GET',
                headers: {
                     'Content-Type': 'application/json',
                     'Accept': 'application/json'
                 }
            })
                .then(res=>res.json()).then(data=>{
                    let id =parseInt(this.props.match.params.id);
                    const p = data.map(a=>a).filter(c=>c.id === id)[0];
                    this.setState({Name:p.name,Price:p.price})
            })
    }

    stateHandler=e=>{
        let state ={...this.state};
        state[e.currentTarget.name]=e.currentTarget.value;
        this.setState(state)
    }

    submitHandler= async e=>{
        e.preventDefault();
        if(this.state.Name !=='' || this.state.Price !==''){
            this.props.onSubmit(this.props.match.params.id,this.state.Name,this.state.Price);
            this.props.toast.success("Wow edit Successfully!",{pauseOnFocusLoss: false});
        }else
            this.props.toast.error("Ops edit not Successfully!",{pauseOnFocusLoss: false});

    }
    render() {
        return (
            <React.Fragment>
                
              <form className='form-floating  m-5 text-center' style={{padding:'58px'}} onSubmit={this.submitHandler}>
                   <h1 style={{color:'#f6be15'}}>Edit Product</h1>
                   <div className="mb-3 row">
                     <label htmlFor="Name" className="col-sm-2 col-form-label">Name</label>
                     <div className="col-sm-10 mb-4">
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
                </div>
                    <div className=" mb-4">
                       <input type="submit"  className='btn btn-success'  value='Edit'/>
                   </div>
              </form>
           </React.Fragment>
        );
    }
}

export default EditProduct;