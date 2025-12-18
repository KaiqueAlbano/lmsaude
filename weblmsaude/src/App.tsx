import { useState } from "react";
import Header from "./componentes/header/header";
import Presentation from "./page/presentation/Presentation";
import Nossoservicos from "./page/nossoservicos/Nossoservicos";

function App() {
  return (
    <>
      <div className="">
        <Header />
        <Presentation />
        <Nossoservicos />
      </div>
    </>
  );
}

export default App;
