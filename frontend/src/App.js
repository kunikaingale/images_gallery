//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import { useState } from 'react';


const App=()=> {
  const [word,setWord]=useState('');
  const handleSearchSubmit=(event)=>{
    event.preventDefault()
    console.log(word)
  }
  console.log(word)
  return (
    <div>
      <Header title="Images Gallery"/>
      <Search image={handleSearchSubmit} word={word} setWord={setWord}/>
    </div>
  );
}

export default App;
