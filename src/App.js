import './App.css';
import {Route, Routes} from "react-router";
import HomePage from "./components/pages/home-page/home-page";
import AppNavigation from "./components/app-navigation/app-navigation";
import MainApp from "./components/pages/main-app/main-app";
import Profile from "./components/pages/profile/profile";


function App() {
  return (
    <div className="App">
        <Routes>
            <Route index path='/' element={<HomePage />} />
            <Route path='/app' element={<AppNavigation />} >
                <Route path='/app' element={<MainApp />} />
                <Route path='profile' element={<Profile />}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
