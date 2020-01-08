import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    // console.log('inside PetBrowser ', this.props.onAdoptPet)
    return (
      <div className="ui cards">
      {
        this.props.petsData.map(pet =>
          <Pet key={pet.id}
            pet={pet}
            onAdoptPet={this.props.onAdoptPet}
          />
        )
      }
      </div>)
  }
}

export default PetBrowser
