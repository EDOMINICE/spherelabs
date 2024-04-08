import { createContext, useRef, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppPage from "./components/AppPage";
import GlobalStyle from "./style/GlobalStyle";
import Airdrop from "./components/Airdrop";

export const AppContext = createContext();
function App() {
  const [openMenu, setOpenMenu] = useState(false);
  let tokenonicsId = useRef();
  let roadmapId = useRef();
  let aboutId = useRef();
  return (
    <>
      <AppContext.Provider
        value={{ openMenu, setOpenMenu, tokenonicsId, roadmapId, aboutId }}
      >
        <GlobalStyle />
        <BrowserRouter>
          <Routes>{<Route index element={<AppPage />} />}</Routes>
          <Routes>{<Route path="/airdrop" element={<Airdrop />} />}</Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;
