import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-bootstrap/Carousel';
import Slide1 from '../img/slide/slide-1.jpg';
import Slide2 from '../img/slide/slide-2.jpg';
import Slide3 from '../img/slide/slide-3.jpg';
import Specials1 from '../img/specials-1.jpg';
import Specials2 from '../img/specials-2.jpg';
import Specials3 from '../img/specials-3.jpg';
import Specials4 from '../img/specials-4.jpg';

import {Link} from "react-router-dom";

class CarouselHome extends Component {
    constructor(props) {
    super(props);
    this.wrapper = React.createRef();
  }
    render() {
        return (
            <React.Fragment>
                 <Carousel slide={true} fade={false}   className="hero">

                     <Carousel.Item  interval={5000}>
                        <img className="d-block w-100" src={Slide1} alt="Second slide"/>
                        <Carousel.Caption className='carousel_cap'>
                           <div className="carousel-content container">
                              <div className='row'>
                                  <div className='col-lg-12'>
                                      <h2 className="animate__animated animate__fadeInDown">
                                      <span>Delicious</span> Restaurant</h2>
                                  </div>
                                 <div className="col-lg-12">
                                      <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor
                                   ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut
                                   aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem.
                                   Esse doloremque accusamus repellendus deleniti vel. Minus et tempore
                                   modi architecto.</p>
                                 </div>
                                  <div className="col-lg-12">
                                      <div className="row">
                                          <div className="col-lg-12">
                                              <div className=' menuLinkBtn m-5'>
                                                  <Link to="/menu" className="btn-menu animate__animated animate__fadeInUp ">
                                                      Our Menu
                                                  </Link>
                                              </div>
                                          </div>
                                          <div className="col">
                                              <h2 className='l'>Architecto ut aperiam autem id</h2>
                                               <img className="specials" src={Specials1} alt="Second slide"/>
                                          </div>
                                            <div className="col">
                                                 <h2 className='l'>Et blanditiis nemo veritatis excepturi</h2>
                                               <img className="specials" src={Specials2} alt="Second slide"/>
                                          </div>
                                            <div className="col">
                                                 <h2 className='l'>Impedit facilis occaecati odio neque</h2>
                                               <img className="specials" src={Specials3} alt="Second slide"/>
                                          </div>
                                            <div className="col">
                                                 <h2 className='l'>
                                                     Fuga dolores inventore laboriosam ut est
                                                 </h2>
                                               <img className="specials" src={Specials4} alt="Second slide"/>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                           </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                     <Carousel.Item interval={5000} >
                        <img className="d-block w-100" src={Slide2} alt="Second slide"/>
                        <Carousel.Caption className='carousel_cap'>
                           <div className="carousel-content container">
                              <div className='row'>
                                  <div className='col-lg-12'>
                                      <h2 className="animate__animated animate__fadeInDown">
                                      <span>Delicious</span> Restaurant</h2>
                                  </div>
                                 <div className="col-lg-12">
                                      <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor
                                   ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut
                                   aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem.
                                   Esse doloremque accusamus repellendus deleniti vel. Minus et tempore
                                   modi architecto.</p>
                                 </div>
                                  <div className="col-lg-12">
                                      <div className="row">
                                          <div className="col-lg-12">
                                              <div className=' menuLinkBtn m-5'>
                                                  <Link to="/menu" className="btn-menu animate__animated animate__fadeInUp ">
                                                      Our Menu
                                                  </Link>
                                              </div>
                                          </div>
                                          <div className="col">
                                              <h2 className='l'>Architecto ut aperiam autem id</h2>
                                               <img className="specials" src={Specials1} alt="Second slide"/>
                                          </div>
                                            <div className="col">
                                                 <h2 className='l'>Et blanditiis nemo veritatis excepturi</h2>
                                               <img className="specials" src={Specials2} alt="Second slide"/>
                                          </div>
                                            <div className="col">
                                                 <h2 className='l'>Impedit facilis occaecati odio neque</h2>
                                               <img className="specials" src={Specials3} alt="Second slide"/>
                                          </div>
                                            <div className="col">
                                                 <h2 className='l'>
                                                     Fuga dolores inventore laboriosam ut est
                                                 </h2>
                                               <img className="specials" src={Specials4} alt="Second slide"/>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                           </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                     <Carousel.Item interval={5000}>
                        <img className="d-block w-100" src={Slide3} alt="Second slide"/>
                        <Carousel.Caption className='carousel_cap'>
                           <div className="carousel-content container">
                              <div className='row'>
                                  <div className='col-lg-12'>
                                      <h2 className="animate__animated animate__fadeInDown">
                                      <span>Delicious</span> Restaurant</h2>
                                  </div>
                                 <div className="col-lg-12">
                                      <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor
                                   ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut
                                   aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem.
                                   Esse doloremque accusamus repellendus deleniti vel. Minus et tempore
                                   modi architecto.</p>
                                 </div>
                                  <div className="col-lg-12">
                                      <div className="row">
                                          <div className="col-lg-12">
                                              <div className=' menuLinkBtn m-5'>
                                                  <Link to="/menu" className="btn-menu animate__animated animate__fadeInUp ">
                                                      Our Menu
                                                  </Link>
                                              </div>
                                          </div>
                                          <div className="col">
                                              <h2 className='l'>Architecto ut aperiam autem id</h2>
                                               <img className="specials" src={Specials1} alt="Second slide"/>
                                          </div>
                                            <div className="col">
                                                 <h2 className='l'>Et blanditiis nemo veritatis excepturi</h2>
                                               <img className="specials" src={Specials2} alt="Second slide"/>
                                          </div>
                                            <div className="col">
                                                 <h2 className='l'>Impedit facilis occaecati odio neque</h2>
                                               <img className="specials" src={Specials3} alt="Second slide"/>
                                          </div>
                                            <div className="col">
                                                 <h2 className='l'>
                                                     Fuga dolores inventore laboriosam ut est
                                                 </h2>
                                               <img className="specials" src={Specials4} alt="Second slide"/>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                           </div>
                        </Carousel.Caption>
                    </Carousel.Item>

                 </Carousel>
             </React.Fragment>
        );
    }
}

export default CarouselHome;