import React from 'react'
import CardItem from '../CardItem'
import '../CSS/Cards.css'
import './CSS/ProjectsPage.css'
import '../../App.css'
import ArchitectureExplorerIcon from './Icons/ArchitectureExplorerIcon.png';
import PaintingPickerIcon from './Icons/PaintingPickerIcon.png';
import PathfindingIcon from './Icons/PathFinding.png';
import RenegadesLogo from './Icons/RenegadesLogo.jpeg';
import SimpleShooterIcon from './Icons/SimpleShooterIcon.png';
import ToonTanksIcon from './Icons/ToonTanksIcon.png';
function ProjectCards() {
    return (
        <div className="project_cards_container">
           {/* <h1 className="title">PROJECTS</h1>   */}         
        <div className="cards">
            <div className="cards_container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src= {PaintingPickerIcon}
                        text= 'UE4 project focused on painting in VR'
                        label='VR Painter'
                        path='/paintingpicker'
                        />
                        <CardItem
                        src={ArchitectureExplorerIcon}
                        text='Explore Different forms of VR Locomotion'
                        label='VR Architecture Explorer'
                        path='/architectureexplorer'
                        />
                        <CardItem 
                        src={ToonTanksIcon}
                        text='Command a tank to destroy turrets'
                        label='Toon Tanks'
                        path='/toontanks'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src={RenegadesLogo}
                        text='Sword based Hero Game'
                        label='Renegade: Kai'
                        path='/Renegades'
                        />
                        <CardItem 
                        src={PathfindingIcon}
                        text='Pathfinding Algorithm Program'
                        label='Pathfinding Visualizer'
                        path='/pathfindingvisualizer'
                        />
                        <CardItem 
                        src={SimpleShooterIcon}
                        text='Shoot and kill all enemy AI to win'
                        label='Simple Shooter'
                        path='/simpleshooter'
                        />
                        {/*<CardItem 
                        src='images/Icons/BuildingEscapeIcon.png'
                        text='Escape the Building to win'
                        label='Building Escape'
                        path='/buildingescape'
                    />*/}
                    </ul>

                </div>
            </div>
        </div>
    </div>
    )
}

export default ProjectCards
