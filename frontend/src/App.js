//import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";
import { useState } from "react";

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
        setImages([data,...images])
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Header title="Images Gallery" />
      <Search image={handleSearchSubmit} word={word} setWord={setWord} />
    </div>
  );
};

export default App;
