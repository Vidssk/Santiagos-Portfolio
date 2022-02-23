import React from 'react';
import '../../../App.css'
import { Link } from 'react-router-dom';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function PathFindingVisualizer() {
    return (
        <div className="projectPage">
           <div className="piture_wrap">
               <h1 className="path_finding_img"> Pathfinding Visualizer</h1>
            </div>
            <section className="aboutProject">
               <h2>Project Information</h2>
               <p className='projectInfo'> Pathfinding Visualizer is a React based web application.
               Crates a graph that calculates the shortest route between two points.</p>
               <h3>Notable Features</h3>
               <ul className='projectInfoList'>
                   <li>Pathfinding Algorithms: A*Star</li>
                   <li>Walls: block out nodes</li>
               </ul>
               <h3>My Role</h3>
                <ul className='projectInfoList'>
                    <li>Animating a graph based utilizing React and CSS.</li>
                </ul>
               <h3>Project Dificulties</h3>
                <ul className='projectInfoList'>
                    <li>Resizing node graph to take into account different screen sizes.</li>
                </ul>
                <h4>
               <Link className="social-icon-link github"
                to={{ pathname: "https://github.com/Vidssk/Pathfind_Visualizer"}}
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
