import './App.css';
import { Route, Routes } from 'react-router-dom'
import Main from "../src/pages/Main/Main"

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
