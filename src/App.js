import React, { Component } from 'react';
import './App.css';
import ParticlesContainer from './Components/ParticlesContainer';

class App extends Component {
  render() {
    return (
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(45deg, rgb(14, 74, 112) 0%, rgb(0, 4, 7) 100%)"
      }}>
        <ParticlesContainer/>
        <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}>
          <div className='nametag'>
            AMANDA WAI
            <p className='subtitle'>
            Software Engineer,&nbsp;
            Graduating May 2019
            <p>
              <a href="https://github.com/amawai">
                <img height="40" width="40" src="https://www.iconsdb.com/icons/preview/white/github-10-xxl.png"/>
              </a>
              &nbsp;&nbsp;
              <a href="https://www.linkedin.com/in/amandawai/">
                <img height="40" width="40" src="https://www.iconsdb.com/icons/preview/white/linkedin-4-xxl.png"/>
              </a>
              &nbsp;&nbsp;
              <a href="https://drive.google.com/file/d/1kljmziZ-j1F48tW_bmyGIOlZkKdTMSAL/view">
                <img height="40" width="40" src="https://www.iconsdb.com/icons/preview/white/info-xxl.png"/>
              </a>
            </p>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
