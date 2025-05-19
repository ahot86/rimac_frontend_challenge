import {BrowserRouter, Routes, Route} from "react-router-dom";
import * as Context from "./context";
import { inicio, dashboard } from "./pages";
import Header from "./components/layout/Header";

function App() {
  

  return (
    <BrowserRouter>
      <Context.UserProvider>
        <Context.PlansProvider>
          <Routes>
            <Route path="/" element={<Header/>}>
              <Route index element={<inicio.Login/>} />
                <Route path="plans" element={<dashboard.Plans/>} />
                <Route path="summary" element={<dashboard.Summary/>} />
            </Route>
          </Routes>
        </Context.PlansProvider>
      </Context.UserProvider>
    </BrowserRouter>
  )
}

export default App
