import Header from "./componentes/header/Header";
import Presentation from "./page/presentation/Presentation";
import Nossoservicos from "./page/nossoservicos/Nossoservicos";
import ComoFunciona from "./page/comofunciona/ComoFunciona";
import FeedBack from "./page/feedback/FeedBack";
import Rodape from "./page/rodape/Rodape";
import WhatsApp from "./componentes/whatsapp/WhatsApp";
import Contact from "./page/Contact";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

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
          <Contact />
        </main>
        <Rodape />
        <WhatsApp />
      </div>
    </>
  );
}

export default App;
