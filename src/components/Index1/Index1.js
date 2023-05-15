import React from "react";
import "../Index1/Index1.scss"

function Index1({ }) {

    return (
        <>

            <section className="index-card">
                <h1 className="index-card__name">Dow Jones</h1>
                
                 <p className="index-card__text">The Dow Jones Industrial Average (DJIA) is a stock market index that tracks 30 large, publicly-owned blue-chip companies trading on the New York Stock Exchange (NYSE) and Nasdaq. The Dow Jones is named after Charles Dow, who created the index in 1896 along with his business partner, Edward Jones. Also referred to as the Dow 30, the index is considered to be a gauge of the broader U.S. economy. </p>

                <h4 className="index-card__subheader" >Key takeaways </h4>

                <ul className="index-card__takeaways">
                    <li>The Dow Jones Industrial Average is a widely-watched benchmark index in the U.S. for blue-chip stocks.</li>
                    <li>The index was created by Charles Dow in 1896 to serve as a proxy for the broader U.S. economy.</li>
                    <li>The DJIA's composition can change over time based on economic trends.</li>
                    <li>The Dow Divisor is a constant that was created to address the simple average issue.</li>
                </ul>
            </section>

        </>
    );
}

export default Index1;


