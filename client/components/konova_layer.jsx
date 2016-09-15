import React, {Component} from 'react';
import { Layer, Rect, Stage, Group, Image, Line, Path } from 'react-konva';
import Item from './item.jsx'
class KonvaLayer extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
  }
  setParentState(e) {
    console.log(this.refs.layer.toJSON())
    let that = this;

      let arr = []
      let data = JSON.parse(this.refs.layer.toJSON())
      data.children.forEach(thing => {
        arr.push({ type: thing.className, attrs: thing.attrs })
       })
      this.props.saveStage(arr); 
  }

  render() {
    let itemArr = [], item;
    for (let i = 0, len = this.props.items.length; i < len; i++) {
      item = this.props.items[i];
      itemArr.push(<Item key={i} data={item} />)
    }
    return (
      <Layer ref="layer" onMouseUp={this.setParentState.bind(this)}>
        {itemArr}
      </Layer>
    )
  }
}

module.exports = KonvaLayer;