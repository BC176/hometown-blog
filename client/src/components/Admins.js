import axios from "axios";
import { useEffect, useState, useRef } from "react";

const DisplayAdmins = () => {
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
        // console.log(allAdmins.data.allAdmins);
      })
      .catch((err) => console.log(err));
  });

  let btnRef = useRef();

  return (
    <> 
        <h1 style={{ textAlign: "center" }}>Admins</h1>
        <div>
        {admins.length > 0 &&
          admins.map((admin, index) => {
            <table>
              <tbody>
                <tr key={index}>
                  <td>Admin ID: {admin._id}</td>
                  <td>Admin User Name: {admin.userName}</td>
                  <td>
                    <button 
                    ref={btnRef} 
                    onClick={() => 
                    deleteAdmin(admin._id)
                    }>
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>;
          })}
          </div>
      <footer>
        <button onClick={() => (window.location.href = "/")}>Home</button>
      </footer>
    </>
  ); //end return
}; // end DisplayAdmins

export default DisplayAdmins;
