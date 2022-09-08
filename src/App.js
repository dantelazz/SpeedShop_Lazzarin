
import NavBar from './NavBar/NavBar';
import ItemCount from './Item/ItemCount';
import ItemListContainer from './Item/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar/>

      <ItemListContainer/>

      {/* <ItemCount stock={5} initial={1} onAdd={0}/> */}

    </div>
      

  );
}

export default App;
