import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    console.log('inside PetBrowser ', this.props.petsData)
    return (
      <div className="ui cards">
      {
        this.props.petsData.map(pet =>
          <Pet key={pet.id} pet={pet}/>
        )
      }
      </div>)
  }
}

export default PetBrowser
