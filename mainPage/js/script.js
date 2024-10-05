

const smButton = document.querySelector('#sm-button');
const smWrapper = document.querySelector('#sm-wrapper');

smButton.addEventListener('click', () => {
    if(smWrapper.classList.contains('hidden') == true){
        smWrapper.classList.remove('hidden');
    }
    else{
        smWrapper.classList.add('hidden');
    }
});