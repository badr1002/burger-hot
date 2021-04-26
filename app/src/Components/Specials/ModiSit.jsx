import Specials1 from "../../img/specials-1.jpg";
import React from "react";


const ModiSit = () =>{
    return (
        <>
            <div className="tab-pane active show" id="tab-1">
                <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                        <h3>Architecto ut aperiam autem id</h3>
                        <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad
                            sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                        <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum
                            sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae
                            aut qui. Est repellat minima eveniet eius et quis magni nihil.
                            Consequatur dolorem
                            quaerat quos qui similique accusamus nostrum rem vero</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                        <img src={Specials1} alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ModiSit;