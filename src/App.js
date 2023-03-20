import './App.css';
import {Route, Router, Routes} from "react-router";
import Navigation from "./components/landing-page/navigation/navigation";
import HomePage from "./components/pages/home-page/home-page";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<HomePage />}>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
