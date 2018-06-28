import React from 'react'
import Home from './src/components/Home.js'
import Chat from './src/components/Chat.js'

import {

  Router,
  Scene,

} from 'react-native-router-flux'

import {
  Platform
} from 'react-native'

class App extends React.Component {
  render() {
    return(
      <Router>
        <Scene key='root' style={{paddingTop:64}}>
          <Scene key='home' component={Home} title='Home'/>
          <Scene key='chat' component={Chat} title='Chat'/>
        </Scene>
      </Router>
    )
  }
}

export default App;
