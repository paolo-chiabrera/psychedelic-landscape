import React, {Component} from 'react';
import {Header} from './header';
import {Grid} from './grid/grid';
import {Footer} from './footer';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
  },
  main: {
    position: 'relative',
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
};

export class Main extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Header/>
        <main style={styles.main}>
          <Grid />
        </main>
        <Footer/>
      </div>
    );
  }
}
