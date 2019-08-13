import React, { Fragment } from 'react'
import GifListContainer from '../containers/GifListContainer'
import NavBar from './NavBar'

// the App component should render out the GifListContainer component 

const App = () => {
  return (
    <Fragment>
      < NavBar color='black' title="Giphy Search" />
      <GifListContainer />
    </Fragment>
  )
}

export default App
