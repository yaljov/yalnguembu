import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Components/NotFound/NotFound";
import Calculator from "./Projets/Caculator/Calculator";
import ChatApp from "./Projets/ChatApp/ChatApp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Home />
              <Footer />
            </div>
          }
        />
        <Route path="projects">
          <Route index element={<script>windows.href.location="/";</script>} />
          <Route path="chatapp" element={<ChatApp />} />
          <Route path="calculator" element={<Calculator />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
