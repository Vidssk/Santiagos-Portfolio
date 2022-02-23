import React from 'react';
import '../../../App.css';
import { Link } from 'react-router-dom';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default function BuildingEscape() {
    return (
        <div className="projectPage">
           <div className="piture_wrap">
               <h1 className="toon_tanks_img"> Toon Tanks</h1>
            </div>
            <section className="aboutProject">
               <h2>Project Information</h2>
               <p className='projectInfo'>3rd-Person Tank game.  The objective is to destroy all enemy turrets before 
               your tank's destroyed.</p>
               <h3>Lessons Learned</h3>
                <ul className='projectInfoList'>
                    <li>Creating Actor class to be used as a projectile base class.</li>
                    <li>Creating GameMode classed.</li>
                    <li>Creating Health Component.</li>
                    <li>Creating Widget Blueprints.</li>
                    <li>Spawning Actors at runtime.</li>
                    <li>Spawning Particle System.</li>
                    <li>Understanding UPROPERTY Specifiers.</li>
                    <li>Using Dynamic Delegates.</li>
                    <li>Using Timers for events based on elapsed time.</li>
                    <li>Utilizing the Reflection System in Unreal for Casting.</li>
                </ul>
               <h3>Project Dificulties</h3>
                <ul className='projectInfoList'>
                    <li>Draw calls causing FrameRate to drop dues to spline meshes.</li>
                    <li>Creating unique ID's for each save slot.</li>
                </ul>
                <h4>
               <Link className="social-icon-link github"
                to={{ pathname: "https://github.com/Vidssk/ToonTanks"}}
                target="_blank"
                aria-label='GitHub'
                >
                <FontAwesomeIcon icon={faGithub}/>
                </Link>  GitHub
                </h4>
            </section>
        </div>
    )
}
