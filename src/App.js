import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

function App() {

  const [characters, setCharacters] = useState([]);

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchCharters(initialUrl);
  }, []);


  return <Navbar brand="Ricky and Morty App" />;
}

export default App;
