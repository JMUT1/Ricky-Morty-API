import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Character from "./components/Character";

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

  return (
    <>
      <Navbar brand="Ricky and Morty App" />
      <div className="container mt-5">
        <Character characters={characters} />
      </div>
    </>
  );
}

export default App;
