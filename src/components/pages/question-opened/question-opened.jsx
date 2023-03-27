import './question-opened.css'
import Parallax from "../../landing-page/parallax/parallax";
import ParallaxData from "./parallax-data-question-opened.json";
import ParallaxImg from "../../../utils/imgs/app/Headers/QuestionOpenedBanner.jpg";
import questionsStub from '../../../utils/data-stubs/questions-stub.json'
import {useEffect, useState} from "react";
import {useParams} from "react-router";
import Divider from "../../divider/divider";
import ProfileImage from "../../profile-image/profile-image";
import SmallProfileImage from "../../small-profile-image/small-profile-image";
import Button from "../../button/button";
import Answers from "../../answers/answers";
const QuestionOpened = () => {
    const {questions} = questionsStub
    const params = useParams()
    const [question, setQuestion] = useState(null)

    useEffect(() => {
        setQuestion(questions.filter(question => question.questionID === params.id)[0])
    }, [])


    if(question) {
        return (
            <>
                <Parallax dynamicTitle={question.questionTitle} linkTo='categories' showButton={false} parallaxData={ParallaxData} img={ParallaxImg}
                          height='40vh'/>

                <div className='question-opened-container'>
                    <div className="user-info">
                        <ProfileImage photoURL={question.user.photoURL} />
                        <p>{question.user.displayName}</p>
                    </div>

                    <h2 className='question-opened-title'>{question.questionTitle}</h2>
                    <Divider />
                    <p>{question.questionContent}</p>
                    <Button text='Add answer' textColor='black' borderColor='var(--accent-color)' borderSize='2' />
                    <Divider />
                    <Answers data={question.answers} />
                </div>
            </>
        )
    }
    else
        return null
}
export default QuestionOpened