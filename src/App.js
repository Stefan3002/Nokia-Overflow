import React, {Suspense, useEffect} from "react";
import './App.css';
import Loader from "./components/loader/loader";
import Blur from "./components/blur/blur";
import PrivateRoute from "./components/private-route/private-route";
import {getChangeUserInfoOpened} from "./utils/store/user-store/user-selectors";
import {Route, Routes} from "react-router";
import AppNavigation from "./components/app-navigation/app-navigation";
import MainApp from "./components/pages/main-app/main-app";
import Auth from "./components/pages/auth/auth";
import AuthLogin from "./components/pages/auth-login/auth-login";
import {stateListener} from "./utils/firebase/firebase";
import {setUserError, setUserFinished, setUserStart, setUserStatus} from "./utils/store/user-store/user-actions";
import {useDispatch, useSelector} from "react-redux";
import PopUp from "./components/pop-up/pop-up";
import ErrorModal from "./components/error-modal/error-modal";
import {useHttpReq} from "./utils/scripts/fetches/fetches";
import NewQuestion from "./components/new-question/new-question";
import ChangeUserInfoModal from "./components/change-user-info-modal/change-user-info-modal";
import {
    getCreateAnswerOpened,
    getCreateQuestionOpened,
    getErrorMessage,
    getIsError,
    getIsPoppedUp,
    getPopUpMessage
} from "./utils/store/utils-store/utils-selectors";
import NewAnswer from "./components/new-answer/new-answer";

const Profile = React.lazy(() => import("./components/pages/profile/profile"));
const Categories = React.lazy(() => import("./components/pages/categories/categories"));
const QuestionOpened = React.lazy(() => import("./components/pages/question-opened/question-opened"));
const QuestionsPage = React.lazy(() => import("./components/pages/questions-page/questions-page"));
const Trending = React.lazy(() => import("./components/trending/trending"));


const Favourites = React.lazy(() => import("./components/favourites/favourites"));
const HomePage = React.lazy(() => import("./components/pages/home-page/home-page"));

function App() {
    const isError = useSelector(getIsError)
    const errorMessage = useSelector(getErrorMessage)
    const isPoppedUp = useSelector(getIsPoppedUp)
    const popUpMessage = useSelector(getPopUpMessage)
    const addAnswer = useSelector(getCreateAnswerOpened)
    const dispatch = useDispatch()
    const sendRequest = useHttpReq()
    const createQuestion = useSelector(getCreateQuestionOpened)
    const changeInfoOpened = useSelector(getChangeUserInfoOpened)
    useEffect(() => {
        stateListener((user) => {
            (async () => {
                console.log('USER!', user)
                dispatch(setUserStart())
                dispatch(setUserStatus('loading'))

                try {
                    // Set the user to null if you logged out!
                    let userData = null
                    if (user)
                        userData = await sendRequest(`${process.env.REACT_APP_SERVER_URL}/users/${user.uid}`)
                    dispatch(setUserFinished(userData))
                    dispatch(setUserStatus('loaded'))
                } catch (err) {
                    dispatch(setUserError(err))
                }
            })()
        })
    }, [dispatch, sendRequest])


    return (
        <div className="App">
            <>
                {isError && <> <Blur/><ErrorModal errorMessage={errorMessage}/> </>}
                {isPoppedUp && <PopUp text={popUpMessage}/>}
                {createQuestion && <><Blur/> <NewQuestion/> </>}
                {addAnswer && <><Blur/> <NewAnswer/> </>}
                {changeInfoOpened && <> <Blur/><ChangeUserInfoModal/> < />}
                <Suspense fallback={<><Blur/><Loader/> < />}>
                    <Routes>
                        <Route index path='/' element={<HomePage/>}/>
                        <Route path='/app' element={<AppNavigation/>}>
                            <Route index element={<PrivateRoute><MainApp/></PrivateRoute>}/>
                            <Route path='profile' element={<PrivateRoute><Profile/></PrivateRoute>}/>
                            <Route path='categories' element={<PrivateRoute><Categories/></PrivateRoute>}/>
                            <Route path='trending/:category'
                                   element={<PrivateRoute><QuestionsPage
                                       component={<Trending detailed={true}
                                                            title='Latest questions'/>}/></PrivateRoute>}>
                            </Route>
                            <Route path='trending'
                                   element={<PrivateRoute><QuestionsPage
                                       component={<Trending detailed={true}
                                                            title='Latest questions'/>}/></PrivateRoute>}>
                            </Route>
                            <Route path='favourites'
                                   element={<PrivateRoute><QuestionsPage headerTitle='Favourite Questions'
                                                                         component={
                                                                             <Favourites/>}/></PrivateRoute>}/>
                            <Route path='my-questions' element={<PrivateRoute><QuestionsPage headerTitle='My questions'
                                                                                             component={<Favourites
                                                                                                 myQuestions={true}/>}/></PrivateRoute>}/>
                            <Route path='question/:id' element={<PrivateRoute><QuestionOpened/></PrivateRoute>}/>

                        </Route>
                        <Route path='/auth' element={<Auth/>}/>
                        <Route path='/auth/login' element={<AuthLogin/>}/>
                    </Routes>
                </Suspense>
            </>
        </div>
    );
}

export default App;
