// src/components/Layout.js
import React from 'react';
import { Link } from 'react-router';

const linkto = ['/', '/blog', '/about'];
const pagename = ['Home', 'Blogs', 'About'];

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <NavBar pathname={this.props.location.pathname} />
        <div className="app-content">{this.props.children}</div>
        <footer>
          <p>Contact me@:</p>
          <Contact url="mailto:jeremy22484@gmail.com" img="/img/gmail.jpg" message="jeremy22484@gmail.com" />
          <Contact url="https://github.com/JhusiJeremy" img="/img/GitHub-Mark-32px.png" message="JhusiJeremy" />
          <p>Cheers!</p>
        </footer>
      </div>
    );
  }
}
Layout.displayName = "Layout";
Layout.propTypes = {
  location: React.PropTypes.object.isRequired,
}

// Contact Button
class Contact extends React.Component {
  render() {
    return (
      <a href={this.props.url} style={{padding: '0'}}>
        <p style={{verticalAlign: "middle"}}>
          <img style={{height: '30px'}} src={this.props.img} />
          {this.props.message}
        </p>
      </a>
);}}

// Nav Bar
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    let pathname;
    if (props.pathname.lastIndexOf('/')>0)
      pathname = props.pathname.slice(0, props.pathname.lastIndexOf('/'));
    else 
      pathname = props.pathname;
    this.state = {focused: linkto.indexOf(pathname)};
  }

  clicked(index) {
    this.setState({focused: index});
  }

  componentWillReceiveProps(nextProps) {
    let pathname;
    if (nextProps.pathname.lastIndexOf('/')>0)
      pathname = nextProps.pathname.slice(0, nextProps.pathname.lastIndexOf('/'));
    else 
      pathname = nextProps.pathname;
    this.setState({focused: linkto.indexOf(pathname)});
  }

  render() {
    return (
      <nav className="navbar">
        <Link to={'/'} style={{padding: '0'}}>
          <img style={{height: '40px', width: '40px', padding: '5px 10px', float: 'left', borderRadius: '50%'}} src="/img/OMG.jpg" />
        </Link>
        <ul>
          {pagename.map((name, index) => {
            let style = '';
            if (this.state.focused==index) {
              style = 'focused';
            }
            return (
              <li key={index} className={style} onClick={this.clicked.bind(this, index)}>
                <Link to={linkto[index]}>
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
);}}

NavBar.displayName = "NavBar";
