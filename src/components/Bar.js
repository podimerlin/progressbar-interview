import React, { Component } from 'react'
import '../css/Bar.css';

class Bar extends Component {

    render() {
      const style = {
        width: ((this.props.width / this.props.limit) * 100) + "%"
      }
      return (
        <div className="progress">
          <span id={"span-" + this.props.id}>{this.props.width}</span>
          <div id={"progress-" + this.props.id} className="bar" style={style}>
          </div>
          <div className="graybar" ></div>
        </div>
      );
    }

}

export default Bar;