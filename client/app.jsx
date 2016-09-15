import React from 'react';
import ReactDOM from 'react-dom';
import { Layer, Rect, Stage, Group } from 'react-konva';
import MessageForm from './components/message_form.jsx';
import Message from './components/message.jsx';
import MessageContainer from './components/message_container.jsx';
import MyRect from './components/konvacanvas.jsx';
import { socket, p2p } from './socket.js';

// Top level React component for the text-chat window
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      mode: 'brush',
    };
    this.updateMode = this.updateMode.bind(this);
  }
  compnentDidMount() {
  }
  updateMode() {

  }

  render() {
    return (
      <div>
        <div className="drawMe">
          <MyRect mode={this.state.mode} updateMode={this.updateMode} />
        </div>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('right'));
