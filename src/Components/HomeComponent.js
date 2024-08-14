import React from "react";
// import Innovationimage from "./Innovationimage";
import logo from './Assets/ai-generated-8682027_1280.jpg';
import ButtonComponent from "./ButtonComponent";



const HomeComponent = () => {

    return (
        <div id="Home">
            <div className="home3">
                <div className="home1">
                    <div className="home">
                        <h1>
                            Turn your tech idea into a product.
                        </h1>
                        <h2>
                            Ovata innovations has the solution you are looking for.
                        </h2>
                    </div>
                    <div>
                        <ButtonComponent  />
                    </div>
                </div>
                <div className="logo">
                    {/* <Innovationimage/> */}
                    <img src={logo} alt="" />
                </div>
            </div>

        </div>


    );
}

export default HomeComponent;