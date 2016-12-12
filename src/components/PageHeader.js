// src/components/PageHeader.js
import React from 'react';
import { Link } from 'react-router';

export default class PageHeader extends React.Component {
  render () {
    let divStyle = {
      backgroundImage: 'url('+this.props.imgUrl+')',
    };
    return (
      <div>
        <div id="header-img" style={divStyle}></div>
        <div className="header">
          <div>
            <h1>{this.props.header1}</h1>
            <p>{this.props.header2}</p>
          </div>
        </div>
      </div>  
    );
  }
}
PageHeader.displayName = "PageHeader";
PageHeader.propTypes = {
  imgUrl: React.PropTypes.string.isRequired,
  header1: React.PropTypes.string,
  header2: React.PropTypes.string,
}

