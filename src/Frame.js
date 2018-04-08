import React, { Component } from 'react';
import logo from './logo.svg';
import './Frame.css';
import { Swipeable } from 'react-touch';


class Frame extends Component {
  constructor(props) {
    super(props);
  }

  renderTop () {
    const { frameHeader, frameNum, frameSubHeader, frameTheme } = this.props.frameData;
    const frameClass = `Frame-top-number ${frameTheme}`;
    return (
      <Swipeable
        onSwipeLeft={this.props.onSwipeLeftListener}
        onSwipeRight={this.props.onSwipeRightListener}>
      <div className="Frame-top">
        <div className="Frame-top-info">
          <div className={ frameClass }>
            { frameNum }
          </div>
          <h1 className="Frame-top-header">
            { frameHeader }
          </h1>
          <h3 className="Frame-top-subheader">
            { frameSubHeader }
          </h3>
        </div>

        </div>
      </Swipeable>

    )
  }
  renderBottom () {
    const { frameTheme } = this.props.frameData;
    const frameClass = `Frame-bottom ${frameTheme}`;
    return (
      <Swipeable
        onSwipeLeft={this.props.onSwipeLeftListener}
        onSwipeRight={this.props.onSwipeRightListener}>
      <div className={ frameClass }>
        <div className="Frame-bottom-icon" />

      </div>
    </Swipeable>
    )
  }

  render() {
    return (
      <div className="Frame">
        { this.renderTop() }
        { this.renderBottom() }
      </div>
    );
  }
}

export default Frame;
