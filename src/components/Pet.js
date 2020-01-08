import React from 'react'

class Pet extends React.Component {
  render() {
    // console.log('insiclearde Pet ', this.props.pet)
    let {id, type, gender, age, weight, name, isAdopted} = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {gender === 'male' ? <span>♂ </span> : <span>♀ </span>}
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {
            isAdopted === false
            ? <button data-id={id} className="ui primary button" onClick={e => this.props.onAdoptPet(e.target.dataset.id)}>Adopt pet</button>
            : <button className="ui disabled button">Already adopted</button>
          }
        </div>
      </div>
    )
  }
}

export default Pet
