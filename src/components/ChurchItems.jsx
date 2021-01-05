import { Component } from 'react'
import { addToHandle, addToAddress, addToDate } from '../actions'
import { connect } from 'react-redux'

class ChurchItems extends Component {
  render() {
    const { addToHandle, addToAddress, addToDate } = this.props
    return (
      <div>
        <div>
          <label htmlFor="name">Nome da Igreja</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(event) => addToHandle(event)}
          ></input>
        </div>
        <div>
          <label htmlFor="street">Nome da Rua</label>
          <input
            type="text"
            name="street"
            id="street"
            onChange={(event) => addToAddress(event)}
          ></input>

          <label htmlFor="number">Número</label>
          <input
            type="number"
            name="number"
            id="number"
            onChange={(event) => addToAddress(event)}
          ></input>

          <label htmlFor="region">Bairro</label>
          <input
            type="text"
            name="region"
            id="region"
            onChange={(event) => addToAddress(event)}
          ></input>
        </div>
        <div>
          <label htmlFor="location">Coordenadas</label>
          <input
            type="text"
            name="location"
            id="location"
            onChange={(event) => addToHandle(event)}
          ></input>
        </div>

        <div>
          <label htmlFor="fieldResearch">Data da pesquisa</label>
          <input
            type="text"
            name="fieldResearch"
            id="fieldResearch"
            onChange={(event) => addToDate(event)}
          ></input>

          <label htmlFor="analysis">Data da análise</label>
          <input
            type="text"
            name="analysis"
            id="analysis"
            onChange={(event) => addToDate(event)}
          ></input>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addToHandle: (item) => dispatch(addToHandle(item)),
  addToAddress: (item) => dispatch(addToAddress(item)),
  addToDate: (item) => dispatch(addToDate(item)),
})

export default connect(null, mapDispatchToProps)(ChurchItems)
