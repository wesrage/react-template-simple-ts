import * as React from 'react'
import { hot } from 'react-hot-loader'
import Button from '../components/Button'

class App extends React.Component {
   render() {
      return (
         <div>
            <h1>Hello World</h1>
            <Button label="Click me!" onClick={() => { console.log('clicked!') }} />
         </div>
      )
   }
}

export default hot(module)(App)