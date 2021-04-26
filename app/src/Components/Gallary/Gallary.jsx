import React from "react";
import Gallary1 from '../../img/gallery/gallery-1.jpg';
import Gallary2 from '../../img/gallery/gallery-2.jpg';
import Gallary3 from '../../img/gallery/gallery-3.jpg';
import Gallary4 from '../../img/gallery/gallery-4.jpg';
import Gallary5 from '../../img/gallery/gallery-5.jpg';
import Gallary6 from '../../img/gallery/gallery-6.jpg';
import Gallary7 from '../../img/gallery/gallery-7.jpg';
import Gallary8 from '../../img/gallery/gallery-8.jpg';


const Gallary = ()=>{
    return(
        <>
            <section id="gallery" className="gallery">
                     <div className="container-fluid">

                         <div className="section-title">
                             <h2>Some photos from <span>Our Restaurant</span></h2>
                             <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at
                                 voluptas atque vitae autem.</p>
                         </div>

                         <div className="row no-gutters">

                             <div className="col">
                                 <div className="gallery-item">
                                     <a href="../../img/gallery/gallery-1.jpg" className="gallery-lightbox">
                                         <img src={Gallary1} alt="" className="img-fluid"/>
                                     </a>
                                 </div>
                             </div>

                             <div className="col">
                                 <div className="gallery-item">
                                     <a href="../../img/gallery/gallery-2.jpg" className="gallery-lightbox">
                                         <img src={Gallary2} alt="" className="img-fluid"/>
                                     </a>
                                 </div>
                             </div>

                             <div className="col">
                                 <div className="gallery-item">
                                     <a href="../../img/gallery/gallery-3.jpg" className="gallery-lightbox">
                                          <img src={Gallary3} alt="" className="img-fluid"/>
                                     </a>
                                 </div>
                             </div>

                             <div className="col" >
                                 <div className="gallery-item">
                                     <a href="../../img/gallery/gallery-4.jpg" className="gallery-lightbox">
                                          <img src={Gallary4} alt="" className="img-fluid"/>
                                     </a>
                                 </div>
                             </div>

                             <div className="col">
                                 <div className="gallery-item">
                                     <a href="../../img/gallery/gallery-5.jpg" className="gallery-lightbox">
                                          <img src={Gallary5} alt="" className="img-fluid"/>
                                     </a>
                                 </div>
                             </div>

                             <div className="col">
                                 <div className="gallery-item">
                                     <a href="../../img/gallery/gallery-6.jpg" className="gallery-lightbox">
                                          <img src={Gallary6} alt="" className="img-fluid"/>
                                     </a>
                                 </div>
                             </div>

                             <div className="col">
                                 <div className="gallery-item">
                                     <a href="../../img/gallery/gallery-7.jpg" className="gallery-lightbox">
                                          <img src={Gallary7} alt="" className="img-fluid"/>
                                     </a>
                                 </div>
                             </div>

                             <div className="col">
                                 <div className="gallery-item">
                                     <a href="../../img/gallery/gallery-8.jpg" className="gallery-lightbox">
                                          <img src={Gallary8} alt="" className="img-fluid"/>
                                     </a>
                                 </div>
                             </div>

                         </div>

                     </div>
                 </section>
        </>
    )
}
export default Gallary;