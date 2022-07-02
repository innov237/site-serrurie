import React, { useEffect, useRef } from "react";
import "./Commande.css";
import { useTranslation } from 'react-i18next';

const Commande: React.FC = () => {

  const myRef = useRef<any>(null)

  const { t } = useTranslation();

  useEffect(() => {
    myRef.current.scrollIntoView();
  });

  function onSubmit(data: any) {
    data.preventDefault();

    console.log(data.target);
  }

  return <>
    <div className="main-cmd" ref={myRef}>
      <div className="map">
        <div className="cmd">
          <h1 className="pb-5">{t('bookingForm.title')}</h1>
          <form onSubmit={onSubmit}>
            <div className="form-group row">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder={t('contactForm.name')}
                  name="nom"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder={t('contactForm.secondName')}
                  name="prenom"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control"
                  placeholder={t('contactForm.email')}
                  name="email"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder={t('contactForm.city')}
                  name="ville"
                />
              </div>
              <div className="col-md-12">
                <textarea rows={5}
                  className="form-control"
                  placeholder={t('bookingForm.message')}
                  name="message"
                ></textarea>
              </div>
            </div>

            <div className="form-group row">
              <div className="col-sm">
                <label>{t('bookingForm.date')}</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder={t('bookingForm.date')}
                  name="date"
                />
              </div>
              <div className="col-sm">
                <label>{t('bookingForm.time')}</label>
                <input
                  id="heure"
                  type="time"
                  className="form-control"
                  placeholder={t('bookingForm.time')}
                  name="time"
                />
              </div>
            </div>
            <div className="d-flex align-items-end justify-content-end">
              <button type="submit" className="btn btn-primary mt-5">
                {t('bookingForm.booking')}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  </>
};

export default Commande;
