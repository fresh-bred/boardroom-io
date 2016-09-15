import React from 'react';
import ReactDOM from 'react-dom';
import { Layer, Rect, Stage, Group } from 'react-konva';
import MessageForm from './components/message_form.jsx';
import Message from './components/message.jsx';
import MessageContainer from './components/message_container.jsx';
import KonovaStage from './components/konva_stage.jsx';
import { socket, p2p } from './socket.js';

// Top level React component for the text-chat window
class App extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }
  compnentDidMount() {
  }

  render() {
    return (
      <div>
        <div className="drawMe">
          <KonovaStage />
          <button >Write/Erase</button>
  <button >Save board</button>
        </div>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('right'));
