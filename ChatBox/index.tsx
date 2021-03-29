import React, { useState } from "react";

import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";

import { Container } from "./styles";

interface Props {
  onSeach: Function;
}

const ChatBox = ({ onSeach = (text: any) => {} }: Props) => {
  return (
    <Container>
      <aside>
        <header>
          <input type="text" placeholder="Encontrar amigos" />
          <figure className="mutual-connection mb-2 mt-2">
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
              +10 amigos online
            </figcaption>
          </figure>
        </header>
        <ul>
          <li>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg"
              alt=""
            />
            <div>
              <h2>Prénom Nom</h2>
              <h3>
                <span className="status orange" />
                offline
              </h3>
            </div>
          </li>
          <li>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_03.jpg"
              alt=""
            />
            <div>
              <h2>Prénom Nom</h2>
              <h3>
                <span className="status orange" />
                offline
              </h3>
            </div>
          </li>
          <li>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_07.jpg"
              alt=""
            />
            <div>
              <h2>Prénom Nom</h2>
              <h3>
                <span className="status green" />
                online
              </h3>
            </div>
          </li>
          <li>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_08.jpg"
              alt=""
            />
            <div>
              <h2>Prénom Nom</h2>
              <h3>
                <span className="status green" />
                online
              </h3>
            </div>
          </li>
          <li>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_09.jpg"
              alt=""
            />
            <div>
              <h2>Prénom Nom</h2>
              <h3>
                <span className="status green" />
                online
              </h3>
            </div>
          </li>
          <li>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_10.jpg"
              alt=""
            />
            <div>
              <h2>Prénom Nom</h2>
              <h3>
                <span className="status orange" />
                offline
              </h3>
            </div>
          </li>
          <li>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_08.jpg"
              alt=""
            />
            <div>
              <h2>Prénom Nom</h2>
              <h3>
                <span className="status green" />
                online
              </h3>
            </div>
          </li>
          <li>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_09.jpg"
              alt=""
            />
            <div>
              <h2>Prénom Nom</h2>
              <h3>
                <span className="status green" />
                online
              </h3>
            </div>
          </li>
          <li>
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_10.jpg"
              alt=""
            />
            <div>
              <h2>Prénom Nom</h2>
              <h3>
                <span className="status orange" />
                offline
              </h3>
            </div>
          </li>
        </ul>
      </aside>
    </Container>
  );
};
export default ChatBox;
