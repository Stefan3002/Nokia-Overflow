import './unanswered.css'
import Question from "../question/question";
const Unanswered = () => {

    const unasweredQuestions = [
        {
            questionTitle: 'Why is University so hard?',
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
            questionTitle: 'Why is University so hard?',
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
            questionTitle: 'Why is University so hard?',
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
            questionTitle: 'Why is University so hard?',
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

    return (
        <div className='unanswered-container'>
            <h2>Unanswered Questions</h2>
            <div className="unanswered-questions">
                {
                    unasweredQuestions.map(unansweredQuestion => {
                        return <Question questionData={unansweredQuestion} />
                    })
                }
            </div>
        </div>
    )
}
export default Unanswered