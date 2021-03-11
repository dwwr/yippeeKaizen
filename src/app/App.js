import React from 'react';
import Bubble from './components/Bubble';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };

  render () {
    return (
      <div style={{
        backgroundColor: 'blue',
        border: '3px solid blue',
        minHeight: `100%`
      }}>
        <h1>Yippee Kaizen</h1>
        <Bubble />
      </div>
    );
  }
};
export default App;