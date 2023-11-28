import '../scss/style.scss';
import '../scss/product.scss';

const container = document.querySelector('.section_preview_slider');
const prevButton = document.querySelector('.arrow_left_button');
const nextButton = document.querySelector('.arrow_right_button');

nextButton.addEventListener('click', function () {
    checkScrollPosition();
    scrollNext();
    checkScrollPosition();

});

prevButton.addEventListener('click', function () {
    checkScrollPosition();
    scrollPrev();
    checkScrollPosition();
});

function checkScrollPosition() {
    if (Math.abs(container.scrollLeft) < 1) {
        prevButton.style.opacity = '0';
    } else {
        prevButton.style.opacity = '1';
    }

    if (Math.abs(container.scrollLeft + container.offsetWidth - container.scrollWidth) < 2) {
        nextButton.style.opacity = '0';
    } else {
        nextButton.style.opacity = '1';
    }
}

function scrollNext() {
    container.scrollLeft += window.innerWidth;
}


function scrollPrev() {
    container.scrollLeft -= window.innerWidth;
}


