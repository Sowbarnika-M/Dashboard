
import { Routes, Route } from "react-router-dom";
import Mainpage from './pages/Mainpage'
import Piechartpage from './pages/Piechartpage';
import Barchartpage from "./pages/Barchartpage";
import Tablepage from './pages/Tablepage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Mainpage />}></Route>
      <Route path="/piechart" element={<Piechartpage />}></Route>
      <Route path="/barchart" element={<Barchartpage />}></Route>
      <Route path="/table" element={<Tablepage />}></Route>
  </Routes>
  )
}

export default App