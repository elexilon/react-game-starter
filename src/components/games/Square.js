import React, { PureComponent } from 'react'
import './Square.css'

class Square extends PureComponent {
  render() {
      return (
        <button className="square" onClick={() => this.props.onClick()}>
          {this.props.value}
        </button>
      );
    }
  }



export default Square
