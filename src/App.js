import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages and components
import Navbar from './components/Navbar'
import Home from './pages/Home'
const baseUrl = 'https://workout-planner-backend.onrender.com/';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
