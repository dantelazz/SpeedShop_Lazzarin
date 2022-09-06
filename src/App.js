
import NavBar from './NavBar/NavBar'
import ItemCount from './ItemCount/ItemCount';

function App() {
  return (
    <div>
      <NavBar/>

      <ItemCount stock={5} initial={1} onAdd={0}/>
    </div>
      

  );
}

export default App;
