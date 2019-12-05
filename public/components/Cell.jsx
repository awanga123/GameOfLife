// CIS 197 - React HW

import React from 'react'
import * as actions from '../actions/index.js'

export default class Cell extends React.Component {
  constructor() {
    super()
    this.onCellClick = this.onCellClick.bind(this)
  }

  onCellClick() {
    // TODO: Write the code to dispatch the action corresponding to the
    //       clicking of a cell at a particular index.
    const { store } = this.props.store
    store.dispatch(actions.cellClicked(this.props.index))
  }

  render() {
    return (
      this.props.status ? <span onClick = {() => this.onCellClick()} className = "cell-component cell alive"></span>
        : <span onClick = {() => this.onCellClick()} className = "cell-component cell"></span>)
    // TODO: complete the render function.
    //       A non-living cell has the HTML structure
    //       <span class="cell-component cell"></span>
    //       while a living cell has the HTML structure
    //       <span class="cell-component cell alive"></span>
    // HINT: don't forget to implement the click handler
    //       whose execution dispatches a CELL_CLICKED event.
  }
}

Cell.defaultProps = {
  alive: false,
  key: 0,
  index: 0,
}
