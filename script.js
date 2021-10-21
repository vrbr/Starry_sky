function random(x, y) {
    return (x + (Math.random() * (y - x)));
}

for(let i = 0; i < 100; i++) {
    document.body.innerHTML += '<div class="star" style="animation-duration: ' +random(5, 30) + 's; top: ' + random(0, 100) + '%; left: ' + random(0, 100) + '%;"></div>';
}