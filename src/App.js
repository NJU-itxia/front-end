import React, { Component, PropTypes } from 'react';

// 目前什么都不做，将来可以把footer和header的一部分放进来
class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
