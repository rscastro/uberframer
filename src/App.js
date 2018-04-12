import React, { Component } from 'react';
import './App.css';
import Frame from './Frame';


class App extends Component {
  constructor(props) {
    super(props);
    this.onSwipeLeftListener = this._onSwipeLeftListener.bind(this);
    this.onSwipeRightListener = this._onSwipeRightListener.bind(this);
    this.renderFrames = this._renderFrames.bind(this);
    //Dummy frame data for each of the frames being passed down to Frame component
    this.state = {
      currentFrame: 0,
      x: 0
    }
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
    if (this.state.currentFrame + 1 <= this.frameData.length - 1) {
      this.setState({
        x: this.state.x - window.innerWidth,
        currentFrame: this.state.currentFrame + 1
      });
 

    }
  }

   _onSwipeRightListener(){
    if (this.state.currentFrame - 1 >= 0) {
     this.setState({
      x: this.state.x + window.innerWidth,
      currentFrame: this.state.currentFrame - 1
    })
      
    } 
  }
    //renders Frames using Frame component
  _renderFrames() {

    const translate = {
      transform: `translate(${this.state.x}px, 0px`
    }

    return this.frameData.map((frame, i) => {
      return (
        <div
          key={ i }
          className="App-wrapper">
            <Frame
            translate={translate}
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
        
          { this.renderFrames() }
          
      </div>
    );
  }
}

export default App;
