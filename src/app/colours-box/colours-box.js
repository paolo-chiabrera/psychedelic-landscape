import React, {Component} from 'react';

import TinyColor from 'tinycolor2';

export class ColoursBox extends Component {

  constructor() {
    super();

    this.state = {
      colours: [],
      colourName: '',
      maxColours: 5
    }

    this.colourNames = ["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkgrey","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","green","greenyellow","grey","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"];
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
          <input type="text" placeholder="Type a colour name.." autoFocus={true} onClick={this.stopPropagation.bind(this)} onChange={this.handleChange.bind(this)} value={this.state.colourName}/>
        </div>
        <ul className="colours-list">
          {boxes}
        </ul>
      </div>
    );
  }
}
