import React, { useEffect, useRef } from "react";
import "./About2.css";
import AboutComponent from "../../components/about/AboutComponent";
import PageHeading from "../../components/page-heading/page-heading";
const About: React.FC = () => {

    const myRef = useRef<any>(null)


    useEffect(() => {
        myRef.current.scrollIntoView();
    });

    return <>
        <div className="conntainer-fluid section2" id="about" ref={myRef}>
            <div style={{ paddingTop: "100px" }}>
                <PageHeading />
                <AboutComponent />
            </div>
        </div>
    </>
};

export default About;
