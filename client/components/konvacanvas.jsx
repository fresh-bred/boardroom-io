import React from 'react';
import ReactDOM from 'react-dom';
import { Layer, Rect, Stage, Group, Image, Line, Path } from 'react-konva';
import KonvaLayer from './layer.jsx';
/

class KonvaStage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      items: [{
        type: "Rect",
        x: 10,
        y: 10,
        width: 400,
        height: 50,
        fill: "red",
        draggable: true
      }, {
        type: 'Path', 
        x: 50,
        y: 40,
        data: 'M12.582,9.551C3.251,16.237,0.921,29.021,7.08,38.564l-2.36,1.689l4.893,2.262l4.893,2.262l-0.568-5.36l-0.567-5.359l-2.365,1.694c-4.657-7.375-2.83-17.185,4.352-22.33c7.451-5.338,17.817-3.625,23.156,3.824c5.337,7.449,3.625,17.813-3.821,23.152l2.857,3.988c9.617-6.893,11.827-20.277,4.935-29.896C35.591,4.87,22.204,2.658,12.582,9.551z',
        fill: 'green',
        scale: {
          x : 2,
          y : 2
        },
        draggable: true
      }
      ]
    };
    // this.save = this.save.bind(this);
  }
  s

  save() {
    const layer = this.refs.stage;
    console.log(layer);
    // let saved = layer.toJSON();
    // console.log(saved);
    // this.setState({ color: 'blue' });
    // $.post('/element', saved);
  }
  render() {
    let arr = [], item, elem;
    for (let i = 0, len = this.state.items.length; i < len; i++) {
      item = this.state.items[i];
      console.log(item.type);
      switch (item.type) {
        case "Rect":
          elem = <Rect
            x={item.x}
            y={item.y}
            width={item.width}
            height={item.height}
            fill={item.fill}
            key={i} draggable={item.draggable}
            />
          break;
        case "Path":
          elem = <Path
            x={item.x}
            y={item.y}
            data={item.data}
            fill={item.fill}
            scale={item.scale}
            draggable={item.draggable}
            />
          
          break;
        case item.type:
          break;
        case item.type:
          break;
        case item.type:
          break;
        case item.type:
          break;
      }
      arr.push(elem);
      console.log(arr);
    }
  return(
      <div>
  <Stage ref="stage" width={600} height={600}>
    <Layer ref="layer">
      {arr}
    </Layer>
  </Stage>
  <button onClick={this.props.updateMode}>Write/Erase</button>
  <button onClick={this.save}>Save board</button>
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
