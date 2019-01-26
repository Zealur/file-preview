import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class HideShowContainer extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
  }

  state = { hidden: true }

  render() {
    const { hidden } = this.state
    const { children } = this.props

    return (
      <div className="hide-show-container">
        {hidden ? (
          <button
            className="show-button"
            onClick={() => this.setState({ hidden: false })}
          >
            Show preview
          </button>
        ) : (
          children
        )}
      </div>
    )
  }
}
