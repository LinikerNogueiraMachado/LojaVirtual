import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "Components/Navbar";
import Form from "Form";
import Coletes from "pages/Coletes";
import Medidas from "pages/Medidas";
import Gravatas from "pages/Gravatas";
import Blazer from "pages/Blazer";
import Sapatos from "pages/Sapatos";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/form">
          <Route path=":h1" element={<Form />} />
        </Route>
        <Route path="/coletes">
          <Route path=':body' element={<Coletes />} />
        </Route>
        <Route path="/medidas">
          <Route path=':body' element={<Medidas />} />
        </Route>
        <Route path="/gravatas">
          <Route path=':body' element={<Gravatas />} />
        </Route>
        <Route path="/blazer">
          <Route path=':body' element={<Blazer />} />
        </Route>
        <Route path="/sapatos">
          <Route path=':body' element={<Sapatos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App; 