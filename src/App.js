import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Adopt-a-pet</h1>
        <Pet name="luna" animal="dog" breed="gsd" />
        <Pet name="loki" animal="cat" breed="shorthair" />
        <Pet name="pepper" animal="bird" animal="cockatiel" />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
