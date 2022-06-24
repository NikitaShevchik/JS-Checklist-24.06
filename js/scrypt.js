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
        // item.querySelector('.item__text').addEventListener('dblclick', function(e){
        //     var textOld = this.innerHTML;
        //     var textEdit = item.querySelector('.item__text');
        //     this.innerHTML = `<input type="text" class="item__edit" value = ${textOld}>`;
        //     this.querySelector('.item__edit').addEventListener('keyup', function(e){
        //         if (e.key == 'Enter'){
        //             textEdit.innerHTML = this.value;
        //         }
        //     })
        // })

        item.addEventListener('dblclick', function (e) {
            var sybols = this.querySelector('.item__symbol');
            sybols.classList.add('_disabled');
            var text = item.querySelector('.item__text')
            if (e.target == text) {
                text.innerHTML = `<input class="item__edit" value = ${text.innerHTML}>`;
                this.querySelector('.item__edit').addEventListener('keyup', function (e) {
                    if (e.key == 'Enter') {
                        text.innerHTML = this.value;
                        sybols.classList.remove('_disabled');
                    }
                })
            }
        })




        var itemSymbol = item.querySelector('.item__symbol')

        item.addEventListener('click', function (aim) {
            if (aim.target == this.querySelector('.item__cross')) {
                this.remove();
            } else if (aim.target == this.querySelector('.item__done') && !itemSymbol.classList.contains('_disabled')) {
                this.querySelector('.item__text').classList.toggle('_done');
            }
        })
    }
}

