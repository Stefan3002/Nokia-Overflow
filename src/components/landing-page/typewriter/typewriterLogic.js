let started = false
const startTypewriter = () => {
    const container = document.querySelector(".container-typewriter")
    const speedd = 200
    let ii = 0;
    const words = ["System Engineer?", "WEB Developer?", "Network Administrator?", "Software Engineer?", "Team Leader?"]
    let index = -1;
    const waitBeforeDelete = 1500
    const acceleration = 10
    let waitBeforeNextType = 200;

    // This is just to avoid re-renders (case in which it would start twice)
    if(!started) {
        helpTypeWrite()
        started = true
    }

    function helpTypeWrite(){
        index += 1
        if (index > words.length - 1)
            index = 0
        // Color the corresponding target
        const target = document.querySelector(`#target${index + 1}`)
        if (target) {
            target.classList.add('highlighted-target')
            typeWrite(words[index])
        }
    }

    function typeWrite(word){
        if(ii < word.length){
            container.innerHTML += (word[ii] + "<span class='pointer'>"+ '|' + "</span>")
            ii++
            setTimeout(function(){helper(word)},waitBeforeNextType)
        }
        else
            setTimeout(function(){deleteWord(word)},waitBeforeDelete)
    }

    function deleteWord(word){
        if(ii > 0){
            container.textContent = container.textContent.slice(0,ii - 1)
            ii--
            setTimeout(function(){deleteWord(word)}, speedd - word.length * 11)
        }
        else {
            const target = document.querySelector(`#target${index + 1}`)
            if (target) {
                target.classList.remove('highlighted-target')
                helpTypeWrite()
            }
        }
    }

    function helper(word){
        container.textContent = container.textContent.slice(0, container.textContent.length - 1)
        setTimeout(function(){typeWrite(word)},speedd - word.length * acceleration)
    }
}
export default startTypewriter