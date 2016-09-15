import React, {Component} from 'react';
import { Layer, Rect, Stage, Group, Image, Line, Path } from 'react-konva';
import Konva from 'konva';

class Item extends Component {
  constructor(props) {
    super(props);
    this.elem = this.makeElem()
    this.state = { elem: this.makeElem() };
  }
  componentDidUpdate() {

  }
  makeElem() {
    let elem;
    let item = this.props.data.attrs
    let type = this.props.data.type
    switch (type) {
      case "Rect":
        elem = <Rect
          x={item.x}
          y={item.y}
          width={item.width}
          height={item.height}
          fill={item.fill}
          draggable={item.draggable}
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
      case "Image":
        elem = <Image
          x={item.x}
          y={item.y}
          image={item.image}
          width={item.width}
          height={item.height}
          draggable={item.draggable}
          />
        break;
      case "Line":
        elem = <Line points={item.points}
          stroke={item.stroke}
          strokeWidth={item.strokeWidth}
          lineCap={item.lineCap}
          lineJoin={item.lineJoin}
          draggable={item.draggable}
          />
        break;
    }
    return elem;
  }
  render() {

    return (
      this.makeElem()
    );
  }
}

export default Item;