import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Repository } from "./pages/Repository/Repository";
import { SearchPage } from "./pages/Search/Search";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/smartway-gh-search/" element={<SearchPage />} />
        <Route
          path="/smartway-gh-search/repository/:cardId"
          element={<Repository />}
        />
      </Routes>
    </Router>
  );
}

export default App;
