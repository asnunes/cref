import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainScreen from "./components/MainScreen";
import NavBar from "./components/NavBar";
import Movie from "./components/Movie";
import Session from "./components/Session";
import Success from "./components/Success";
import GlobalStyle from "./components/GlobalStyle";
import ReturnButton from "./components/ReturnButton";

function App() {
  const [successInfo, setSuccessInfo] = useState({
    title: "",
    date: "",
    time: "",
    tickets: [],
    name: "",
    cpf: "",
  });

  return (
    <BrowserRouter>
      <GlobalStyle />
      <NavBar />
      <ReturnButton />
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/sessoes/:idMovie" element={<Movie />} />
        <Route
          path="/assentos/:idSession"
          element={
            <Session
              successInfo={successInfo}
              setSuccessInfo={setSuccessInfo}
            />
          }
        />
        <Route
          path="/sucesso"
          element={<Success successInfo={successInfo} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
