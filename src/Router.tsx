import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chart from "./routes/Chart";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import Price from "./routes/Price";

interface RouterProps {
  toggleDark: () => void;
  isDark: boolean;
}

function Router({toggleDark, isDark}:RouterProps) {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/:coinID" element={<Coin isDark={isDark}/>}>
          <Route path={'chart'} element={<Chart isDark={isDark} />}/>
          <Route path={'price'} element={<Price />}/>
        </Route>
        <Route path="/" element={<Coins toggleDark={toggleDark} isDark={isDark}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
