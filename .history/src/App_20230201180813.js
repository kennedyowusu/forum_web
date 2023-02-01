import { Routes, Route } from "react-router-dom";
import Navbar from "./components/home/Navbar";
// import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <div className='w-full'>
      <Navbar />
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App;
