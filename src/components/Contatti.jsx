import axios from "axios";
import { useEffect, useState } from "react";

function Contatti() {
  const [personaggi, setContatti] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/users")
      .then((response) => {
        setContatti(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Lista Personaggi</h1>
      <ul>
        {personaggi.map((persona) => (
          <li key={persona.id}>
            <p>Nome Contattoo:{persona.username}</p>
            <p>email:{persona.email}</p>
            <p>{persona.phone}</p>
            <p>Città sede operativa:{persona.address.city}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contatti;