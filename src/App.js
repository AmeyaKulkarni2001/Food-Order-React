import { Fragment } from "react";
import Header from "./componenets/Layout/Header";
import Meals from "./componenets/Meals/Meals";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
