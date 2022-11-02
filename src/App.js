import React from "react";
import "./styles.css";
import { useState } from "react";

const movieDB = {
  COMEDY: [
    { name: "Hera pheri", rating: "4.9/5" },
    { name: "Golmal series", rating: "4.5/5" },
    { name: "Free guy", rating: "4.6/5" },
    { name: "De dana dan", rating: "4.2/5" },
    { name: "No entry", rating: "4.3/5" }
  ],

  ROMANCE: [
    {
      name: "Veer zaara",
      rating: "5/5"
    },
    {
      name: "Dil wale dulhaniya le jayengne",
      rating: "4.9/5"
    },
    {
      name: "Rab ne bana di jodi",
      rating: "4.5/5"
    },
    {
      name: "Rehna hai tere dil me",
      rating: "4.7/5"
    },
    { name: "Aashiqui 2", rating: "4.4/5" }
  ],
  SUSPENSE: [
    {
      name: "Andhadhun",
      rating: "4.9/5"
    },
    {
      name: "Cutputli",
      rating: "3/5"
    },
    { name: "The gray man", rating: "4.3/5" },
    { name: "The Devil All The Time", rating: "4/5" },
    { name: "The Voyeurs", rating: "3.5/5" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("SUSPENSE");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> MOVIEHUB </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout some amazing movie. Choose genre of your wish{" "}
      </p>

      <div>
        {Object.keys(movieDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {movieDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
