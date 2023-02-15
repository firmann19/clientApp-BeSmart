import { Route, Routes } from "react-router-dom";
import CoursePage from "./pages/CoursePage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Service from "./pages/Service";
import "./styles/style.css";


function App() {
  return (
    <>
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="services" element={<Service />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />     
        <Route path="/course" element={<CoursePage />} />     
      </Routes>
    </main>
    </>
  );
}

export default App;
