import './App.css';
import Stocks from './pages/Stocks/Stocks';
import { Route, Routes } from 'react-router-dom'
import Results from "../src/components/Results/Results"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Stocks />} />
        <Route path='/results/' element={<Results />}></Route>
      </Routes>
    </>
  );
}

export default App;
