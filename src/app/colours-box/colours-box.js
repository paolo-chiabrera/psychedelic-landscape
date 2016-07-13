import React, {Component} from 'react';

import TinyColor from 'tinycolor2';

import ColourNames from './colour-names';

export class ColoursBox extends Component {

  constructor() {
    super();

    this.state = {
      colours: [],
      colourName: '',
      maxColours: 5
    }

    this.colourNames = ColourNames;
  }

  componentWillMount() {
    this.generatePalette();
  }

  generatePalette() {
    this.setState({
      colours: this.colourNames.slice(0, this.state.maxColours)
    });
  }

  selectColour(ev) {

    this.stopPropagation(ev);

    const colour = ev.currentTarget.getAttribute('data-value');

    this.props.selectColour(colour);

    this.setState({
      colourName: ''
    });
  }

  stopPropagation(ev) {
    ev.stopPropagation();
  }

  handleChange(ev) {

    const colours = this.colourNames.filter((name) => {
      return name.indexOf(ev.target.value) >= 0;
    }).slice(0, this.state.maxColours);

    this.setState({
      colours: colours,
      colourName: ev.target.value
    });
  }

  render() {

    const boxes = this.state.colours.map((value, index) => {
      return <li className="colours-item" key={index} style={{background: value}} data-value={value} onClick={this.selectColour.bind(this)}></li>
    });

    return (
      <div className="colours-box">
        <div className="text-cnt">
          <h3>Pick a colour</h3>
          <input type="text" placeholder="Type a colour name.." autoFocus onClick={this.stopPropagation.bind(this)} onChange={this.handleChange.bind(this)} value={this.state.colourName}/>
        </div>
        <ul className="colours-list">
          {boxes}
        </ul>
      </div>
    );
  }
}
