// import { BrowserRouter, Route, Routes } from "react-router";
// import Navbar from "./Components/Navbar";
// import About from "./Pages/About";
// import Homepage from "./Pages/Homepage";
// import Shop from "./Pages/Shop";
// import Contact from "./Pages/contact";


// function Layout() {
//   const navigate = useNavigate();

//   // Function passed to Navbar
//   const handleNavigate = (path) => {
//     navigate(path);
//   };


// export default function App() {
//   return (
//   <BrowserRouter>
//    <Navbar onNavigate={handleNavigate}/>
//     <Routes>
//       <Route path="/homepage" element={<Homepage />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/shop" element={<Shop />} />
//        <Route path="/contact" element={<Contact />} />
//       <Route path="*" element={<Homepage />} />
//     </Routes>
//   </BrowserRouter>
//   );
// }
// }


import { useCallback } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Homepage from "./Pages/Homepage";
import Shop from "./Pages/Shop";

function Layout() {
  const navigate = useNavigate();

  // ✅ Stable function (prevents infinite re-renders)
  const handleNavigate = useCallback((path) => {
    navigate(path);
  }, [navigate]);

  return (
    <>
      <Navbar onNavigate={handleNavigate} />
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
