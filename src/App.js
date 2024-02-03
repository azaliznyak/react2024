import React from 'react';
import {Character} from './components/Character'



const App = () => {
    const characters=[
        {   id:195,
            name:'Kristen Stewart',
            img:'https://rickandmortyapi.com/api/character/avatar/195.jpeg',
            status:'Alive',
            species:'Human',
            genre:'Female'
        },
        {
            id:263,
            name:'Pibbles Bodyguard',
            img: 'https://rickandmortyapi.com/api/character/avatar/263.jpeg',
            status:'Alive',
            species:'Alien',
            genre:'Male'
        },
        {
            id:567,
            name: 'Michael',
            img:'https://rickandmortyapi.com/api/character/avatar/567.jpeg',
            status:'Alive',
            species:'Mythological Creature',
            genre:'Male'
        },
        {
            id:209,
            name:'Long Sleeved Morty',
            img:'https://rickandmortyapi.com/api/character/avatar/209.jpeg',
            status:'unknown',
            species:'Human',
            genre:'Male'
        },
        {
            id:483,
            name: 'Steve Jobs Rick',
            img:'https://rickandmortyapi.com/api/character/avatar/483.jpeg',
            status:'Alive',
            species:'Human',
            genre:'Male'
        },
        {
            id: 688,
            name: 'Scarecrow Summer',
            img: 'https://rickandmortyapi.com/api/character/avatar/688.jpeg',
            status: 'Dead',
            species: 'Robot',
            genre: 'Female'
        }
    ]

    return (
        <div>
            {characters.map(character=><Character character={character} key={character.id}/>)}
          
        </div>
    );
};

export {App};