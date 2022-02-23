import React from 'react'
import CardItem from '../CardItem'
import '../CSS/Cards.css'
import './CSS/ProjectsPage.css'
import '../../App.css';

function CodingChallanges() {
    return (
        <div className="project_cards_container">
            <h1 className="title">CODING CHALLENGES</h1>            
        <div className="cards">
            <div className="cards_container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src='images/img-9.jpeg'
                        text='4-Player Co-op Wave based Hero Game'
                        label='Renegades'
                        path='/Renegates'
                        />
                        <CardItem 
                        src='images/ToonTanksPic.png'
                        text='Command a tank to destroy turrets'
                        label='ToonTanks Game'
                        path='/toontanks'
                        />
                        <CardItem 
                        src='images/SimpleShooterPic.png'
                        text='Shoot and kill all enemy AI to win'
                        label='Simple Shooter Game'
                        path='/simpleshooter'
                        
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src='images/img-9.jpeg'
                        text='UE4 project focused on various forms of VR locomotion'
                        label='VR Architecture Visualizer'
                        path='/architecturevisualizer'
                        />
                        <CardItem 
                        src='images/img-9.jpeg'
                        text='VR Painting Game that saves and loads different Canvases'
                        label='VR Light Painter Game'
                        path='/lightpainter'
                        />
                        <CardItem 
                        src='images/BullCowPic.png'
                        text='Terminal Game in Unereal Engine that has us guess an Isogram'
                        label='Bull Cow Game'
                        path='/bullcowgame'
                        />
                    </ul>

                </div>
            </div>
        </div>
    </div>
    )
}

export default CodingChallanges
