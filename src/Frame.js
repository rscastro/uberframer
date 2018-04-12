import React, { Component } from 'react';
import './Frame.css';
import { Swipeable } from 'react-touch';

class Frame extends Component {
  constructor(props) {
    super(props);
  }
  //Top part of frame, renders headers and attaches swipe functionality
  renderTop () {
    const { frameHeader, frameNum, frameSubHeader, frameTheme } = this.props.frameData;
    const { translate } = this.props;
    const frameClass = `Frame-top-number ${frameTheme}`;


    return (
      <Swipeable
        onSwipeLeft={this.props.onSwipeLeftListener}
        onSwipeRight={this.props.onSwipeRightListener}>
      <div className="Frame-top">

        <div
          className="Frame-top-info">

          <div 
          style={ translate }
          className={ frameClass }>
            { frameNum }
          </div>

          <h1 
          style={ translate }
          className="Frame-top-header">
            { frameHeader }
          </h1>

          <h3 
          style={ translate }
          className="Frame-top-subheader">
            { frameSubHeader }
          </h3>

        </div>

        </div>
      </Swipeable>

    )
  }

  //renders bottom frame with gradient classes
  renderBottom () {
    const { frameTheme } = this.props.frameData;
    const frameClass = `Frame-bottom ${frameTheme}`;
    const {translate} = this.props;
    return (
      <Swipeable
        onSwipeLeft={this.props.onSwipeLeftListener}
        onSwipeRight={this.props.onSwipeRightListener}>
      <div style={ translate }
        className={ frameClass }>
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
