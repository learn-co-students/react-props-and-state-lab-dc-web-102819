import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (updateData) => {
    this.setState({
      filters: {
        type: updateData
      }
    })
  }

  onFindPetsClick = (e) => {
    let queryParam = (state) => {
      if (state.filters.type === 'all') {
        return ''
      } else if (!!state.filters.type) {
        return '?type=' + state.filters.type 
      } else {
        throw new Error("There's an error!")
      }
    }

    fetch('/api/pets' + queryParam(this.state))
    .then(response => response.json())
    .then(data => this.setState({
        pets: data
      })
    )
    .catch(error => console.error(error.message))
  }

  onAdoptPet = (petId) => {
    let petArray = this.state.pets
    const matchPet = (pet) => pet.id === petId
    let adoptedPet = petArray.find(matchPet)
    let adoptedPetIndex = petArray.findIndex(matchPet)
    adoptedPet.isAdopted = true
    petArray[adoptedPetIndex] = adoptedPet
    
    this.setState({
      pets: petArray
    })
  }


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser petList={this.state.pets} onAdoptPet={this.onAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
