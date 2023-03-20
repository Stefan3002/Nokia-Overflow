import './App.css';
import {Route, Router, Routes} from "react-router";
import Navigation from "./components/landing-page/navigation/navigation";
import HomePage from "./components/pages/home-page/home-page";
import AppNavigation from "./components/app-navigation/app-navigation";
import MainApp from "./components/pages/main-app/main-app";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route index path='/' element={<HomePage />} />
            <Route path='/app' element={<AppNavigation />} >
                <Route path='/app' element={<MainApp />} />
            </Route>
        </Routes>
    </div>
  );
}

export default App;
