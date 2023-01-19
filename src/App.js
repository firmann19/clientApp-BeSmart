import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import "./styles/style.css";

function App() {
  return (
    <>
    <main>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />     
      </Routes>
    </main>
    </>
  );
}

export default App;
