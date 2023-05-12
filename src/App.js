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
import {useDispatch, useSelector} from "react-redux";
import PrivateRoute from "./components/private-route/private-route";
import Categories from "./components/pages/categories/categories";
import QuestionOpened from "./components/pages/question-opened/question-opened";
import QuestionsPage from "./components/pages/questions-page/questions-page";
import Trending from "./components/trending/trending";
import {useHttpReq} from "./utils/scripts/fetches/fetches";
import {
    getCreateAnswerOpened,
    getCreateQuestionOpened,
    getErrorMessage,
    getIsError,
    getIsPoppedUp,
    getPopUpMessage
} from "./utils/store/utils-store/utils-selectors";
import ErrorModal from "./components/error-modal/error-modal";
import Blur from "./components/blur/blur";
import PopUp from "./components/pop-up/pop-up";
import NewQuestion from "./components/new-question/new-question";
import NewAnswer from "./components/new-answer/new-answer";
import ChangeUserInfoModal from "./components/change-user-info-modal/change-user-info-modal";
import {getChangeUserInfoOpened} from "./utils/store/user-store/user-selectors";

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
              <Routes>
                  <Route index path='/' element={<HomePage/>}/>
                  <Route path='/app' element={<AppNavigation/>}>
                      <Route index element={<PrivateRoute><MainApp/></PrivateRoute>}/>
                      <Route path='profile' element={<PrivateRoute><Profile/></PrivateRoute>}/>
                      <Route path='categories' element={<PrivateRoute><Categories/></PrivateRoute>}/>
                      <Route path='trending/:category'
                             element={<PrivateRoute><QuestionsPage
                                 component={<Trending detailed={true}/>}/></PrivateRoute>}>
                      </Route>
                      <Route path='trending'
                             element={<PrivateRoute><QuestionsPage
                                 component={<Trending detailed={true}/>}/></PrivateRoute>}>
                      </Route>
                      <Route path='question/:id' element={<PrivateRoute><QuestionOpened/></PrivateRoute>}/>
                  </Route>
                  <Route path='/auth' element={<Auth/>}/>
                  <Route path='/auth/login' element={<AuthLogin/>}/>
              </Routes>
          </>
      </div>
  );
}

export default App;
