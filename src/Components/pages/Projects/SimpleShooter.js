import React from 'react';
import '../../../App.css';
import { Link } from 'react-router-dom';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default function SimpleShooter() {
    return (
        <div className="projectPage">
           <div className="piture_wrap">
           {/*<video src="/videos/video-2.mp4" autoPlay loop muted />*/}
               <h1 className="simple_shooter_img"> Simple Shooter </h1>
            </div>
            <section className="aboutProject">
               <h2>Project Information</h2>
               <p className='projectInfo'> 3rd-Person Shooter game build using Unreal Engine.  
               Enemy AI will chase you down, take them out to win.</p>
               <h3>Lessons Learned</h3>
                <ul className='projectInfoList'>
                    <li>Skeletal Animations.</li>
                    <li>Using Animation Blueprints.</li>
                    <li>Connecting Animations to gameplay.</li>
                    <li>using sockets to interact with meshes.</li>
                    <li>Making Gun Actors.</li>
                    <li>Spawning Particle Effects.</li>
                    <li>Using Behaviour Trees to create smart AI.</li>
                </ul>
               <h3>Project Dificulties</h3>
                <ul className='projectInfoList'>
                    <li>Figuring out how Behaviour Trees and Blackboards worked.</li>
                </ul>
                <h4>
               <Link className="social-icon-link github"
                to={{ pathname: "https://github.com/Vidssk"}}
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
