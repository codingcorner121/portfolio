import React from "react";

import './Project.css';

function Project (){
    return (
        <div className="project section">
            <h2>Project</h2>
            <div className="project_grid_box">
                <div className="project_box">
                    <img className="project_img" src="./Images/experience.jpg" alt="" />
                    <div className="project_content_box">
                        <h3>dice</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <button href="https://react-dice-game121.netlify.app/">DEMO</button>
                    </div>
                    
                </div>

                <div className="project_box">
                    <img className="project_img" src="./Images/experience.jpg" alt="" />
                    <div className="project_content_box">
                        <h3>Crypto</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <button href="https://tranquil-alpaca-d4afc3.netlify.app/">DEMO</button>
                    </div>
                    
                </div>

                <div className="project_box">
                    <img className="project_img" src="./Images/experience.jpg" alt="" />
                    <div className="project_content_box">
                        <h3>Finance</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <button href="https://html-finance.netlify.app/">DEMO</button>
                    </div>
                    
                </div>

                <div className="project_box">
                    <img className="project_img" src="./Images/experience.jpg" alt="" />
                    <div className="project_content_box">
                        <h3>Project Name</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <button>DEMO</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Project;