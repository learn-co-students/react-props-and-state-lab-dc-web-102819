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

  helperMethodForFetch = (filterBy) => {
    filterBy === 'all'
    ?
      fetch('/api/pets')
      .then(res=> res.json())
      .then(pets => this.setState({
        pets: pets,
        filters: filterBy
      }))
      .catch(err=> console.log(err.message))
    :
      fetch('/api/pets?type='+filterBy)
      .then(res=> res.json())
      .then(pets => this.setState({
        pets: pets,
        filters: filterBy
      }))
      .catch(err=> console.log(err.message))
  }
//
   filterWithDropdown(filterBy, data){
    // console.log('Inside filterWithDropdown ', fSelect)
    // helperMethodForFetch(fSelect)
      return this.setState({
        pets: data,
        filters:{
          type: filterBy
        }
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
              <Filters onChangeType={this.helperMethodForFetch}
                // doFetch={this.helperMethodForFetch}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser petsData= {this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
