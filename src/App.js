import React, {} from "react";
import { NewsContextProvider } from "./NewsContext";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import News from "./components/News";
import "./App.css";
import Navbar from "./components/NavBar";

function App() {
  return (
			<div className="App">
				<Navbar/>
				<Routes>
          <Route path="/" element={<News/>} />
					<Route path="/saved" element={<News/>} />
				</Routes>
			</div>
  );
}

export default App;