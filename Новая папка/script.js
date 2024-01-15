let lastScrollY = window.scrollY;
let frame;

function animateTruck() {
    const truck = document.querySelector('.truck');
    const timeline = document.querySelector('.timeline-container');
    const timelineRect = timeline.getBoundingClientRect();
    const timelineStart = timelineRect.top + window.scrollY;
    const timelineEnd = timelineStart + timeline.offsetHeight;

    const truckHeight = truck.offsetHeight;
    const scrollY = lastScrollY + window.innerHeight / 2; // Центр экрана
    let truckPosition = scrollY - timelineStart;

    // Ограничиваем движение грузовика в пределах временной линии
    if (scrollY < timelineStart) {
        truckPosition = 0;
    } else if (scrollY > timelineEnd) {
        truckPosition = timeline.offsetHeight - truckHeight;
    }

    truck.style.transform = 'translateX(-50%) translateY(' + truckPosition + 'px)';

    frame = requestAnimationFrame(animateTruck);
}

function onScroll() {
    lastScrollY = window.scrollY;
    if (!frame) {
        frame = requestAnimationFrame(animateTruck);
    }
}

window.addEventListener('scroll', onScroll);
requestAnimationFrame(animateTruck);
