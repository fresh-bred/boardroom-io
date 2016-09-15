import React, {Component} from 'react';
import { Layer, Rect, Stage, Group, Image, Line, Path } from 'react-konva';
import Item from './item.jsx'
class KonvaLayer extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
  }
  setParentState() {
    let that = this;
    setTimeout(() => {
      that.refs.layer.children.forEach(item => {
        arr.push({ type: item.className, attrs: item.attrs })
      that.props.saveStage(arr);  
    })
    },1000)
    let arr = []
    
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