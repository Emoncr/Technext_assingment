import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserDetails from './pages/UserDetails';
import CreateUser from './pages/CreateUser';
import UpdateUser from './pages/UpdateUser';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details/:id' element={<UserDetails />} />
          <Route path='user/create' element={<CreateUser />} />
          <Route path='user/update/:id' element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
