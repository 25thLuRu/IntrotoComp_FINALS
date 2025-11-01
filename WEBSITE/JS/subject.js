document.addEventListener('DOMContentLoaded', function() {
    let items = document.querySelectorAll('.slider .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');

    let active = 3;
    function loadShow() {
    // Reset all items
    items.forEach(item => {
        item.style.transform = "none";
        item.style.zIndex = 0;
        item.style.filter = 'blur(2px)';
        item.style.opacity = 0.6;
    });

    // Show active item
    items[active].style.transform = "none";
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;

    // Show next 2 items (with wrap-around)
    for (let offset = 1; offset <= 2; offset++) {
        let i = (active + offset) % items.length;
        items[i].style.transform = `translateX(${220 * offset}px) scale(${1 - 0.2 * offset}) perspective(100px) rotateY(-3deg)`;
        items[i].style.zIndex = -offset;
        items[i].style.opacity = 0.6;
    }

    // Show previous 2 items (with wrap-around)
    for (let offset = 1; offset <= 2; offset++) {
        let i = (active - offset + items.length) % items.length;
        items[i].style.transform = `translateX(${-120 * offset}px) scale(${1 - 0.2 * offset}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -offset;
        items[i].style.opacity = 0.6;
    }
}
    loadShow();

    next.onclick = function() {
        active = (active + 1) % items.length;
        loadShow();
    }
    prev.onclick = function() {
        active = (active - 1 + items.length) % items.length;
        loadShow();
    }
});