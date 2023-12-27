import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import ArticleDetailsPage from "./pages/articleDetails/ArticleDetailsPage.jsx";
function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<ArticleDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
