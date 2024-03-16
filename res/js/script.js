const progress_circle = document.getElementById('circle')
const start = document.getElementById('start')
const stop = document.getElementById('stop')
progress_circle.title = `0 s`;



start.addEventListener('click', () => {
    const hours = Number(document.getElementById('hours').value)
    const min = Number(document.getElementById('min').value)
    const sec = Number(document.getElementById('sec').value)
    var calculated_time = (hours * 60 * 60) + (min * 60) + (sec)
    stop.style.display = 'block'
    var sec_content = 0
    var b = 0
    var a = 100 / calculated_time
    var progress = setInterval(() => {
        b += a
        console.log(b);
        progress_circle.style.background = `conic-gradient(rgb(56, 172, 56) ${b}%,rgba(255, 255, 255, 0) 0%)`
        progress_circle.title = `${++sec_content} s`;
        if (b >= 100) {
            console.log(`b: ${b}`);
            console.log(`a: ${a}`);
            clearInterval(progress)
        }
        stop.addEventListener('click',()=>{
            clearInterval(progress)
        })
    }, 1000);
})



document.getElementById('sec').addEventListener('input', () => {

    if (Number(document.getElementById('sec').value) > 60) {
        document.getElementById('sec').value = ""
    }

})
document.getElementById('hours').addEventListener('input', () => {

    if (Number(document.getElementById('hours').value) > 24) {
        document.getElementById('hours').value = ""
    }

})
document.getElementById('min').addEventListener('input', () => {

    if (Number(document.getElementById('min').value) > 60) {
        document.getElementById('min').value = ""
    }

})
document.getElementById('sec').addEventListener('focusin', () => {
    document.getElementById('sec').value = ""
})
document.getElementById('hours').addEventListener('focusin', () => {
    document.getElementById('hours').value = ""
})
document.getElementById('min').addEventListener('focusin', () => {
    document.getElementById('min').value = ""
})
document.getElementById('sec').addEventListener('focusout', () => {
    if (!Number(document.getElementById('sec').value)) {
        document.getElementById('sec').value = "00"
    }
})
document.getElementById('hours').addEventListener('focusout', () => {
    if (!Number(document.getElementById('hours').value)) {
        document.getElementById('hours').value = "00"
    }
})
document.getElementById('min').addEventListener('focusout', () => {
    if (!Number(document.getElementById('min').value)) {
        document.getElementById('min').value = "00"
    }
})

