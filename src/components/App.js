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

  onChangeType = (event) => {
    this.setState({
      //event.target.value is the selected value
      filters: { ...this.state.filters, [event.target.name]: event.target.value }
    })
  }

  fetchPets = () => {
   let url = '/api/pets'

   if (this.state.filters.type !== 'all') {
     url += `?type=${this.state.filters.type}`
   }

   console.log('fetch =>', url)
   fetch(url)
     .then(response => response.json())
     .then(data => this.setState({ pets: data }))

  }

  onAdoptPet = (id) => {
    console.log('onAdoptPet.. id = ', id)
    const pets = this.state.pets.map(pet => {
      //if pet.id equals id [argument] then set that pet's isAdopeted value to true, otherwise return the pet as is
      return pet.id === id ? { ...pet, isAdopted: true } : pet
    })
    this.setState({ pets: pets})
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
              <Filters
                onChangeType={this.onChangeType}
                onFindPetsClick={this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                onAdoptPet={this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
