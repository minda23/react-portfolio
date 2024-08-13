import React from 'react';
import "./MainSection.css"

const MainSection = () => {
    return (
        <div id="Main">
            <div className="Main">
                <div className="text_introduction" id="text_introduction">
                    <h1>Lukáš Minda</h1>
                    <h2 id="heading">JUNIOR FRONTEND DEVELOPER & CODER</h2>
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
