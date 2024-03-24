const progress_circle = document.querySelector("svg");
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const attr_of_psuedu = document.getElementById('svg')
attr_of_psuedu.title = `0 s`;

start.addEventListener('click', () => {
    const hours = Number(document.getElementById('hours').value);
    const min = Number(document.getElementById('min').value);
    const sec = Number(document.getElementById('sec').value);
    const play = new Audio()
    play.src = "res/js/play.mp3"
    const calculated_time = (hours * 60 * 60) + (min * 60) + (sec);
    play.play()
    var sec_content = 0
    var min_content = 0
    var init_val_progress = 722;
    var calc_time_to_percent = 722 / calculated_time;
    stop.style.display = 'block'

    var progress = setInterval(() => {
        init_val_progress -= calc_time_to_percent;
        console.log(init_val_progress);
        if (init_val_progress > 0) {
            progress_circle.setAttribute("stroke-dashoffset", init_val_progress);
            if (sec_content < 60) {
                if (min_content != 0) {
                    attr_of_psuedu.title = `${min_content}M : ${++sec_content} s`;
                }
                else
                    attr_of_psuedu.title = `${++sec_content} s`;
            }
            if (sec_content >= 60) {
                min_content++;
                sec_content = 0
            }
        }
        else {
            clearInterval(progress)
            stop.style.display = 'none'
            console.log('ok ');
        }
        stop.addEventListener("click", () => {
            const pause = new Audio()
            pause.src = "res/js/pause.mp3"
            pause.play()
            clearInterval(progress)
            stop.style.display = 'none'
            console.log('ok ');
        })

    }, 1000);

});
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
document.getElementById('name-header').addEventListener('click', () => {

    if (j == 0) {
        if (document.getElementById('menu').classList.contains('menu-slide-down')) {
            document.getElementById('menu').classList.remove('menu-slide-down')
            const option = new Audio()
            option.src = "res/js/option.mp3"
            option.play()
        }
        document.getElementById('menu').classList.toggle('menu-slide-up')
        j++
    } else {
        if (document.getElementById('menu').classList.contains('menu-slide-up')) {
            document.getElementById('menu').classList.remove('menu-slide-up')
            const option = new Audio()
            option.src = "res/js/option.mp3"
            option.play()
        }
        document.getElementById('menu').classList.toggle('menu-slide-down')
        j = 0
    }
})
