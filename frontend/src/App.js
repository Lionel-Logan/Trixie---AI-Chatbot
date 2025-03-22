import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./Sample";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Auth />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
