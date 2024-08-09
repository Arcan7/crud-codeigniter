import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import TextFields from "./TextFields";

const EditUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  const updateUser = async (e) => {
    e.preventDefault();

    alert(id)
    await axios.put(`http://localhost:8080/users/${id}`, {
      username: username,
      email: email,
    },{
      headers: {
          'Content-Type': 'application/json'
      }
  });
    navigate("/");
  };

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/users/${id}`);
      setUsername(response.data.username);
      setEmail(response.data.email);
    } catch (error) {
      console.error("Erreur lors de la récupération de l'utilisateur :", error);
    }
  };
  

  return (
    <div className="mt-10">
      <h1 className="text-center text-2xl text-yellow-200 mb-10">
        Modifier cet utilisateur
      </h1>
      <form onSubmit={updateUser} className="m-auto w-[500px]">
        <TextFields
          label={"Nom"}
          type="text"
          placeholder="John doe"
          setValue={setUsername}
          value={username}
        />

        <TextFields
          label={"Email"}
          type="text"
          placeholder="john@doe.com"
          setValue={setEmail}
          value={email}
        />

        <div className="field my-5">
          <button className="button is-primary">Modifier</button>&nbsp;
          <button className="button is-warning" onClick={() => navigate("/")}>
            Annuler
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
