import React from "react";
import {Link, Route, Switch} from "react-router-dom";
import ModiSit from "./ModiSit";
import Unde from "./Unde";
import Pariatur from "./Pariatur";
import Nostrum from "./Nostrum";
import Iusto from "./Iusto";


const Specials = () => {
    return (
        <>
           <section id="specials">
                     <div className="container">

                         <div className="section-title">
                             <h2>Check our <span>Specials</span></h2>
                             <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at
                                 voluptas atque vitae autem.</p>
                         </div>

                         <div className="row">
                             <div className="col-lg-3">
                                 <ul className="nav nav-tabs flex-column">
                                     <li className="nav-item">
                                         <Link className="nav-link " to="/home" >Modi sit
                                             est</Link>
                                     </li>
                                     <li className="nav-item">
                                         <Link className="nav-link" to="/home/2">Unde praesentium
                                             sed</Link>
                                     </li>
                                     <li className="nav-item">
                                         <Link className="nav-link" to='/home/3' >Pariatur explicabo
                                             vel</Link>
                                     </li>
                                     <li className="nav-item">
                                         <Link className="nav-link" to='/home/4'>Nostrum qui
                                             quasi</Link>
                                     </li>
                                     <li className="nav-item">
                                         <Link className="nav-link"  to='/home/5'>Iusto ut expedita
                                             aut</Link>
                                     </li>
                                 </ul>
                             </div>
                             <div className="col-lg-9 mt-4 mt-lg-0">
                                 <div className="tab-content">
                                    <Switch>
                                        <Route path='/home' exact  component={ModiSit}/>
                                        <Route path='/home/2' component={Unde}/>
                                        <Route path='/home/3' component={Pariatur}/>
                                        <Route path='/home/4' component={Nostrum}/>
                                        <Route path='/home/5' component={Iusto}/>
                                    </Switch>
                                 </div>
                             </div>
                         </div>

                     </div>
                 </section>
        </>
    )
}
export default Specials;