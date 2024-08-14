import React from "react";
import ServicecardComponent from './ServicecardComponent';
import ButtonComponent from "./ButtonComponent";
import Image1 from "./Assets/android.png";
import Image2 from "./Assets/atandt.png";
import Image3 from "./Assets/token.svg";
import Image4 from "./Assets/atom.png";
import Image5 from "./Assets/figma.png";
import { useNavigate } from "react-router-dom";

const ServiceComponent = () => {
    let navigate = useNavigate();
    
    return (
        <div  className="serve">
            <h1>The services we provide</h1>
            <div className="serve-card">
                <div>
                    <button onClick={() => { navigate("/modules") }}>
                        <ServicecardComponent Image={Image1} title="UX/UI" description="best ui ux designers" />
                    </button>
                </div>
                <div>
                    <ServicecardComponent Image={Image2} title="Mobile Applications" description="We launch production ready applications on all platforms" />
                </div>
                <div>
                    <ServicecardComponent Image={Image3} title="Web Development" description="We Deploy website to the internet" />
                </div>
            </div>
            <div className="serve-card">
                <div>
                    <ServicecardComponent Image={Image4} title="Software Maintenance" description="best ui ux designers" />
                </div>
                <div>
                    <ServicecardComponent Image={Image5} title="Mobile Applications" description="We launch production ready applications on all platforms" />
                </div>
                <div>
                    <ServicecardComponent Image={Image3} title="Web Development" description="We Deploy website to the internet" />
                </div>
            </div>
            <div className="serve-card">
                <div>
                    <ServicecardComponent Image={Image1} title="UX/UI" description="best ui ux designers" />
                </div>
                <div>
                    <ServicecardComponent Image={Image2} title="Mobile Applications" description="We launch production ready applications on all platforms" />
                </div>
                <div>
                    <ServicecardComponent Image={Image3} title="Web Development" description="We Deploy website to the internet" />
                </div>
            </div>
            <div className="button2">
                <ButtonComponent />
            </div>
        </div>
    );
}

export default ServiceComponent;
