import { Component } from 'react'
import { addToHandle } from '../actions'
import { connect } from 'react-redux'

class ChurchItems extends Component {
  render() {
    const { addToHandle } = this.props
    return (
      <div>
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            onChange={(event) => addToHandle(event)}
          ></input>
        </label>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addToHandle: (item) => dispatch(addToHandle(item))
})

export default connect(null, mapDispatchToProps)(ChurchItems)
