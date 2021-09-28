// import React from "react";
// import { Link, navigate } from "@reach/router";
// import axios from "axios";
// import Construction from "../images/construction.gif";
// import CommentForm from "./CommentForm";

// const HyensPage = () => {
//   return (
//     <div>
//       <h1>Hyens Home Page</h1>
//       <br />
//       <img src={Construction} alt="construction" width="700" height="400" />
//       <button
//         style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
//         onClick={(e) => (window.location.href = "/")}>
//         Home
//       </button>
//       <CommentForm />
//       <footer>
//         {/* <button onClick={(event) => (window.location.href = "/")}>Home</button> */}
//       </footer>
//     </div>
//   );
// };

import React from "react";
// import { Link, navigate } from "@reach/router";
// import axios from "axios";
// import Construction from "../images/construction.gif";
import Dodgers from "../images/Dodgers.jpeg";
import Universal from "../images/Universal.jpeg";
import Hollywood from "../images/Hollywood.jpeg";
import CommentForm from "./CommentForm";

const HyensPage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <div>
        {/* `<img src={Construction} alt="construction" width="700" height="400" />` */}
        <h1>Hyens Home Page</h1>
        <h3>
          Welcome to Los Angeles, California! Los Angeles is one of the world
          famouse city in the world.{" "}
        </h3>
        <h3>
          Weather in Los Angeles is mostly sunny and we haev mountains and
          beaches near by. And always dry
        </h3>
      </div>
      <div>
        <p>
          World Famous Hollywood Sign is here but sadly we cant go near the
          sign.
        </p>
        <img src={Hollywood} alt="HollywoodSign" width="400" height="250" />
      </div>
      <div>
        <p>
          Dodgers world famous baseball team. Its really fun to go there and
          watch the game in person.
        </p>
        <img src={Dodgers} alt="Dodgers" width="400" height="250" />
      </div>
      <div>
        <p>
          Lets go and play with minions. Universal Studio is famous with
          minions. Its fun to visit during Holloween
        </p>
        <img src={Universal} alt="Universal" width="400" height="250" />
      </div>
      <div>
        <p>If you ever get to visit Los Angeles hit me up.</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.2740301507!2d-118.69191803815515!3d34.02016131205836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1632671529124!5m2!1sen!2sus"
          width="400"
          height="250"
          allowfullscreen=""
          loading="lazy"></iframe>
      </div>
      <button onClick={(event) => (window.location.href = "/")}>Home</button>
      <CommentForm />
      <footer>
        <button onClick={(event) => (window.location.href = "/")}>Home</button>
      </footer>
    </div>
  );
};

export default HyensPage;
