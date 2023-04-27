let tabs = document.querySelectorAll('.tab');
let content = document.querySelectorAll('.content-item');
let tabDur = document.querySelectorAll('.tab-dur');
let durItem = document.querySelectorAll('.dur_item');

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', () => tabClick(i));
}

function tabClick(currentTab) {

    removeActive();
    tabs[currentTab].classList.add('active');
    content[currentTab].classList.add('active');
    console.log(currentTab);
}

function removeActive() {
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
        content[i].classList.remove('active');
    }
}


for (let i = 0; i < tabs.length; i++) {
    tabDur[i].addEventListener('click', () => tabClickdur(i));
}

function tabClickdur(currentTab) {
    removeActivedur();
    tabDur[currentTab].classList.add('active');
    durItem[currentTab].classList.add('active');
    console.log(currentTab);
}

function removeActivedur() {
    for (let i = 0; i < tabDur.length; i++) {
        tabDur[i].classList.remove('active');
        durItem[i].classList.remove('active');

    }
}