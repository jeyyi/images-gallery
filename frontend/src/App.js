//import logo from './logo.svg';
import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import ImageCard from "./components/ImageCard";
import { Container, Row, Col } from "react-bootstrap";
import Welcome from "./components/Welcome";

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
        setImages([{ ...data, title: word }, ...images]);
        console.log(images);
      })
      .catch((err) => {
        console.log(err);
      });
    setWord("");
  };

  const handleDeleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  return (
    <div>
      <Header title="Images Gallery"></Header>
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      {images.length > 0 ? (
        <Container>
          <Row xs={1} md={2} lg={3}>
            {images.map((image, i) => (
              <Col key={i} className="pb-3">
                <ImageCard
                  key={i}
                  image={image}
                  deleteImage={handleDeleteImage}
                />
              </Col>
            ))}
          </Row>
        </Container>
      ) : (
        <Welcome></Welcome>
      )}
    </div>
  );
}

export default App;
