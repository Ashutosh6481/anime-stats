import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";


//styles
import "./Styles/header.css";
import "./Styles/App.css";
import "./Styles/card.css";
import "./Styles/Home.css";
import "./Styles/Anime.css";
import Anime from "./components/Anime";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/anime/:id" element={<Anime/>}/>
      </Routes>
    </Router>
  );
}

export default App;
