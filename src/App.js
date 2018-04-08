import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Frame from './Frame';
import UberSwipe from './UberSwipe';
import { Swipeable } from 'react-touch';


class App extends Component {
  constructor(props) {
    super(props);
    this.onSwipeLeftListener = this._onSwipeLeftListener.bind(this);
    this.onSwipeRightListener = this._onSwipeRightListener.bind(this);
    this.renderFrames = this._renderFrames.bind(this);
    this.frameData = [
      {
        frameNum: 1,
        frameHeader: "Frame Header 1",
        frameSubHeader: "Frame Subheader 1",
        frameTheme: "theme-purpTeal"
      },
      {
        frameNum: 2,
        frameHeader: "Frame Header 2",
        frameSubHeader: "Frame Subheader 2",
        frameTheme: "theme-tealYellow"
      },
      {
        frameNum: 3,
        frameHeader: "Frame Header 3",
        frameSubHeader: "Frame Subheader 3",
        frameTheme: "theme-yellowPink"
      }
    ]
  }



   _onSwipeLeftListener(){
     this.uberSwipe.swipe.next();
    }

   _onSwipeRightListener(){
     this.uberSwipe.swipe.prev();
    }

  _renderFrames() {
    return this.frameData.map((frame, i) => {
      return (
        <div
          key={ i }
          className="UberSwipe-inner">
            <Frame
            onSwipeLeftListener={ this.onSwipeLeftListener }
            onSwipeRightListener={ this.onSwipeRightListener }
            frameData={ frame }/>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="App">
        <UberSwipe ref={uberSwipe => this.uberSwipe = uberSwipe} className="UberSwipe-inner">
          { this.renderFrames() }
        </UberSwipe>
      </div>
    );
  }
}

export default App;
