import React, { Component } from "react";

import { Cards, Chart, CountryPicker } from "./components";

class App extends Component {
  render() {
    return (
      <div>
        <Cards />
        <Chart />
        <CountryPicker />
      </div>
    );
  }
}

export default App;
