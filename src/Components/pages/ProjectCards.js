import React from 'react'
import CardItem from '../CardItem'
import '../CSS/Cards.css'
import './CSS/ProjectsPage.css'
import '../../App.css'

function ProjectCards() {
    return (
        <div className="project_cards_container">
           {/* <h1 className="title">PROJECTS</h1>   */}         
        <div className="cards">
            <div className="cards_container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src= 'images/Icons/PaintingPickerIcon.png'
                        text= 'UE4 project focused on painting in VR'
                        label='VR Painter'
                        path='/paintingpicker'
                        />
                        <CardItem
                        src='images/Icons/ArchitectureExplorerIcon.png'
                        text='Explore Different forms of VR Locomotion'
                        label='VR Architecture Explorer'
                        path='/architectureexplorer'
                        />
                        <CardItem 
                        src='images/Icons/ToonTanksIcon.png'
                        text='Command a tank to destroy turrets'
                        label='Toon Tanks'
                        path='/toontanks'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src='images/Icons/RenegadesLogo.jpeg'
                        text='Sword based Hero Game'
                        label='Renegade: Kai'
                        path='/Renegades'
                        />
                        <CardItem 
                        src='images/Icons/PathFinding.png'
                        text='Pathfinding Algorithm Program'
                        label='Pathfinding Visualizer'
                        path='/pathfindingvisualizer'
                        />
                        <CardItem 
                        src='images/Icons/SimpleShooterIcon.png'
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
