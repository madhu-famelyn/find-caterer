import { Routes, Route } from "react-router-dom";

import LandingPage from "./Pages/LandingPage/Landingpage";
import CatererListingPage from "./Pages/CatererListing/CatererListingPage";
import ProfilePage from "./Pages/ProfilePage/Profile";
import AboutUs from "./Pages/About/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/caterers" element={<CatererListingPage />} />

      {/* ✅ Param name must match useParams */}
      <Route path="/profile/:catererId" element={<ProfilePage />} />

      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
}

export default App;



// import { Routes, Route } from "react-router-dom";
// import AdminPannel from "./Pages/Admin/AdminPannel/AdminPannel";

// function App() {
//   return (
//     <Routes>
//       <Route path="/admin" element={<AdminPannel />} />
//     </Routes>
//   );
// }

// export default App;
