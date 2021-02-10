//buttons
const prev = document.querySelector('.left');
const next = document.querySelector('.right');

//cards
const tanya = document.querySelector('.card-1');
const john = document.querySelector('.card-2');

const handleClick = () => { 
    tanya.classList.toggle('hidden');
    john.classList.toggle('hidden');
}
const handlePress = (e) => { 
    if (e.keyCode == '37' || e.keyCode == '39') { 
        tanya.classList.toggle('hidden');
        john.classList.toggle('hidden');
    }
}



prev.addEventListener('click', handleClick);
next.addEventListener('click', handleClick);
window.addEventListener('keydown', handlePress);

