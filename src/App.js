// App.js
import React, { Component } from 'react';

class App extends Component {
  state = {
    project: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/'); // fetching the data from api, before the page loaded
      const project = await res.json();
      this.setState({
        project
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        {this.state.project.map(item => (
          <div key={item.id}>
            <h1>{item.medium_url}</h1>
            <span>{item.description}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;