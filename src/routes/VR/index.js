import React from 'react'

import 'aframe'
import 'aframe-animation-component'
import 'aframe-particle-system-component'

// import { Entity, sceneContainer } from 'aframe-react'
import { Entity, Scene } from 'aframe-react';

class VR extends React.Component {
  render () {
    return (
      <div>TEST</div>
      // <Scene>
      //   <a-assets>
      //     <img id='groundTexture' src='https://cdn.aframe.io/a-painter/images/floor.jpg' />
      //     <img id='skyTexture' src='https://cdn.aframe.io/a-painter/images/sky.jpg' />
      //     <div id="page"><p>MY STUFF</p></div>
      //   </a-assets>
      //
      //   <Entity primitive='a-plane' src='#groundTexture' rotation='-90 0 0' height='100' width='100' />
      //   <Entity primitive='a-light' type='ambient' color='#445451' />
      //   <Entity primitive='a-light' type='point' intensity='2' position='2 4 4' />
      //   <Entity primitive='a-sky' height='2048' radius='30' src='#skyTexture' theta-length='90' width='2048' />
      //   <Entity particle-system={{preset: 'snow', particleCount: 2000}} />
      //
      //   <Entity text={{value: 'React VR Chat', align: 'center'}} position={{x: 0, y: 2, z: -1}} />
      //
      //   <Entity primitive='a-box' src='#page' rotation="0 0 0" position={{x: 0, y: 2, z: -3}} />
      //   <Entity primitive='a-plane' position="0 0 -4" rotation="0 0 0" width="4" height="4" color="#7BC8A4" />
      //
      //
      //   {/* <Entity src='#page' height='100' radius='30' theta-length='90' position={{x: 0, y: 2, z: -1}} /> */}
      //
      //   <Entity text={{value: 'Use the arrow keys or WASD to navigate', align: 'center'}} position={{x: 0, y: 1, z: -1}} />
      //
      //
      //   <Entity primitive='a-camera'>
      //     <Entity primitive='a-cursor' animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}} />
      //   </Entity>
      // </Scene>
    )
  }
}

// export default VR
export default {
  component : VR
}
