import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link,
   Routes,
} from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Hotel } from "./pages/hotel/Hotel";
import { List } from "./pages/list/List";

function App() {
   return (
      <div>
         <Router>
            <Routes>
               <Route path="/" element={<Home />}></Route>
               <Route path="/hotel" element={<List />}></Route>
               <Route path="/hotel/:id" element={<Hotel />}></Route>
            </Routes>
         </Router>
      </div>
   );
}

export default App;
