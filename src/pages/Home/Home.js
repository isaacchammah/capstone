import "../Home/Home.scss"
import logo from "../../assets/Images/logo3.png";
import number1 from "../../assets/Images/number 1.webp";
import number2 from "../../assets/Images/number 2.webp";
import number3 from "../../assets/Images/number 3.webp";
import video from "../../assets/Videos/logo.mp4";

function Home({ setShowIndexes, yourName, setYourName, setPName }) {
    const handleHome = () => {
        setShowIndexes(true);
        setPName(yourName.charAt(0).toUpperCase() + yourName.slice(1));
    }

    return (
        <>
            <div>
                <img className="home__logo" src={logo} alt='logo' />
                <p className="home__header"> The financial simulator that allows you to select a market index and create a portfolio of three stocks. It uses data from the past 10 years to help you determine if your portfolio has outperformed the market.</p>
            </div>

            <div className="hero-instructions">

                <div className="hero-instructions__instruction">
                    <div className="hero-instructions__header ">
                        <img className="hero-instructions__numbers" src={number1} alt='logo' />
                        <p className="hero-instructions__title">Select the market index you intend to beat</p>
                    </div>
                    <p className="hero-instructions__description"> A market index is a hypothetical portfolio of investment holdings that represents a segment of the financial market. In this section you get to choose between the 3 most market indexesin the US market. Your goal is to try to beat this market index creating a tock portfolio that has a higher return and a lower volatility</p>
                </div>

                <div className="hero-instructions__instruction">
                    <div className="hero-instructions__header">
                        <img className="hero-instructions__numbers" src={number2} alt='logo' />
                        <p className="hero-instructions__title">Select 3 stocks to create your portfolio</p>
                    </div>
                    <p className="hero-instructions__description"> A stock represents a share in the ownership of a company, including a claim on the company's earnings and assets. Here you will select 3 stocks, have the chance to analyze their quantitative and qualitative data and decide the % you want to invest in each of them  </p>
                </div>

                <div className="hero-instructions__instruction">
                    <div className="hero-instructions__header ">
                        <img className="hero-instructions__numbers" src={number3} alt='logo' />
                        <p className="hero-instructions__title">Did you beat the market?</p>
                    </div>
                    <p className="hero-instructions__description"> Check if you were able to create a portfolio that had a higher average monthly return and a lower volatility than the market onver the past 10 years </p>
                </div>

            </div>

            <div className="button">
                <div className="button__container">
                    <button className="button__home" style={{ width: "250px" }} onClick={handleHome}>Let's get started</button>
                </div>
                <input
                    className="form-field"
                    type="text"
                    id="symbol"
                    name="symbol"
                    placeholder="Please tell me your name"
                    value={yourName}
                    onChange={(e) => setYourName(e.target.value)}
                />
            </div>


            <div className="bottom-wave">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg>
            </div>
        </>
    )
}

export default Home;