import  { NavBar } from "./components/NavBar/NavBar"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting={"Welcome! We are ONESTA!"}/>
    </>
   )
}

export default App;