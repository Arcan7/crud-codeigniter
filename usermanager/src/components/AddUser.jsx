import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TextFields from "./TextFields";

const AddUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    console.log(username,email)
    try {
      await axios.post("http://localhost:8080/users", 
      {
          username: username,
          email: email,
      }, 
      {
          headers: {
              'Content-Type': 'application/json'
          }
      });

      navigate("/");
  } catch (error) {
      console.error("There was an error!", error);
  }

  };

  return (
    <div className="mt-10 ">
      <h1 className="text-center text-2xl text-yellow-200 mb-10">
        Ajouter un nouveau utilisateur
      </h1>
      <form onSubmit={saveUser} className="m-auto w-[500px]">
        <TextFields
          label={"Nom"}
          type="text"
          placeholder="John doe"
          setValue={setUsername}
        />

        <TextFields
          label={"Email"}
          type="text"
          placeholder="john@doe.com"
          setValue={setEmail}
        />


        <div className="field my-5">
          <button className="button is-primary">Enregistrer</button>&nbsp;
          <button className="button is-warning" onClick={() => navigate("/")}>
            Annuler
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddUser;
