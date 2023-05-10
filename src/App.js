import './App.css';
import Stocks from './pages/Stocks/Stocks';
import { Route, Routes } from 'react-router-dom'
import Results from "./pages/Results/Results"
import Indexes from './pages/Indexes/Indexes';
import { useState } from "react";




function App() {

  // /stock1
  const [logo1, setLogo1] = useState([]);
  const [m1, setM1] = useState();
  const [s1, setS1] = useState([]);
  const [description1, setDescription1] = useState([]);


  // /stock2
  const [logo2, setLogo2] = useState([]);
  const [m2, setM2] = useState();
  const [s2, setS2] = useState([]);
  const [description2, setDescription2] = useState([]);


  // /stock3
  const [logo3, setLogo3] = useState([]);
  const [m3, setM3] = useState();
  const [s3, setS3] = useState([]);
  const [description3, setDescription3] = useState([]);




  const [mD, setDM] = useState(null);
  const [sD, setDS] = useState([]);




  return (
    <>
      <Routes>
        <Route path='/indexes/' element={<Indexes mD={mD} sD={sD} setDM={setDM} setDS={setDS} />} />
        <Route path='/' element={<Stocks setLogo1={setLogo1} setM1={setM1} setS1={setS1} logo1={logo1} m1={m1} s1={s1} description1 ={description1} setDescription1 ={setDescription1}
          setLogo2={setLogo2} setM2={setM2} setS2={setS2} logo2={logo2} m2={m2} s2={s2} description2 ={description2} setDescription2 ={setDescription2}
          setLogo3={setLogo3} setM3={setM3} setS3={setS3} logo3={logo3} m3={m3} s3={s3} description3 ={description3} setDescription3 ={setDescription3}  />} />
        <Route path='/results/' element={<Results logo1={logo1} m1={m1} s1={s1} description1={description1} logo2={logo2} m2={m2} s2={s2} description2={description2}
        logo3={logo3} m3={m2} s3={s3} description3={description3}/>}></Route>
      </Routes>
    </>
  );
}

export default App;
