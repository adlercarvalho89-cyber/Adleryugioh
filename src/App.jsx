import "./App.css"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Yugioh from "./Pages/Yugioh";


function App() {
return(
  <BrowserRouter>
  <Routes>
    <Route path= "/Adleryugioh/" element={<Home/>}/>
  </Routes>
  </BrowserRouter>
)
}
  
export default App;
