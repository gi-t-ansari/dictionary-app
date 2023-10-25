import "./styles.css";
import React, { useState } from "react";

const dictionary = {
  html: "HTML is the standard markup language for Web pages.",
  css: "CSS is the language we use to style an HTML document.",
  javascript: "JavaScript is the programming language of the Web.",
  bootstrap:
    "Bootstrap utilizes Sass for a modular and customizable architecture.",
  react: "A JavaScript library for building user interfaces."
};

export default function App() {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");

  const getWord = (e) => {
    setWord(e.target.value);
  };

  const search = () => {
    setMeaning(dictionary[word.toLowerCase()]);
  };

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <h2>Write a word to get it's short description.</h2>
      <input
        type="text"
        placeholder="Search for a word"
        onChange={getWord}
        value={word}
      />
      <button onClick={search}>Search</button>
      {meaning && (
        <div>
          <h3 style={{ textAlign: "left" }}>Definition:</h3>
          <p>{meaning}</p>
        </div>
      )}
    </div>
  );
}
