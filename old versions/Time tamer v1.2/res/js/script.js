const progress_circle = document.getElementById('circle')
const start = document.getElementById('start')
const stop = document.getElementById('stop')
progress_circle.title = `0 s`;
var ui_color = 'rgb(56, 172, 56)';

start.addEventListener('click', () => {
    const hours = Number(document.getElementById('hours').value)
    const min = Number(document.getElementById('min').value)
    const sec = Number(document.getElementById('sec').value)
    var calculated_time = (hours * 60 * 60) + (min * 60) + (sec)
    var sec_content = 0
    var min_content = 0
    var init_val_progress = 0
    var calc_time_to_percent = 100 / calculated_time
    stop.style.display = 'block'
    var progress = setInterval(() => {
        init_val_progress += calc_time_to_percent
        progress_circle.style.background = `conic-gradient(${ui_color} ${init_val_progress}%,rgba(255, 255, 255, 0) 0%)`
        if (sec_content<60) {
            if (min_content != 0) {
                progress_circle.title = `${min_content}M : ${++sec_content} s`;
            }
            else
                progress_circle.title = `${++sec_content} s`;
        }
        if (sec_content>=60) {
            min_content++;
            sec_content=0
        }
        if (init_val_progress >= 100) {
            // console.log(`b: ${b}`);
            // console.log(`a: ${a}`);
            clearInterval(progress)
            stop.style.display = 'none'
        }
        stop.addEventListener('click', () => {
            clearInterval(progress)
            stop.style.display = 'none'
        })
    }, 1000);
})
array = [
    document.getElementById('sec'),
    document.getElementById('hours'),
    document.getElementById('min'),
]
array.forEach(element => {
    element.addEventListener('focusin', () => {
        element.value = ""
    })
    element.addEventListener('focusout', () => {
        if (!Number(element.value)) {
            element.value = "00"
        }
    })
    element.addEventListener('input', () => {
        if (Number(element.value) > 60) {
            element.value = ""
        }
    })
});
function teal() {
    ui_color = 'teal';
    start.style.background = ui_color
}
function yellow() {
    ui_color = 'yellow'
    start.style.background = ui_color

}
function green() {
    ui_color = 'green'
    start.style.background = ui_color

}
function red() {
    ui_color = 'red'
    start.style.background = ui_color

}
function orange() {
    ui_color = 'orange'
    start.style.background = ui_color

}
function blue() {
    ui_color = 'blue'
    start.style.background = ui_color

}
function purple() {
    ui_color = 'purple'
    start.style.background = ui_color

}
function shape_circle() {
    progress_circle.style.borderRadius = '50%'
}
function shape_square() {
    progress_circle.style.borderRadius = '20%'

}
var j = 0
document.getElementById('name-header').addEventListener('click',()=>{
    if (j == 0) {
        if(document.getElementById('menu').classList.contains('menu-slide-down')){
            document.getElementById('menu').classList.remove('menu-slide-down')
        }
        document.getElementById('menu').classList.toggle('menu-slide-up')
        j++
    } else {
        if(document.getElementById('menu').classList.contains('menu-slide-up')){
            document.getElementById('menu').classList.remove('menu-slide-up')
        }
        document.getElementById('menu').classList.toggle('menu-slide-down')
        j=0
    }
})
