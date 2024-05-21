import "./App.css";
import About from "./component/About";
import Contact from "./component/Contact";
import Gallery from "./component/Gallery";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Team from "./component/Team";
import AdviceSection from "./component/Advice";
import Service from "./component/Service";
import Articles1 from "./component/Articles1";
import Articles2 from "./component/Articles2";
import Articles3 from "./component/Articles3";
import News from "./component/news";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./page/Admin";
import AdminDashboard from "./page/AdminDashboard";
import Profile from "./page/Profile";
import Register from "./page/Register";
import Login from "./page/Login";
import AddProducts from "./page/AddProducts";
import Orders from "./page/Orders";
import Appointment from "./page/Appointment";

function App() {
  return (
    <BrowserRouter>
      <div className="app bg-black overflow-y-hidden">
        <Navbar />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/advice" element={<AdviceSection />} />
          <Route path="/service" element={<Service />} />
          <Route path="/articles1" element={<Articles1 />} />
          <Route path="/articles2" element={<Articles2 />} />
          <Route path="/articles3" element={<Articles3 />} />
          <Route path="/news" element={<News />} />

          <Route path="/admin" element={<Admin />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/addproducts" element={<AddProducts />} />
          <Route path="/orders" element={<Orders />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/bookappointment" element={<Appointment />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
