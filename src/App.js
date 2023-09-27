import './App.css'

import NavBar from './Components/NavBar/NavBar'
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer'


const App = () => {
  return (
    <>

      <NavBar/>
      <ItemListContainer greeting={'Bienvenidos'}/>
   

    </>
  )
}

export default App