import ChessContainer from "./components/ChessContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<ChessContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
