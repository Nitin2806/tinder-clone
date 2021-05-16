import { SwipeableDrawer } from '@material-ui/core';
import React,{useState} from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'

function TinderCards() {
    const [people,setPeople] = useState([
        {
            name: 'Elon Musk',
            url: "https://en.wikipedia.org/wiki/Elon_Musk#/media/File:Elon_Musk_Royal_Society_(crop1).jpg"
        },
        {
            name: 'Bill Gates',
            url: "https://en.wikipedia.org/wiki/Bill_Gates#/media/File:Bill_Gates_2017_(cropped).jpg"
        },

    ]);
    const swiped = (direction,nameToDelete) => {
        console.log("Removing " + nameToDelete);
        //setlastDirection(direction);
    };
    const outOfFrame = (name) =>{
        console.log(name + "left the screen!");
    };

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
            {people.map((person) => (
                <TinderCard
                    className = "swipe"
                    key = {person.name}
                    preventSwipe = {["up","down"]}
                    onSwipe = {(dir) => SwipeableDrawer(dir,person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}

                ></TinderCard>

                ))}

            </div>
        </div>
    );
}

export default TinderCards
