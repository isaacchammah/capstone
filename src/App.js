import './App.css';
import Stocks from './pages/Stocks/Stocks';
import { Route, Routes } from 'react-router-dom'
import Results from "./pages/Results/Results"
import Indexes from './pages/Indexes/Indexes';

function App() {
  return (
    <>
      <Routes>
        <Route path='/indexes/' element={<Indexes />} />
        <Route path='/' element={<Stocks />} />
        <Route path='/results/' element={<Results />}></Route>
      </Routes>
    </>
  );
}

export default App;
