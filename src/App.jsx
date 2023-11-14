import { BrowserRouter, Routes, Route} from "react-router-dom"

import  { NavBar } from "./components/NavBar/NavBar"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemListContainer/ItemDetailContainer"
import { Error } from "./components/Error";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer/>}></Route>
          <Route path="/category/:id" element={<ItemListContainer/>}></Route>
          <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
    </BrowserRouter>
   )
}

export default App;

