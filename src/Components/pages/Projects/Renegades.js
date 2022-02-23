import React from 'react';
import '../../../App.css';
import { Link } from 'react-router-dom';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default function BuildingEscape() {
    return (
        <div className="projectPage">
           <div className="piture_wrap">
               <h1 className="renegades_img"> Renegade: Kai</h1>
            </div>
            <section className="aboutProject">
               <h2>Project Information</h2>
               <p className='projectInfo'>Virtual Reality Sword fighting game built using Unreal Engine.</p>
               <h3>Notable Features</h3>
               <ul className='projectInfoList'>
                   <li>Survival Game Mode (currently programming)</li>
                   <li>Katana weapon made from Blender and Substance Painter</li>
               </ul>
               <h3>Lessons Learned</h3>
                <ul className='projectInfoList'>
                    <li>3D game Asset Workflow</li>
                </ul>
               <h3>Project Dificulties</h3>
                <ul className='projectInfoList'>
                    <li>Utilizing Inverse Kinematics for VR body rigging.</li>
                </ul>
                <h4>
               <Link className="social-icon-link github"
                to={{ pathname: "https://github.com/Vidssk/RenegadeKai"}}
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
