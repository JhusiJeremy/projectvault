// src/components/PageHeader.js
import React from 'react';
import { Link } from 'react-router';

export default class PageHeader extends React.Component {

  render () {
    var divStyle = {
      backgroundImage: 'url('+this.props.imgUrl+')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%',
      backgroundPosition: 'center',
      width: '100%',
      height: '320px',
      opacity: '1',
    };
    return (
      <div>
        <div style={divStyle}></div>
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

PageHeader.propTypes = {
  imgUrl: React.PropTypes.string.isRequired,
  header1: React.PropTypes.string,
  header2: React.PropTypes.string,
}

PageHeader.displayName = "PageHeader";
