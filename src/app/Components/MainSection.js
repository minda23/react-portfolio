"use client";
import React from 'react';
import "./MainSection.css";
import { useState, useEffect } from 'react';


const MainSection = () => {
    const fullTitle = "JUNIOR FRONTEND DEVELOPER & CODER"
    const [title, setTitle] = useState(""); // counter je vlastnosť čo je nula, setCounter je funkcia na zmenu toho countera
    const [counter, setCounter] = useState(0);
    useEffect(() => setTitle(title + " " + fullTitle[counter]), [counter])// fulltitle je premmenna z riadka 8
    // set title je prvy parameter counter je druhy parameter a ten useefect vlastne vola že ked sa niečo zmeni na 1 alebo 2 tak bude volat
    // stale ako sa meni ten counter sa vola ta funkcia useEffect , može tam byť aj counter 2  a tiež sa bude volat useEffect
    // čo sa stane že klikneme na ten gombik, tak vlastne sa cez ten set counter
    // aktualizuje useStae{0} na useState{1}
    return (
        <div id="Main">
            <button onClick={() => setCounter(counter + 1)}>Klikaj</button>
            {counter}
            <div className="Main">
                <div className="text_introduction" id="text_introduction">
                    <h1>Lukáš Minda</h1>
                    <h2 id="heading">{title}</h2>
                    <div className="icons" id="icons">
                        <a href="https://github.com/minda23" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/luk%C3%A1%C5%A1-minda-b4a756119/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="mailto:someone@example.com">
                            <i className="fa fa-envelope"></i>
                        </a>
                    </div>
                </div>
            </div>

            <a href="#description" className="arrow arrow-first arrow_stop" id="arrow_scroll"></a>
        </div>
    );
};

export default MainSection;
