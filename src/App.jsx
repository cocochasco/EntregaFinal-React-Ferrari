import { BrowserRouter, Routes, Route} from "react-router-dom"

import { CartProvider } from "./contexts/CartContext";
import { NavBar } from "./components/NavBar/NavBar"
import { ItemListContainer1 } from "./components/ItemListContainer/ItemListContainer1";
import { ItemDetailContainer } from "./components/ItemListContainer/ItemDetailContainer"
import { Cart } from "./components/Cart";
import { Error } from "./components/Error";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer1/>}></Route>
            <Route path="/category/:id" element={<ItemListContainer1/>}></Route>
            <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
      </BrowserRouter>
    </CartProvider>
   )
}

export default App;

