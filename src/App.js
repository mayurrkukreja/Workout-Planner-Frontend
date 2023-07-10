import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages and components
import Navbar from './components/Navbar'
import Home from './pages/Home'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <div className="pages">
          <Routes>
            <Route path="https://workout-planner-frontend.vercel.app" element={<Home/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
