import React from "react";
import { Button, Form } from "react-bootstrap";
import ContactForm from "../../components/ContactForm/ContactForm";
import Hero from "../../components/hero/hero";
import "./contact.css";

const Contact: React.FC = () => (
  <>
    <div className="content">
      <Hero subTitle="Nous" title="Contactez" />
      <ContactForm />
    </div>
  </>
);

export default Contact;
