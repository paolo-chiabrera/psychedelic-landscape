import React, {Component} from 'react';

export class Cell extends Component {

  constructor() {
    super();

    this.state = {
      level: 0,
      colour: '#fff',
      width: '1%'
    }
  }

  componentWillMount() {
    this.setState({
      width: 100 / this.props.size + '%'
    });
    this.updateState(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.updateState(nextProps);
  }

  updateState(props) {

    let level = props.size - 1;

    if(!(props.index === props.target)){
      level -= Math.abs(props.index - props.target);
    }

    this.setState({
      level: level,
      colour: props.colours[level]
    });
  }

  render() {
    return (
      <div className="cell" style={{width: this.state.width, background: this.state.colour}}></div>
    );
  }
}
