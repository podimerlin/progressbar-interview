import React, { Component } from 'react';
import '../css/ButtonList.css';

class ButtonList extends Component {
  constructor(props) {
    super();
    this.state = {select: 0};
    this.handleSelect = this.handleSelect.bind(this);
  }  

  handleSelect(e) {
    this.setState({select : e.target.value});
  }

  render() {

    const bars = this.props.buttons.map((button, k) => {    
      return (
        <button 
          className="btn"
          id={k} 
          key={k++}
          value={button}
          onClick={event => this.handleClick(event.target.value)}
        >
          {button}
        </button>
      );
    })

    const sel = [];

    for (var i=0; i<this.props.noOfBars; i++) {
       sel.push(<option key={i} value={i}>Bar {i+1}</option>);
    }

    return (
      <div>
        <select value={this.state.select} onChange={this.handleSelect}>
          {sel}
        </select>
        Add value: {bars}
      </div>
    )
  }

  handleClick(val) {
    var limit = this.props.limit;

    var barid = this.state.select;
    var bar = document.getElementById("progress-" + barid);
    var bartext = document.getElementById("span-" + barid).innerHTML;
    var owidth = parseInt(bartext, 10);
    var width = owidth;
    
    var prog = setInterval(frame, 10);

    function frame() {
        if (width === parseInt(owidth, 10) + parseInt(val, 10)) {
            clearInterval(prog);
        } else if (width <= 0 && val < 0) {
            clearInterval(prog);
        } else {
            if (val < 0 ) {
              width--; 
            } else {
              width++; 
            }

            document.getElementById("span-" + barid).innerHTML = width;


            if (width > limit) {
                //only change number, and change color
                bar.style.backgroundColor = "red";
                bar.previousSibling.style.color = "white";
            } else {
                bar.style.width = (width / limit) * 100 + '%'; 
                bar.style.backgroundColor = "green";
                bar.previousSibling.style.color = "";
            }
          
        }
    }
  }
}





export default ButtonList;