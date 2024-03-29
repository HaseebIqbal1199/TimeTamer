const progress_circle = document.querySelector("svg");
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const attr_of_psuedu = document.getElementById('svg')
attr_of_psuedu.title = `0 s`;

const increment_audio = new Audio()
increment_audio.src = "res/js/increment.mp3"

const alarm_ring = new Audio()
alarm_ring.src = "res/js/alarm_ring.mp3"


start.addEventListener('click', () => {
    const hours = Number(document.getElementById('hours').value);
    const min = Number(document.getElementById('min').value);
    const sec = Number(document.getElementById('sec').value);
    const calculated_time = (hours * 60 * 60) + (min * 60) + (sec)
    var sec_content = 0
    var min_content = 0
    var init_val_progress = 722;
    var calc_time_to_percent = 722 / calculated_time;
    stop.style.display = 'block'

    var progress = setInterval(() => {
        init_val_progress -= calc_time_to_percent;
        console.log(init_val_progress);
        if (init_val_progress > 0) {
            // Add this line
            increment_audio.play(); // Start the audio playback
            setTimeout(() => {
                increment_audio.pause()
                increment_audio.currentTime = 0
            }, 800);
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
            alarm_ring.play()
            clearInterval(progress)
            setTimeout(() => {
                alarm_ring.pause()
                alarm_ring.currentTime = 0
            },1050)
            stop.style.display = 'none'
            console.log('ok ');
        }
        stop.addEventListener("click", () => {

            clearInterval(progress)
            stop.style.display = 'none'
            console.log('dok');
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
const color_switcher_div = {
    '1': document.querySelector('.teal'),
    '2': document.querySelector('.yellow'),
    '3': document.querySelector('.green'),
    '4': document.querySelector('.red'),
    '5': document.querySelector('.orange'),
    '6': document.querySelector('.blue'),
    '7': document.querySelector('.purple'),
}
const color_switcher_db = {
    '1': "teal",
    '2': "yellow",
    '3': "green",
    '4': "red",
    '5': "orange",
    '6': "blue",
    '7': "purple"

}
Object.keys(color_switcher_div).forEach((key) => {
    color_switcher_div[key].addEventListener('click', () => {
        start.style.background = color_switcher_db[key]
        console.log(color_switcher_db[key]);
        document.querySelector('svg circle:nth-child(2)').setAttribute('stroke', color_switcher_db[key])
    })
})

var j = 0
document.getElementById('name-header').addEventListener('click', () => {

    if (j == 0) {
        if (document.getElementById('menu').classList.contains('menu-slide-down')) {
            document.getElementById('menu').classList.remove('menu-slide-down')
            const option = new Audio()
            option.src = "res/js/option.mp3"

        }
        document.getElementById('menu').classList.toggle('menu-slide-up')
        j++
    } else {
        if (document.getElementById('menu').classList.contains('menu-slide-up')) {
            document.getElementById('menu').classList.remove('menu-slide-up')
            const option = new Audio()
            option.src = "res/js/option.mp3"

        }
        document.getElementById('menu').classList.toggle('menu-slide-down')
        j = 0
    }
})
