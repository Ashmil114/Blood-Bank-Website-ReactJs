import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Join from './components/Join'
import MoreDetails from './components/MoreDetails'


function App() {
  

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>} ></Route>
          <Route path="/join" element={<Join/>} ></Route>
          <Route path="/person/:id" element={<MoreDetails/>} ></Route>

        </Routes>
      </BrowserRouter>
      
      
    </div>
  )
}

export default App
