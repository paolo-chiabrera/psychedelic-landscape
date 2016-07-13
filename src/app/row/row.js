import React, {Component} from 'react';

import TinyColor from 'tinycolor2';

import {Cell} from '../cell/cell';

import {ColoursBox} from '../colours-box/colours-box';

export class Row extends Component {

  constructor() {
    super();

    this.state = {
      cells: 20,
      target: 0,
      selected: false
    };

    this.style = {
      height: '1%'
    };
  }

  generateColours(base = 'black') {

    const sampleSize = this.state.cells/2 + 1;

    const left = TinyColor(base)
      .monochromatic(sampleSize)
      .map((colour) => colour.toHexString())
      .slice(1, sampleSize);

    const right = TinyColor(base)
      .monochromatic(sampleSize + 1)
      .map((colour) => colour.toHexString())
      .slice(1, sampleSize).reverse();

    return left.concat(right);
  }

  componentWillMount() {

    this.style = {
      height: 100 / this.props.size + '%'
    };

    this.setState({
      target: 0,
      colours: this.generateColours()
    });

    setInterval(() => {

      if(this.state.selected) return;

      let target = this.state.target + 1;

      if(target === this.state.cells) target = 0;

      this.setState({
        target: target
      });

    }, 1000 + this.props.index * this.props.index * 100);
  }

  selectRow() {
    this.setState({
      selected: !this.state.selected
    });
  }

  selectColour(colour) {
    this.setState({
      colours: this.generateColours(colour),
      selected: !this.state.selected
    });
  }

  render() {

    const cells = [];

    for(let i = 0; i < this.state.cells; i++){
        cells.push(<Cell key={i} index={i} size={this.state.cells} target={this.state.target} colours={this.state.colours}/>);
    }

    let content = '';

    if(this.state.selected){
      content = <ColoursBox selectColour={this.selectColour.bind(this)}/>;
    }

    return (
      <div className='row' style={this.style} onClick={this.selectRow.bind(this)}>
        {content}
        {cells}
      </div>
    );
  }
}
