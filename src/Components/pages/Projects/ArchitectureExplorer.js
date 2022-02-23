import React from 'react';
import '../../../App.css';
import { Link } from 'react-router-dom';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default function ArchitectureExplorer() {
    return (
        <div className="projectPage">
           <div className="piture_wrap">
               <h1 className="architecture_explorer_img"> Architecture Explorer</h1>
            </div>
            <section className="aboutProject">
               <h2>Project Information</h2>
               <p className='projectInfo'>
               Virtual Reality Locomotion Demo built using Unreal Engine. 
               You can use various forms of locomotion to explore this map.</p>
               <h3>Notable Features</h3>
               <ul className='projectInfoList'>
                    <li>Locomotion: Teleportation, climbing, walking, and blinkers.</li>
               </ul>
               <h3>Lessons Learned</h3>
                <ul className='projectInfoList'>
                    <li>Motion Sickness in VR.</li>
                    <li>Collisions in VR.</li>
                    <li>How climbing works in VR.</li>
                    <li>Faders and Timers for teleporting.</li>
                    <li>Creating Haptic Effects.</li>
                </ul>
               <h3>Project Dificulties</h3>
                <ul className='projectInfoList'>
                    <li>VR Headset movement causing collider problems.</li>
                </ul>
                <h4>
               <Link className="social-icon-link github"
                to={{ pathname: "https://github.com/Vidssk/ArchitectureExplorer"}}
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
