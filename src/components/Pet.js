import React from 'react'

class Pet extends React.Component {
  toggleAdoption(event) {
    console.log(event)
  }

  render() {
    let {petObj: {id, name, type, gender, age, weight, isAdopted}} = this.props
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {gender === "male" ? '♀ ' : '♂ '}
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight} {weight > 1 ? 'lbs' : 'lb'}</p>
          </div>
        </div>
        <div className="extra content">
          {isAdopted ?
            <button className="ui disabled button" >Already adopted</button>
            : <button className="ui primary button" onClick={() => this.props.onAdoptPet(id) }>Adopt pet</button> 
          }
        </div>
      </div>
    )
  }
}

export default Pet