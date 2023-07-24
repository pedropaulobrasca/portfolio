import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HomeChallengesPage from "./pages/HomeChallenges";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/challenges" element={<HomeChallengesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
