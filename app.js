var container = document.getElementById('container');
function countDown(initial, final = 0, interval = 1) {
    var current = initial;
    while (current > final) {
        container.innerHTML = current;
        current -= interval;
    }
}
countDown(10);
