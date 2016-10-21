// src/components/Layout.js
import React from 'react';
import { Link } from 'react-router';

const linkto = ['/', 'blog', 'about'];
const pagename = ['Home', 'Blogs', 'About'];

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Navbar pathname={this.props.location.pathname} />
        <div className="app-content">{this.props.children}</div>
        <footer>
          <p>This is Weihong's Vault Project.</p>
          <p>Contact me @ jeremy22484@gmail.com.</p>
          <p>Have a nice day!</p>
        </footer>
      </div>
    );
  }
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    var pathname = (props.pathname=='/') ? props.pathname:props.pathname.slice(1);
    console.log(pathname);
    this.state = {focused: linkto.indexOf(pathname)};
  }

  clicked(index) {
    this.setState({focused: index});
  }

  render() {
    return (
      <nav className="navbar">
        <ul>
          {pagename.map((name, index) => {
            var style = '';
            if (this.state.focused==index) {
              style = 'focused';
            }
            return (
              <li className={style} onClick={this.clicked.bind(this, index)}>
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
