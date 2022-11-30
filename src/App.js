import ChessContainer from "./components/ChessContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(0)

  function setPlayingTime(t) {
    const toMinutes = 60
    t = Number(t.split(" ")[0])
    setTime(t * toMinutes)
  }

  useEffect(() => {

  }, [time])
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage setPlayingTime={setPlayingTime} />} />
        <Route path="/game" element={<ChessContainer time={time}/>} />
      </Routes>
    </Router>
  );
}

export default App;
