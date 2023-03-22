import './trending.css'
import Question from "../question/question";
import Button from "../button/button";
import SearchInput from "../search-input/search-input";
import {useEffect, useState} from "react";
const Trending = ({detailed}) => {

    const trendingQuestions = [
        {
            questionTitle: 'How can I pass the Networks exam?',
            questionContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n' +
                'molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n' +
                'numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n' +
                'optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\n' +
                'obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam\n' +
                'nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,\n' +
                'tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,\n' +
                'quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos \n' +
                'sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam\n' +
                'recusandae alias error harum maxime adipisci amet laborum. Perspiciatis \n' +
                'minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit \n' +
                'quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur \n' +
                'fugiat, temporibus enim commodi iusto libero magni deleniti quod quam \n' +
                'consequuntur! Commodi minima excepturi repudiandae velit hic maxime\n' +
                'doloremque. Quaerat provident commodi consectetur veniam simi',
            likes: 10,
            dislikes: 5,
            date: '20.03.2023'
        },
        {
            questionTitle: 'How can I pass the Networks exam?',
            questionContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n' +
                'molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n' +
                'numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n' +
                'optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\n' +
                'obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam\n' +
                'nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,\n' +
                'tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,\n' +
                'quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos \n' +
                'sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam\n' +
                'recusandae alias error harum maxime adipisci amet laborum. Perspiciatis \n' +
                'minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit \n' +
                'quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur \n' +
                'fugiat, temporibus enim commodi iusto libero magni deleniti quod quam \n' +
                'consequuntur! Commodi minima excepturi repudiandae velit hic maxime\n' +
                'doloremque. Quaerat provident commodi consectetur veniam simi',
            likes: 10,
            dislikes: 5,
            date: '20.03.2023'
        },
        {
            questionTitle: 'How can I pass the Networks exam?',
            questionContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n' +
                'molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n' +
                'numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n' +
                'optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\n' +
                'obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam\n' +
                'nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,\n' +
                'tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,\n' +
                'quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos \n' +
                'sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam\n' +
                'recusandae alias error harum maxime adipisci amet laborum. Perspiciatis \n' +
                'minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit \n' +
                'quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur \n' +
                'fugiat, temporibus enim commodi iusto libero magni deleniti quod quam \n' +
                'consequuntur! Commodi minima excepturi repudiandae velit hic maxime\n' +
                'doloremque. Quaerat provident commodi consectetur veniam simi',
            likes: 10,
            dislikes: 5,
            date: '20.03.2023'
        },{
            questionTitle: 'How can I pass the Networks exam?',
            questionContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n' +
                'molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n' +
                'numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n' +
                'optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\n' +
                'obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam\n' +
                'nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,\n' +
                'tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,\n' +
                'quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos \n' +
                'sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam\n' +
                'recusandae alias error harum maxime adipisci amet laborum. Perspiciatis \n' +
                'minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit \n' +
                'quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur \n' +
                'fugiat, temporibus enim commodi iusto libero magni deleniti quod quam \n' +
                'consequuntur! Commodi minima excepturi repudiandae velit hic maxime\n' +
                'doloremque. Quaerat provident commodi consectetur veniam simi',
            likes: 10,
            dislikes: 5,
            date: '20.03.2023'
        },
        {
            questionTitle: 'How can I pass the Networks exam?',
            questionContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n' +
                'molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n' +
                'numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n' +
                'optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\n' +
                'obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam\n' +
                'nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,\n' +
                'tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,\n' +
                'quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos \n' +
                'sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam\n' +
                'recusandae alias error harum maxime adipisci amet laborum. Perspiciatis \n' +
                'minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit \n' +
                'quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur \n' +
                'fugiat, temporibus enim commodi iusto libero magni deleniti quod quam \n' +
                'consequuntur! Commodi minima excepturi repudiandae velit hic maxime\n' +
                'doloremque. Quaerat provident commodi consectetur veniam simi',
            likes: 10,
            dislikes: 5,
            date: '20.03.2023'
        },
        {
            questionTitle: 'How can I pass the Networks exam?',
            questionContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n' +
                'molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n' +
                'numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n' +
                'optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\n' +
                'obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam\n' +
                'nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,\n' +
                'tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,\n' +
                'quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos \n' +
                'sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam\n' +
                'recusandae alias error harum maxime adipisci amet laborum. Perspiciatis \n' +
                'minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit \n' +
                'quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur \n' +
                'fugiat, temporibus enim commodi iusto libero magni deleniti quod quam \n' +
                'consequuntur! Commodi minima excepturi repudiandae velit hic maxime\n' +
                'doloremque. Quaerat provident commodi consectetur veniam simi',
            likes: 10,
            dislikes: 5,
            date: '20.03.2023'
        },{
            questionTitle: 'How can I pass the Networks exam?',
            questionContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,\n' +
                'molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum\n' +
                'numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium\n' +
                'optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis\n' +
                'obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam\n' +
                'nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,\n' +
                'tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,\n' +
                'quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos \n' +
                'sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam\n' +
                'recusandae alias error harum maxime adipisci amet laborum. Perspiciatis \n' +
                'minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit \n' +
                'quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur \n' +
                'fugiat, temporibus enim commodi iusto libero magni deleniti quod quam \n' +
                'consequuntur! Commodi minima excepturi repudiandae velit hic maxime\n' +
                'doloremque. Quaerat provident commodi consectetur veniam simi',
            likes: 10,
            dislikes: 5,
            date: '20.03.2023'
        }
    ]
    const [filteredTrendingQuestions, setFilteredTrendingQuestions] = useState(trendingQuestions)

    const filterNoks = (event) => {
        const targetString = event.target.value
        setFilteredTrendingQuestions(trendingQuestions.filter(question => question.questionTitle.toLowerCase().includes(targetString.toLowerCase())))
    }
    return (
        <div className='trending-container'>
            <div className="trending-header">
                <div className="trending-header-top">
                    <h2>Trending</h2>
                    <Button text='Create Nok' borderSize='2' borderColor='var(--main-color)' textColor='black' />
                </div>
                <div className="trending-header-bottom">
                    <SearchInput callback={filterNoks} placeholder='Search noks' borderSize='2' borderColor='var(--main-color)' />
                </div>
            </div>
            <div className="trending-questions">
                {filteredTrendingQuestions.map((trendingQuestion, idx) => {
                    return <Question detailed={detailed} questionData={trendingQuestion} animationDelay={idx * 100} />
                })}
            </div>

        </div>
    )
}
export default Trending