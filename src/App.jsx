import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserDetails from './pages/UserDetails';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details/:id' element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
