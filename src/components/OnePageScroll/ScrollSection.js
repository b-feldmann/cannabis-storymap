import React, { Component } from 'react';

class ScrollSection extends Component {
  render() {
    let pageId = this.props.pageId;

    let onepageStyle = {
      position: 'absolute',
      top: `${pageId * 100}%`,
      width: '100%',
      height: '100%',
      borderRadius: '4px',
    };

    let style = Object.assign({}, onepageStyle, this.props.style);
    return (
      <div style={style}>{this.props.children}</div>
    );
  }
}

export default ScrollSection;