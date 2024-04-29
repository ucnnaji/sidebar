import React from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import Navbar from "./components/Navbar";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  HashRouter as Router,
  Link,
  Outlet,
 
  createRoutesFromElements,
} from "react-router-dom";


import News from "./routes/News";
import People from "./routes/People";
import UpcomingEvents from "./routes/UpcomingEvents";
import PublishedArticle from "./routes/PublishedArticle";
import Workshops from "./routes/Workshops";
import Home from "./routes/Home";




const AppLayout = () => (
  <>
    <div>
      
    <Navbar />
    </div>
    
    <Outlet />
   
  </>
);

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="News" element={<News />} />
        <Route path="People" element={<People />} />
        <Route path="PublishedArticle" element={<PublishedArticle />} />
        <Route path="UpcomingEvents" element={<UpcomingEvents />} />
        <Route path="Workshops" element={<Workshops />} />
      </Route>
    </Routes>
  </Router>
);

createRoot(document.getElementById("root")).render(<App />);

