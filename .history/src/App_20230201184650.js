import { Routes, Route } from "react-router-dom";
import Navbar from "./components/home/Navbar";
// import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import F

function App() {
  return (
    <div className='w-full'>
      {/* <Navbar /> */}
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App;
