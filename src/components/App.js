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

  helperMethodForFetch = (filterby)=>{
    fetch('/api/pets'+'?type='+filterby)
    .then(res=> res.json())
    .then(data => console.log(data))
    .catch(err=> console.log(err.message))
  }

  filterWithDropdown = (fSelect) => {
    // console.log('Inside filterWithDropdown ', fSelect)
    // helperMethodForFetch(fSelect)
    this.setState({
      filters:{
        type: fSelect
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
              <Filters onChangeType={this.filterWithDropdown}
                doFetch={this.helperMethodForFetch}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
