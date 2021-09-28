import axios from "axios";
import { useEffect, useState } from "react";
// import { Link } from "@reach/router";

const DisplayAdmins = (props) => {
  const [admins, setAdmins] = useState([]);

  const removeFromDom = (adminID) => {
    setAdmins(admins.filter((admin) => admin._id !== adminID));
  };

  const deleteAdmin = (id) => {
    axios
      .delete(`http://localhost:8000/api/${id}`)
      .then((res) => {
        removeFromDom(id);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/admins")
      .then((allAdmins) => {
        setAdmins(allAdmins.data.allAdmins);
        // console.log(allAdmins);
      })
      .catch((err) => console.log(err));
  });

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>Admins</h1>
        {admins.length > 0 &&
          admins.map((admin, index) => {
            <table>
              <tbody>
                <tr key={index}>
                  <td>{admin._id}</td>
                  <td>{admin.userName}</td>
                  <td>
                    <button onClick={() => deleteAdmin(admin._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>;
          })}
      </div>
      <footer>
        <button
          style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
          onClick={(e) => (window.location.href = "/")}>
          Home
        </button>
      </footer>
    </>
  ); //end return
}; // end DisplayAdmins

export default DisplayAdmins;
