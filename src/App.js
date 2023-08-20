import NavBar from "./components/NavBar";
import CRUDoperation from "./components/CRUDoperation";
import AllUsers from "./components/AllUsers";
import AddUsers from "./components/AddUsers";
import EditUsers from "./components/EditUser";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<CRUDoperation />} />
        <Route path="/all" element={<AllUsers />} />
        <Route path="/add" element={<AddUsers />} />
        <Route path="/edit/:id" element={<EditUsers/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
