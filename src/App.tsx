import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Repository } from "./pages/Repository/Repository";
import { SearchPage } from "./pages/Search/Search";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/repository/:cardId" element={<Repository />} />
      </Routes>
    </Router>
  );
}

export default App;
