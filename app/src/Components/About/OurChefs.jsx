import React from "react";
import Chef1 from '../../img/chefs/chefs-1.jpg';
import Chef2 from '../../img/chefs/chefs-2.jpg';
import Chef3 from '../../img/chefs/chefs-3.jpg';

const Specials = () => {
    return (
        <>
            <section id="chefs" className="chefs">
                <div className="container">

                    <div className="section-title">
                        <h2>Our Proffesional <span>Chefs</span></h2>
                        <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at
                            voluptas atque vitae autem.</p>
                    </div>

                    <div className="row">

                        <div className="col-lg-4 col-md-6">
                            <div className="member">
                                <div className="pic">
                                    <img src={Chef1} className="img-fluid" alt=""/>
                                </div>
                                <div className="member-info">
                                    <h4>Walter White</h4>
                                    <span>Master Chef</span>
                                     <div className="social">
                                         <i className="fab fa-twitter"/>
                                         <i className="fab fa-facebook"/>
                                         <i className="fab fa-instagram"/>
                                         <i className="fab fa-linkedin"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="member">
                              <div className="pic">
                                    <img src={Chef2} className="img-fluid" alt=""/>
                              </div>
                                <div className="member-info">
                                    <h4>Sarah Jhonson</h4>
                                    <span>Patissier</span>
                                     <div className="social">
                                         <i className="fab fa-twitter"/>
                                         <i className="fab fa-facebook"/>
                                         <i className="fab fa-instagram"/>
                                         <i className="fab fa-linkedin"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="member">
                                 <div className="pic">
                                    <img src={Chef3} className="img-fluid" alt=""/>
                                 </div>
                                <div className="member-info">
                                    <h4>William Anderson</h4>
                                    <span>Cook</span>
                                    <div className="social">
                                         <i className="fab fa-twitter"/>
                                         <i className="fab fa-facebook"/>
                                         <i className="fab fa-instagram"/>
                                         <i className="fab fa-linkedin"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}
export default Specials;