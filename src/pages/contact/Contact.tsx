import React, { useEffect, useRef } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import Hero from "../../components/hero/hero";
import "./contact.css";

const Contact: React.FC = () => {

  const myRef = useRef<any>(null)


  useEffect(() => {
      myRef.current.scrollIntoView();
  });

  return <>
    <div className="content" ref={myRef}>
      <Hero subTitle="Nous" title="Contacter" />
      <ContactForm />
    </div>
  </>
}

export default Contact;
