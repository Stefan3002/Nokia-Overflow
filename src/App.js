import './App.css';
import {Route, Routes} from "react-router";
import HomePage from "./components/pages/home-page/home-page";
import AppNavigation from "./components/app-navigation/app-navigation";
import MainApp from "./components/pages/main-app/main-app";
import Profile from "./components/pages/profile/profile";
import Auth from "./components/pages/auth/auth";
import AuthLogin from "./components/pages/auth-login/auth-login";
import {useEffect} from "react";
import {stateListener} from "./utils/firebase/firebase";
import {setUserError, setUserFinished, setUserStart, setUserStatus} from "./utils/store/user-store/user-actions";
import {useDispatch} from "react-redux";
import PrivateRoute from "./components/private-route/private-route";
import Categories from "./components/pages/categories/categories";
import QuestionOpened from "./components/pages/question-opened/question-opened";
import userStub from './utils/data-stubs/user-stub.json'
import QuestionsPage from "./components/pages/questions-page/questions-page";
import Trending from "./components/trending/trending";

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        stateListener((user) => {
            dispatch(setUserStart())
            dispatch(setUserStatus('loading'))
            try {
                // Get userData from DB
                let userData = null
                if(user)
                    userData = {
                        ...user,
                        ...userStub
                    }
                dispatch(setUserFinished(userData))
                dispatch(setUserStatus('loaded'))
            }catch (err){
                dispatch(setUserError(err))
            }

        })
    }, [])

  return (
    <div className="App">
        <Routes>
            <Route index path='/' element={<HomePage />} />
            <Route path='/app' element={<AppNavigation />} >
                <Route index element={<PrivateRoute><MainApp /></PrivateRoute>} />
                <Route path='profile' element={<PrivateRoute><Profile /></PrivateRoute>}/>
                <Route path='categories' element={<PrivateRoute><Categories/></PrivateRoute>}/>
                <Route path='trending' element={<PrivateRoute><QuestionsPage component={<Trending/>}/></PrivateRoute>}/>
                <Route path='question/:id' element={<PrivateRoute><QuestionOpened/></PrivateRoute>}/>
            </Route>
            <Route path='/auth' element={<Auth />} />
            <Route path='/auth/login' element={<AuthLogin />} />
        </Routes>
    </div>
  );
}

export default App;
