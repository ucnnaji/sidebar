import React from "react";
import { createRoot } from "react-dom/client";
<<<<<<< HEAD
import "./App.css";
import Navbar from "./components/Navbar";
=======
>>>>>>> c8cca45fc2d1facda37cca0195732bb8dde07c01
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
<<<<<<< HEAD


=======
>>>>>>> c8cca45fc2d1facda37cca0195732bb8dde07c01
import News from "./routes/News";
import People from "./routes/People";
import UpcomingEvents from "./routes/UpcomingEvents";
import PublishedArticle from "./routes/PublishedArticle";
import Workshops from "./routes/Workshops";
import Home from "./routes/Home";

<<<<<<< HEAD

=======
import Navbar from "./components/Navbar";
import "./App.css";
>>>>>>> c8cca45fc2d1facda37cca0195732bb8dde07c01


const AppLayout = () => (
  <>
<<<<<<< HEAD
    <div>
      
    <Navbar />
    </div>
    
    <Outlet />
   
=======
    <Navbar />
    <Outlet />
>>>>>>> c8cca45fc2d1facda37cca0195732bb8dde07c01
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

