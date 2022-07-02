import React, { useEffect, useRef } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import Hero from "../../components/hero/hero";
import "./contact.css";
import { useTranslation } from 'react-i18next';


const Contact: React.FC = () => {

  const myRef = useRef<any>(null)
  const { t } = useTranslation();

  useEffect(() => {
      myRef.current.scrollIntoView();
  });

  return <>
    <div className="content" ref={myRef}>
      <Hero subTitle="|" title={t('common.contact-us')} />
      <ContactForm />
    </div>
  </>
}

export default Contact;
