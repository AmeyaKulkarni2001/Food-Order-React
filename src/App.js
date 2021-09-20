import { Fragment } from "react";
import Header from "./componenets/Layout/Header";
import Meals from "./componenets/Meals/Meals";
import Cart from "./componenets/Cart/Cart";

function App() {
  return (
    <Fragment>
      <Cart/>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
