import React, { Suspense } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Components/Home/Home";
// import Footer from "./Components/Footer/Footer";
const Footer = React.lazy(() => import("./Components/Footer/Footer"));
const Home = React.lazy(() => import("./Components/Home/Home"));
// import NotFound from "./Components/NotFound/NotFound";
// import Calculator from "./Projets/Caculator/Calculator";
// import ChatApp from "./Projets/ChatApp/ChatApp";
const Loader = () => {
  return (
    <div className="loader-page">
      <h1 className="loader-text">Loading...</h1>
    </div>
  );
};
function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route
    //       path="/"
    //       element={
    <Suspense fallback={<Loader />}>
      <div>
        <Home />
        <Footer />
      </div>
    </Suspense>

    // }
    // />
    //     <Route path="projects">
    //       <Route index element={<script>windows.href.location="/";</script>} />
    //       <Route path="chatapp" element={<ChatApp />} />
    //       <Route path="calculator" element={<Calculator />} />
    //     </Route>
    //     <Route path="*" element={<NotFound />} />
    //   </Routes>
    // </BrowserRouter>
  );
}
export default App;
