import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
