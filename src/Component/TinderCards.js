import React from 'react'
import TinderCard from 'react-tinder-card';
import './TinderCards.css'

function TinderCards() {

    const [cars, setCars] = React.useState([
        {
          name: 'Black Panther',
          url: 'https://wallpapercave.com/dwp1x/wp3793922.jpg'
        },
        {
          name: 'Spider-Man',
          url: 'https://wallpapercave.com/dwp1x/wp3592984.jpg'
        },
        {
          name: 'Hulk',
          url: 'https://wallpapercave.com/wp/wp6556391.jpg'
        },
        

        {
            name: 'Ant Man',
            url:'https://wallpapercave.com/dwp1x/wp7542405.jpg'
        },

        {
            name: 'Captain Marvel',
            url:'https://wallpapercave.com/dwp1x/wp7542393.jpg'
        },

        {
            name: 'Iron Man',
            url:'https://wallpapercave.com/dwp1x/wp2764861.jpg'
        },

        {
            name: 'Doctor Strenge',
            url:'https://wallpapercave.com/dwp1x/wp3793933.jpg'
        },
    
      ]);


    return (
        <div className='card-container'>

      {
        cars.map( car => (
          <TinderCard
            className="swipe"
            key={car.name}
            preventSwipe={['up', 'down']}
          >
              <div
                style={ { backgroundImage: `url(${car.url})` } }
                className='card'
              >
                <h2>{car.name}</h2>
              </div>
          </TinderCard>
        ))
      }


    </div>
    )
}

export default TinderCards
