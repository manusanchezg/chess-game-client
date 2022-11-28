import ChessContainer from "./components/ChessContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState("")

  useEffect(() => {
    console.log(time)
  }, [time])
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage time={time} setTime={setTime} />} />
        <Route path="/game" element={<ChessContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
