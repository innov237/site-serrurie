import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Commande.css";

const Commande: React.FC = () => (
  <>

      <div className="main-cmd">
        <div className="map">
          <div className="cmd">
            <h1 className="pb-5">Commande</h1>
            <form> 
              <div className="form-group row">
                <div className="col-sm">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Nom"
                  />
                </div>
                <div className="col-sm">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Prenom"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="email"
                  />
                </div>
                <div className="col-sm">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Ville"
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-sm">
                  <textarea
                    className="form-control"
                    placeholder="Quel est votre besoin ?"
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
                  />
                </div>
                <div className="col-sm">
                  <label>Heure sollicitation</label>
                  <input
                    id="heure"
                    type="time"
                    className="form-control"
                    placeholder="Heure"
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary mt-5 ">
                Commander
              </button>
            </form>
          </div>
        </div>
      </div>
  </>
);

export default Commande;
