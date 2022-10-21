//import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";
import { useState } from "react";
import ImageCard from "./components/ImageCard";
import { Container, Row, Col } from "react-bootstrap";
import logo from "./images/logo1.png"
import { ReactComponent as Logo } from "./images/logo.svg";

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;
const App = () => {
  const [word, setWord] = useState("");
  const [images,setImages]=useState([])
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log(word);
    fetch(
      `https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`
    )
      .then((result) => result.json())
      .then((data) => { 
        console.log(word)
        setImages([{...data,title: word},...images])
        console.log(data['urls']['small'])
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleDeleteImage=(id)=>{
    setImages(images.filter((image)=>image.id!==id))
  }
  return (
    <div>
      <Header title="Images Gallery" />
      <Logo className="logo"></Logo>
      <Search image={handleSearchSubmit} word={word} setWord={setWord} />
      <Container className="mt-5">
          <Row xs={1} md={2} lg={3}>
              {images.map((image,i)=>(
                 <Col key={i} className="pb-4">
                <ImageCard image={image} deleteImage={handleDeleteImage}/>
                </Col>
              ))
              }
      </Row>
      </Container>
    </div>  
  );  
};

export default App;
