import React, { useState, useEffect } from 'react';
import data from '../../data/data.json';
import '../Header/Header.scss'

function Header() {
    const [currentNames, setCurrentNames] = useState([]);
    const [currentIndex, setCurrentIndex] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(generateRandomIndexes);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setCurrentNames([
            data[currentIndex[0]]?.name,
            data[currentIndex[1]]?.name,
            data[currentIndex[2]]?.name,
            data[currentIndex[3]]?.name,
            data[currentIndex[4]]?.name

        ]);
    }, [currentIndex]);

    const generateRandomIndexes = () => {
        const indexes = [];
        while (indexes.length < 5) {
            const randomIndex = Math.floor(Math.random() * data.length);
            if (!indexes.includes(randomIndex)) {
                indexes.push(randomIndex);
            }
        }
        return indexes;
    };


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
            <div className="scrolling-names">
                {currentNames.map((name, index) => (
                    <div className="name" key={index}>{name}</div>
                ))}
            </div>
            <p> Date : {date.toLocaleDateString()}</p>
        </div>
    );
}

export default Header;
