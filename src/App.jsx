import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import PCBookingForm from "./components/PCBookingForm";
import FoodMenu from "./components/FoodMenu";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/book-pc" element={<PCBookingForm />} />
            <Route path="/menu" element={<FoodMenu />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;