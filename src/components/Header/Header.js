import React, { useState, useEffect } from 'react';
import data from '../../data/data.json';
import '../Header/Header.scss'

function Header() {

    //stock symbols in the header 
    const [currentNames, setCurrentNames] = useState([]);
    const [currentIndex, setCurrentIndex] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(generateRandomIndexes);
        }, 1400);

        return () => clearInterval(interval);
    }, []);


    //number of symbols displayed
    useEffect(() => {
        setCurrentNames([
            data[currentIndex[0]]?.symbol,
            data[currentIndex[1]]?.symbol,
            data[currentIndex[2]]?.symbol,
            data[currentIndex[3]]?.symbol,
            data[currentIndex[4]]?.symbol,
            data[currentIndex[5]]?.symbol,
            data[currentIndex[6]]?.symbol,
            data[currentIndex[7]]?.symbol,
            data[currentIndex[8]]?.symbol,
            data[currentIndex[9]]?.symbol,
            data[currentIndex[10]]?.symbol,
            data[currentIndex[11]]?.symbol,
        ]);
    }, [currentIndex]);

    const generateRandomIndexes = () => {
        const indexes = [];
        while (indexes.length < 12) {
            const randomIndex = Math.floor(Math.random() * data.length);
            if (!indexes.includes(randomIndex)) {
                indexes.push(randomIndex);
            }
        }
        return indexes;
    };

    // date and time info
    var [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return function cleanup() {
            clearInterval(timer);
        };
    }, []); // Empty dependency array to run the effect only once


    return (
        <div className="names-container">
            <p> Time : {date.toLocaleTimeString()}</p>
            <div className="names-container__scrolling-names">
                {currentNames.map((name, index) => (
                    <div className="name" key={index}>{name}</div>
                ))}
            </div>
            <p className='names-container__date'> Date : {date.toLocaleDateString()}</p>
        </div>
    );
}

export default Header;
