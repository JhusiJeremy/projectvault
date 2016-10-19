// src/components/Layout.js
import React from 'react';
import { Link } from 'react-router';

const linkto = ['/', 'blog', 'about'];
const pagename = ['Home Page', 'My Blogs', 'About Me'];

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Navbar />
        <div className="app-content">{this.props.children}</div>
        <footer>
          <p>
            This is my playground, haven't decide what to do here.
          </p>
        </footer>
      </div>
    );
  }
}

class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {focused: 0}
  }

  clicked(index) {
    this.setState({focused: index});
  }

  render() {
    var self = this;

    return (
      <nav className="navbar">
        <ul>
          {pagename.map((name, index) => {
            var style = '';
            if (this.state.focused==index) {
              style = 'focused';
            }
            return (
              <li className={style} onClick={self.clicked.bind(self, index)}>
                <Link to={linkto[index]}>
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}