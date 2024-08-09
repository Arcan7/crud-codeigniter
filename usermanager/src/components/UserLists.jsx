import React, { useState, useEffect } from "react";
import { MdDelete, MdEdit, MdAdd } from "react-icons/md";
import Alert from "./Alert";
import ConfirmDelete from "./ConfirmDelete";
import axios from "axios";
import { Link } from "react-router-dom";

const UserLists = () => {
  const [users, setUsers] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  // const [alert, setAlert] = useState({
  //   show: false,
  //   type: '',
  //   message: '',
  // });

  // const showAlert = (type, message) => {
  //   setAlert({
  //     show: true,
  //     type: type,
  //     message: message,
  //   });

  //   setTimeout(() => {
  //     setAlert({ ...alert, show: false });
  //   }, 3000); // Hide after 3 seconds
  // };

  // const handleSuccess = () => {
  //   showAlert('success', 'Operation successful!');
  // };

  // const handleError = () => {
  //   showAlert('error', 'Something went wrong!');
  // };

  const handleDeleteClick = (user) => {
    setSelectedItem(user);
    setShowConfirm(true);
  };

  const handleConfirmDelete = () => {
    if (selectedItem) {
      deleteUsers(selectedItem.id) 
      setShowConfirm(false);
      setSelectedItem(null);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const users = await axios.get("http://localhost:8080/users");
    setUsers(users.data);
  };

  const deleteUsers = async (id) => {
    await axios.delete(`http://localhost:8080/users/${id}`);
    getUsers();
  };

  return (
    <div>
      <h1 className="text-center text-2xl text-yellow-200 my-10">
        Tous les utilisateurs
      </h1>
      <Link to="/add" className="button is-primary mt-5 mb-8">
        Nouveau un utilisateur <MdAdd className="ml-2 mt-1 size-6" />
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead >
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Email</th>
            <th width="150">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>

              <td className="flex gap-x-5">
                <Link
                  to={`/edit/${user.id}`}
                  // className="button is-small is-info"
                >
                  <MdEdit className="text-blue-600 size-6 hover:scale-90 hover:text-blue-400" />
                </Link>
                <div
                  onClick={() => handleDeleteClick(user)}
                  // className="button is-small is-danger"
                >
                  <MdDelete className="text-red-600 size-6  hover:scale-90 hover:text-red-400 cursor-pointer" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ConfirmDelete
        show={showConfirm}
        onClose={() => setShowConfirm(false)}
        onConfirm={handleConfirmDelete}
        username={selectedItem ? selectedItem.username : ''}
      />
    </div>
  );
};

export default UserLists;
