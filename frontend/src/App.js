//import logo from './logo.svg';
import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import ImageCard from "./components/ImageCard";

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;
function App() {
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]);
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages([{...data, title: word}, ...images])
        console.log(images);
      })
      .catch((err) => {
        console.log(err);
      });
    setWord("");
  };
  return (
    <div>
      <Header title="Images Gallery"></Header>
      <Search
        word={word}
        setWord={setWord}
        handleSubmit={handleSearchSubmit}
      ></Search>
      {images.length && <ImageCard image = {images[0]}/>}
    </div>
  );
}

export default App;
