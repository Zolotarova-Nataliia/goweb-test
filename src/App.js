import { Suspense } from "react";
import "./App.css"
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./views/Home";

function App() {
  return (
    <div>
      <Header/>
      <Suspense>
        <Routes>
          <Route exact path="/" element={<Home/>} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
