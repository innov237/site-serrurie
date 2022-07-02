import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { DividerVertical } from '../dividerVertical/DividerVertical';
import emailJs from 'emailjs-com';
import './ContactForm.css';
import { useTranslation } from 'react-i18next';

const ContactForm: React.FC = () => {

    const { t } = useTranslation();

    const [isLoad, setLoader] = useState(false);

    function sendEmail(e: any) {
        e.preventDefault();
        setLoader(true);
        emailJs.sendForm("service_z8qos31", "template_gdng2sa", e.target, "user_yIWICCvaKkQlTT4cTriAZ").then((result) => {
            console.log(result.text);
            if (result.text === "OK") {
                alert("Message sent successfully");
                setLoader(false);
            }
        }, (error) => {
            console.log(error.text);
            setLoader(false);
        })

        e.target.reset();
    }

    return (
        <div className="container-fluid contact-section no-padding">
            <div className="row d-fex align-items-end justify-content-center">
                <div className="col-md-8 form-container">
                    <h1 className="pb-5 text-secondary hidden">{t('contactForm.title')}</h1>
                    <Form onSubmit={sendEmail} id="contact-form">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="text-secondary">{t('contactForm.name')}</Form.Label>
                            <Form.Control type="text" name="name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className="text-secondary">{t('contactForm.email')}</Form.Label>
                            <Form.Control type="text" name="email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className="text-secondary">{t('contactForm.message')}</Form.Label>
                            <Form.Control as="textarea" rows={5} type="text" name="message" />
                        </Form.Group>
                        <br />
                        {!isLoad && <Button variant="primary" type="submit">
                            {t('contactForm.send')}
                        </Button>}

                        {isLoad && <Button variant="primary">
                         {t('contactForm.send')} ...
                        </Button>}
                    </Form>
                </div>
            </div>
            <DividerVertical></DividerVertical>
        </div>);
};

export default ContactForm;