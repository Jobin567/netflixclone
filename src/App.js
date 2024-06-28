import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/Row Post/RowPost';
import {action,actionmovies,comedymovies,horrormovies,originals, romancemovies} from './urls'

function App() {
  return(
    <div className='App'>
      <NavBar/>
      <Banner/>
      <RowPost url = {originals}title='Netflix Orginals'/>
      <RowPost url={action}title='Action' isSmall/>
      <RowPost url={comedymovies}title='Comedy Movies' isSmall/>
      <RowPost url={horrormovies}title='Horror Movies' isSmall/>
      <RowPost url={actionmovies}title='Action Movies' isSmall/>
      <RowPost url={romancemovies}title='Romance Movies' isSmall/>
      
      
    </div>
  )
  
}

export default App;
