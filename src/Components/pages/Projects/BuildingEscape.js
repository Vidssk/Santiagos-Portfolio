import React from 'react';
import '../../../App.css';
import { Link } from 'react-router-dom';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function BuildingEscape() {
    return (
        <div className="projectPage">
           <div className="piture_wrap">
               <h1 className="building_escape_img"> Building Escape</h1>
            </div>
            <section className="aboutProject">
               <h2>Project Information</h2>
               <p className='projectInfo'> Building Escape is a first person escape room game built using Unreal Engine.</p>
               <h3>Lessons Learned</h3>
               <ul>
                   <li>Utilizing Trigger Volumes</li>
                   <li></li>
               </ul>
               <Link className="social-icon-link github"
                to={{ pathname: "https://github.com/Vidssk"}}
                target="_blank"
                aria-label='GitHub'>
                <FontAwesomeIcon icon={faGithub}/>
                </Link>                
                </section>
        </div>
    )
}
