import React from 'react'

class Filters extends React.Component {
  render() {
    // console.log('inside Filters ', this.props)
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={e =>{
            // console.log('event value is: ', e.target.value)
            this.props.onChangeType(e.target.value)
            this.props.doFetch(e.target.value)
            }
          }>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button">Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
