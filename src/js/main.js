import '../scss/style.scss';
import '../scss/product.scss';
import '../scss/catalog.scss';
import '../scss/cart.scss';
import { animate } from "motion"


window.addEventListener('DOMContentLoaded', () => {
    console.log(window.location.href)
    if (window.location.href === 'http://localhost:5173/product.html') {
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

    }
})

let burgerOpen = false;

let burger = document.querySelector('.nav_img');
burger.addEventListener('click', () => {
    if (burgerOpen) {
        animate('.menu_wrapper', { opacity: 0, transform: 'translateY(0)' });
        animate('.menu', { opacity: 0, transform: 'translateY(-500px)' }, { duration: 0.3, easing: "ease-in-out" }).finished.then(()=> {
            burgerOpen = false;
        })

    } else {
        animate('.menu_wrapper', { opacity: 1, transform: 'translateY(0)' });
        animate('.menu', {  opacity: 1, transform: 'translateY(0)'}, { duration: 0.3, easing: "ease-in-out" }).finished.then(()=> {
            burgerOpen = true;
        })
    }

})