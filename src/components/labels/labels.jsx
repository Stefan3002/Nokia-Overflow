import './labels.css'
import Label from "../label/label";

const Labels = ({labels, fewItems}) => {
    return (
        <div className='labels-container'>
            {
                labels.map((label, idx) => {
                    if(fewItems){
                        if(idx < 3)
                            return <Label labelData={label.slice(0, 7)}/>
                    }
                    else
                        return <Label labelData={label.slice(0, 12)} />
                })
            }
            {labels.length > 3 && fewItems ? <p className='more-labels-container'>+{labels.length - 3}</p> : null}
        </div>
    )
}
export default Labels