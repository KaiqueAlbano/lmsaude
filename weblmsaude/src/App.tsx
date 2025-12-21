import { useState } from "react";
import Header from "./componentes/header/header";
import Presentation from "./page/presentation/Presentation";
import Nossoservicos from "./page/nossoservicos/Nossoservicos";
import ComoFunciona from "./page/comofunciona/ComoFunciona";
import FeedBack from "./page/feedback/FeedBack";
import Rodape from "./page/rodape/Rodape";

function App() {
  return (
    <>
      <div className="">
        <Header />
        <main>
          <Presentation />
          <Nossoservicos />
          <ComoFunciona />
          <FeedBack />
        </main>
        <Rodape />
      </div>
    </>
  );
}

export default App;
