import React from "react";
import "./styles.scss";
import CardItem from "../Card";
import { Container } from "./styles";
const FeedIdentity = () => {
  return (
    <Container>
      <div className="card-identity grid__column">
        <div className="card card--user-profile">
          <div className="card--user-profile__cover" />
          <div className="card-body">
            <figure className="avatar avatar--online mb-3">
              <div className="avatar__thumbnail">
                <img
                  className="avatar__image"
                  src="https://randomuser.me/api/portraits/men/54.jpg"
                  alt="Isaac Snyder "
                />
              </div>
              <figcaption className="avatar__meta">
                <h5 className="avatar__title js-user-name">Isaac Snyder </h5>
                <div className="avatar__summery js-multiline-truncate">
                  IT Supervisor at XYZ Company
                </div>
              </figcaption>
            </figure>
            <figure className="mutual-connection mb-4">
              <img
                className="mutual-connection__image"
                src="https://randomuser.me/api/portraits/men/47.jpg"
              />
              <img
                className="mutual-connection__image"
                src="https://randomuser.me/api/portraits/women/19.jpg"
              />
              <img
                className="mutual-connection__image"
                src="https://randomuser.me/api/portraits/men/22.jpg"
              />
              <figcaption className="mutual-connection__caption">
                10 amigos online
              </figcaption>
            </figure>
            <a className="btn btn-outline-dark" role="button" href="#">
              Convidar
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FeedIdentity;
