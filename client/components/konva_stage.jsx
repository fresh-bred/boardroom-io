import React from 'react';
import ReactDOM from 'react-dom';
import { Layer, Rect, Stage, Group, Image, Line, Path } from 'react-konva';
import KonvaLayer from './konova_layer.jsx';
import Konva from 'konva';
import io from 'socket.io-client';
import PeerToPeer from  'socket.io-p2p';
// Establish the socket connection to the server that served the page, and
// export it to make it available to other JS files on the client side.
const socket = io.connect("https://localhost:3000", { secure: true });

// Establish a peer to peer socket, which will be
// managed by the server.
const p2p = new PeerToPeer(socket);
p2p.on('ready', () => {
  p2p.usePeerConnection = true;
});


class KonvaStage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layers: [],
      color: 'red',
      items: [{
        type: "Rect",
        attrs: {
          x: 10,
          y: 10,
          width: 400,
          height: 50,
          fill: "red",
          draggable: true
        }
      }, {
          type: 'Path',
          attrs: {
            x: 50,
            y: 40,
            data: 'M12.582,9.551C3.251,16.237,0.921,29.021,7.08,38.564l-2.36,1.689l4.893,2.262l4.893,2.262l-0.568-5.36l-0.567-5.359l-2.365,1.694c-4.657-7.375-2.83-17.185,4.352-22.33c7.451-5.338,17.817-3.625,23.156,3.824c5.337,7.449,3.625,17.813-3.821,23.152l2.857,3.988c9.617-6.893,11.827-20.277,4.935-29.896C35.591,4.87,22.204,2.658,12.582,9.551z',
            fill: 'green',
            scale: {
              x: 2,
              y: 2
            },
            draggable: true
          }
        }, {
          type: "Line",
          attrs: {
            points: [5, 70, 140, 23, 250, 60, 300, 20],
            stroke: 'red',
            strokeWidth: 5,
            lineCap: 'round',
            lineJoin: 'round',
            draggable: true
          }
        }
      ]
    };
    this.saveStage = this.saveStage.bind(this);
        let that = this;


  }
  componentDidMount() {
    let that = this
    p2p.on('data', (data) => {
      console.log('move event', data);
      that.setState({ items: data });
    });

  }

  saveStage(data) {
    console.log
    p2p.emit('data', data);
    this.setState({ items: data });
    console.log('move emitted');
  }
  sendData() {
    let data = { fileName: 'someName', fileJSON: JSON.stringify(this.state.items) }
    $.post('/element', data);
  }
  clear() {
    this.setState({ items: [] });
  }
  render() {

    return (
      <div>
        <Stage ref="stage" width={600} height={600}>
          <KonvaLayer ref="layer" items={this.state.items} saveStage={this.saveStage}/>
        </Stage>
        <button onClick={this.sendData.bind(this) }>Save</button>
        <button onClick={this.clear.bind(this) }>Clear</button>
      </div>
    );
  }
}

module.exports = KonvaStage;

            // <Image
            //   ref="image"
            //   image={this.state.canvas}
            //   x={0}
            //   y={0}
            //   stroke="green"
            //   shadowBlur={5}
            // />
