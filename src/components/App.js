import React, { Component } from 'react';
import '../css/App.css';
import BarList from './BarList';
import ButtonList from './ButtonList';

class App extends Component {
  constructor() {
    super();
    this.state = { bars: [], buttons: [], limit: 0 };
  }

  componentDidMount() {
    this.readEndpoint();
  }

  readEndpoint() {

      var url = "http://pb-api.herokuapp.com/bars";
      var req = new XMLHttpRequest();
      req.open("GET", url, true);
      req.send(null);
      req.onload = (e) => {
        if (req.readyState === 4) {
          if (req.status === 200) {
            var ep2 = JSON.parse(req.responseText);
      
            this.setState({
              bars: ep2["bars"],
              buttons: ep2["buttons"],
              limit: ep2["limit"]
            });
          } 
        }
      };
      
  }

  render() {
    if (this.state.bars === [] || this.state.buttons === []) {
        return (
            <div className="App">
              Not able to get data from endpoint
            </div>
        );
    } else {
        return (
          <div className="App">
          <h3> Progress Bar </h3>
            <BarList bars={this.state.bars} limit={this.state.limit}/>
            <ButtonList noOfBars={this.state.bars.length} buttons={this.state.buttons} limit={this.state.limit} />
          </div>
        );  
    }
    
  }
}

export default App;
