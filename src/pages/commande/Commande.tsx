import React, { useEffect, useRef } from "react";
import "./Commande.css";

const Commande: React.FC = () => {

  const myRef = useRef<any>(null)


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
          <h1 className="pb-5">Commande</h1>
          <form onSubmit={onSubmit}>
            <div className="form-group row">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nom"
                  name="nom"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Prenom"
                  name="prenom"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ville"
                  name="ville"
                />
              </div>
              <div className="col-md-12">
                <textarea rows={5}
                  className="form-control"
                  placeholder="Quel est votre besoin ?"
                  name="message"
                ></textarea>
              </div>
            </div>

            <div className="form-group row">
              <div className="col-sm">
                <label>Date sollicitation</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Date"
                  name="date"
                />
              </div>
              <div className="col-sm">
                <label>Heure sollicitation</label>
                <input
                  id="heure"
                  type="time"
                  className="form-control"
                  placeholder="Heure"
                  name="time"
                />
              </div>
            </div>
            <div className="d-flex align-items-end justify-content-end">
              <button type="submit" className="btn btn-primary mt-5">
                Commander
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  </>
};

export default Commande;
