import React from 'react';
import ReactDOM from 'react-dom';

// eslint-disable-next-line react/prefer-stateless-function
class NavigationBar extends React.Component {
  render() {
    return (
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a className="nav-link active" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/blog">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/projects">Projects</a>
        </li>
      </ul>);
  }
}


ReactDOM.render(
  <NavigationBar />,
  document.getElementById('root'),
);
