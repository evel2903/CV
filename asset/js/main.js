document.getElementById('menu-toggler').addEventListener('click', () => {
    const menu = document.getElementById('menu')
    if (menu.classList.contains('menu--show')) {
        menu.classList.remove('menu--show')
    }
    else {
        window.addEventListener('touchmove', function (e) {
            if (!menu.contains(e.target) && !document.getElementById('menu-toggler').contains(e.target)) {
                menu.classList.remove('menu--show')
            }
        });
        window.addEventListener('click', function (e) {
            if (!menu.contains(e.target) && !document.getElementById('menu-toggler').contains(e.target)) {
                menu.classList.remove('menu--show')
            }
        });
        menu.classList.add('menu--show')
    }
})

//Custom Scrollbar ---------------------------------------------------

let bar_bg = document.getElementById("top-scrollbar-bg"),
    body = document.body,
    html = document.documentElement;

bar_bg.style.minWidth = document.width + "px";

document.getElementsByTagName("body")[0].onresize = function () {
    // Update the gradient width
    bar_bg.style.minWidth = document.width + "px";
}

window.onscroll = function () {
    // Change the width of the progress bar
    let bar = document.getElementById("top-scrollbar"),
        dw = document.documentElement.clientWidth,
        dh = Math.max(body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight),
        wh = window.innerHeight,
        pos = pageYOffset || (document.documentElement.clientHeight ?
            document.documentElement.scrollTop : document.body.scrollTop),
        bw = ((pos / (dh - wh)) * 100);

    bar.style.width = bw + "%";
}
//Custom Scrollbar End ---------------------------------------------------


const skills = document.querySelectorAll('.skills__item')
skills.forEach(s => {
    s.style = `background-color: ${s.getAttribute('bgc')}`
})
