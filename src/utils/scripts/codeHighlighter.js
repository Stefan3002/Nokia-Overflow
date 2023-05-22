const codeHighlighter = () => {
    const targets = document.querySelectorAll('.answer-details-container, .question-content')
    for(let target of targets){
        const targetText = target.innerHTML
        let result = ''
        let numberOfTildes = 0
        for(let ch of targetText){
            if(ch === '`') {
                numberOfTildes++
                if (numberOfTildes === 3) {
                    if (target.classList.contains('inverse-high'))
                        result += '<span class="high-code-inversed">'
                    else
                        result += '<span class="high-code">'
                }
                if (numberOfTildes === 4)
                    result += '</span>'
                if (numberOfTildes === 6)
                    numberOfTildes = 0
            }
            else
                result += ch
        }
        target.innerHTML = result
    }
}
export default codeHighlighter