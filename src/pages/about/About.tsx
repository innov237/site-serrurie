import React, { useEffect, useRef } from "react";
import "./About2.css";
import AboutComponent from "../../components/about/AboutComponent";
const About: React.FC = () => {
    
    const myRef = useRef<any>(null)


    useEffect(() => {
        myRef.current.scrollIntoView();
    });

    return <>
        <div className="footer conntainer-fluid section2" id="about" ref={myRef}>
            <div style={{ paddingTop: "100px" }}>
                <AboutComponent />
            </div>
        </div>
    </>
};

export default About;
