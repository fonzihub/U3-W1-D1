import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";
import logo from "./assets/logo-epicode.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a
          target="_blank"
          href="https://epicode.com/it/corso-web-developer/?utm_source=googleads&utm_campaign=&utm_adgroup=&utm_term=&utm_campaign=SK+-+Performance+Max+-+NEW+EPICODE&utm_source=adwords&utm_medium=ppc&hsa_acc=1246633295&hsa_cam=16524306461&hsa_grp=&hsa_ad=&hsa_src=x&hsa_tgt=&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gad_campaignid=16512132129&gbraid=0AAAAABxWOfozlgrIDz73jIOpdcwA2gNI3&gclid=Cj0KCQjwyvfDBhDYARIsAItzbZGpBzssDufYYO1j60MakM3os6AgD-gvlP5xe9GtyWrV9e5L6saY6XgaAu68EALw_wcB"
        >
          <ImageComponent src={logo} alt="logo-epicode" />
        </a>
      </div>
      <h1>il mio primo React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>

        <ButtonComponent text="Invia" />
        <ButtonComponent text="Submit" />
        <ButtonComponent text="Enviar" />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
