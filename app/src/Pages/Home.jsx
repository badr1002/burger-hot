import React, {Component} from 'react';
import CarouselHome from "../Components/CarouselHome";

import Gallary from "../Components/Gallary/Gallary";
import Specials from "../Components/Specials/Specials";
import WhyUs from "../Components/About/WhyUs";

class Home extends Component {
    render() {
        return (
             <React.Fragment>
                 <CarouselHome/>
                 <WhyUs/>
                 <Specials/>
                 <Gallary/>
             </React.Fragment>
        );
    }
}

export default Home;