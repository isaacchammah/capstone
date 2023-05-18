import Stocks from "../../components/Stocks/Stocks";
import Results from "../../components/Results/Results";
import Indexes from "../../components/Indexes/Indexes";
import { useState } from "react";
import "../../pages/Main/Main.scss";
import Home from "../../components/Home/Home";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton.js";
import Header from "../../components/Header/Header";

function Main() {

    //Home
    const [yourName, setYourName] = useState("");
    const [pName, setPName] = useState("");

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

    // /chosen index
    const [mean, setMean] = useState();
    const [risk, setRisk] = useState();
    const [indexName, setIndexName] = useState();

    // /index1
    const [mD, setMD] = useState(null);
    const [sD, setSD] = useState([]);

    // /index2
    const [mS, setMS] = useState(null);
    const [sS, setSS] = useState([]);

    //index 3
    const [mN, setMN] = useState(null);
    const [sN, setSN] = useState([]);

    //portifolio
    const [stockPortfolioMean, setStockPortfolioMean] = useState(null);
    const [stockPortfoliRisk, setStockPortfolioRisk] = useState(null);

    //show sections
    const [showIndexes, setShowIndexes] = useState(false);
    const [showStocks, setShowStocks] = useState(false);
    const [showResults, setShowResults] = useState(false);

    return (
        <>
            <Header />
            <ScrollToTopButton />
            <Home setShowIndexes={setShowIndexes} setYourName={setYourName} yourName={yourName} setPName={setPName} />
            {showIndexes && (
                <Indexes mD={mD} sD={sD} setMD={setMD} setSD={setSD} mean={mean} setMean={setMean} mS={mS} sS={sS} setSS={setSS} setMS={setMS} risk={risk} setRisk={setRisk} indexName={indexName} setIndexName={setIndexName} mN={mN} setMN={setMN} sN={sN} setSN={setSN}
                    setShowStocks={setShowStocks} youName={yourName} showStocks={showStocks}
                />)}
            {showStocks && (
                <Stocks setLogo1={setLogo1} setM1={setM1} setS1={setS1} logo1={logo1} m1={m1} s1={s1} description1={description1} setDescription1={setDescription1}
                    setLogo2={setLogo2} setM2={setM2} setS2={setS2} logo2={logo2} m2={m2} s2={s2} description2={description2} setDescription2={setDescription2}
                    setLogo3={setLogo3} setM3={setM3} setS3={setS3} logo3={logo3} m3={m3} s3={s3} description3={description3} setDescription3={setDescription3}
                    setStockPortfolioMean={setStockPortfolioMean} setStockPortfolioRisk={setStockPortfolioRisk}
                    setShowResults={setShowResults} pName={pName}
                />)}

            {showResults && (
                <Results logo1={logo1} m1={m1} s1={s1} description1={description1} logo2={logo2} m2={m2} s2={s2} description2={description2}
                    logo3={logo3} m3={m3} s3={s3} description3={description3} mean={mean} risk={risk} indexName={indexName}
                    stockPortfolioMean={stockPortfolioMean} stockPortfoliRisk={stockPortfoliRisk} pName={pName}
                />)}
        </>
    );
}

export default Main;