"use strict"


const inputCheckList = document.querySelector('.checklist__input');
const checkListItems = document.querySelector('.checklist__items');


inputCheckList.addEventListener('keyup', function (event) {
    if (event.key == 'Enter') {
        addCheckLine()
    }
})

function addCheckLine() {
    checkListItems.innerHTML += `<li class="checklist__item item">
        <div class="item__text">${inputCheckList.value}</div>
        <div class="item__symbol">
            <div class="item__cross">&#10060</div>
            <div class="item__done">&#9989</div>
        </div>
    </li>`;
    inputCheckList.value = '';

    const allCheckList = document.querySelectorAll('.checklist__item');

    for (let item of allCheckList) {
        item.addEventListener('click', function (aim) {
            if (aim.target == this.querySelector('.item__cross')) {
                this.remove();
            } else if (aim.target == this.querySelector('.item__done')) {
                this.querySelector('.item__text').classList.toggle('_done');
            }
        })
    }
}

