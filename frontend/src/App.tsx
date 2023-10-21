import React from 'react';
import './App.css';
import {Home} from "./pages/Home";
import {Contact} from "./pages/Contact";
import {About} from "./pages/About";
import {News} from "./pages/News";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    const home = "/";
    const news = "/news";
    const about = "/about";
    const contact = "/contact";

  return (
    <div className="App">
      <header className="App-header">
        <a href={home} className="App-link">Domů</a>
        <a href={news} className="App-link">Novinky</a>
        <a href={about} className="App-link">O mě</a>
        <a href={contact} className="App-link">Kontakt</a>
      </header>
        <BrowserRouter>
            <Routes>
                <Route path={home} element={<Home />}></Route>
                <Route path={news} element={<News />}></Route>
                <Route path={about} element={<About />}></Route>
                <Route path={contact} element={<Contact />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
