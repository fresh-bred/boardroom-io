import React, {Component} from 'react';
import { Layer, Rect, Stage, Group, Image, Line, Path } from 'react-konva';

class Item extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.data);
    this.elem = this.makeElem();

  }
  makeElem() {
    let elem;
    let item = this.props.data
    switch (item.type) {
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
      case item.type:
        break;
      case item.type:
        break;
      case item.type:
        break;
      case item.type:
        break;
    }
    console.log(elem);
    return elem;
  }
  render() {
    
    return (
      this.elem
    );
  }
}

export default Item;