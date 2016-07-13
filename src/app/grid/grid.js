import React, {Component} from 'react';



import {Row} from '../row/row';

export class Grid extends Component {

  constructor() {
    super();

    this.state = {
      rows: 10
    };
  }

  render() {

    const rows = [];

    for(let i = 0; i < this.state.rows; i++){
        rows.push(<Row key={i} index={i} size={this.state.rows}/>);
    }

    return (
      <div className="grid">
        {rows}
      </div>
    );
  }
}
