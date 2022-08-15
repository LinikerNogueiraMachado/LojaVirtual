import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "Components/Navbar";
import Form from "Form";
import Coletes from "pages/Coletes";
import Medidas from "pages/Medidas";


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
      </Routes>
    </BrowserRouter>
  )
}

export default App; 