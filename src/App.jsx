import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import ContactUS from "./ContactUS";
import Nation from "./Nation";
import Science from "./Science";
import World from "./World";
import Home from "./Home";
import Technology from "./Technology";
import Sport from "./Sport";
import Health from "./Health";
import Entertainment from "./Entertainment";
import Buisness from "./Buisness";
import NewsMonkey from "./NewsMonkey";
import PageNotFound from "./pageNotFound";

export default function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />  
          <Route path="NewsMonkey" element={<NewsMonkey />} /> 
          <Route path="about" element={<About />} />
          <Route path="contactus" element={<ContactUS />} />
          <Route path="nation" element={<Nation />} />
          <Route path="science" element={<Science />} />
          <Route path="world" element={<World />} />
          <Route path="technology" element={<Technology />} />
          <Route path="sport" element={<Sport />} />
          <Route path="health" element={<Health />} />
          <Route path="entertainment" element={<Entertainment />} />
          <Route path="business" element={<Buisness />} />
          <Route path="*" element={<PageNotFound />} />
          </Route>
      </Routes>
    </Router>
  );
}
