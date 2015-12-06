import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


class Body extends React.Component {
  render() {
    return (
      <div>
        <App />
        <p className="container">This is what?</p>
      </div>
      )
  }
}

ReactDOM.render(<Body />, document.getElementById('root'));
